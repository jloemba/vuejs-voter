import VueRouter from "vue-router";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
//import HeaderBoard from "../components/headers/header";


import Vote from "../components/vote/Vote"; // Component parent pour Afficher , Créer , Supprimer et Modifier un sujet de vote

import FetchVote from "../components/vote/FetchVote"; // Afficher tout les sujets de vote
import Single from "../components/vote/Single";  // Afficher les informations d'un sujet de vote
import Edit from "../components/vote/Edit";  // Éditer un sujet de vote
import Create from "../components/vote/Create";   // Créer un sujet de vote
import Delete from "../components/vote/Delete";  // Supprimer un sujet de vote

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
                },
                {
                    path: "update/:voteid",
                    name:"Edit",
                    component: Edit,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                },
                {
                    path: "delete/:voteid",
                    name:"Delete",
                    component: Delete,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                },
                {
                    path: "create/",
                    name:"Create",
                    component: Create,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                },
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
