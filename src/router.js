import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import MasterAlbumList from "./views/masterAlbum/MasterAlbumList"
import MasterAlbumDetails from "./views/masterAlbum/MasterAlbumDetails"
import MasterAlbumForm from "./views/masterAlbum/MasterAlbumForm"

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
            component: MasterAlbumForm
        }
    ]
});

export default router;
