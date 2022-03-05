import Vue from "vue";
import VueRouter from "vue-router";
import {validateAdmin} from "./apis/admin_api";

import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";

import MasterAlbumList from "./views/masterAlbum/MasterAlbumList"
import MasterAlbumDetails from "./views/masterAlbum/MasterAlbumDetails"
import MasterAlbumForm from "./views/masterAlbum/MasterAlbumForm"

import ArtistDetails from "./views/artist/ArtistDetails";
import CreateArtistForm from "./views/artist/CreateArtistForm";

import ReleaseAlbumDetails from "./views/releaseAlbum/ReleaseAlbumDetails";

// const isAuthenticationMember = (to, from, next) => {
//     if (localStorage.getItem('access_token') !== null) {
//         next()
//     } else {
//         next('/no-auth');
//     }
// };

const isAdmin = (to, from, next) => {
    validateAdmin().then(() => next())
        .catch(()=> {
            alert("no auth");
            next("/");
        })
        // .catch(() => store.commit('OPEN_MODAL', {
        //     title: '접속 권한 없음.',
        //     content: '관리자전용 페이지 입니다',
        //     option1: '닫기',
        // }))
};


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path:"/", 
            component: Home
        },
        {
            path:"/about", 
            component: About
        },
        {
            path:"/loginPage",
            component: Login
        },
        {
            path:"/masters",
            component: MasterAlbumList
        },
        { 
            path: '/masters/:id', 
            component: MasterAlbumDetails
        },
        { 
            path: '/masterCreate', 
            component: MasterAlbumForm,
            beforeEnter: (to, form, next) => isAdmin(to, form, next),
        },
        { 
            path: '/artists/:id', 
            component: ArtistDetails
        },
        { 
            path: '/artistCreate', 
            component: CreateArtistForm
        },
        { 
            path: '/releases/:id', 
            component: ReleaseAlbumDetails
        },
    ]
});

export default router;
