import VueRouter from "vue-router";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
//import HeaderBoard from "../components/headers/header";

import FetchVote from "../components/vote/FetchVote";
import Vote from "../components/vote/Vote";
import Single from "../components/vote/Single";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name:"Home",
            component: FetchVote
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
        
        {
            path: "/vote",
            name:"Vote",
            component: Vote,
            children: [
                {
                    path: "/", 
                    name:"FetchVote",
                    component: FetchVote
                }
                 ,
                {
                    path: ":voteid", 
                    component: Single,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                }
            ]

        }
    ]
});

export default router;
