import VueRouter from "vue-router";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
//import HeaderBoard from "../components/headers/header";

import FetchVote from "../components/vote/FetchVote";


const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name:"Home",
            components: FetchVote
            
        },
        {
          path:"/login",
          name:"Login",
          component:Login
          
        },
        {
          path:"/register",
          name:"Register",
          component:Register
        },
    ]
});

export default router;
