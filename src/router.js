import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import MasterAlbumList from "./views/MasterAlbumList"
import MasterAlbumDetails from "./views/MasterAlbumDetails"

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
        }
    ]
});

export default router;
