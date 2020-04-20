import VueRouter from "vue-router";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

import Profil from "../components/auth/Profil";


//import Vote from "../components/vote/Vote"; // Component parent pour Afficher , Créer , Supprimer et Modifier un sujet de vote

import FetchVote from "../components/vote/FetchVote"; // Afficher tout les sujets de vote
import Single from "../components/vote/Single";  // Afficher les informations d'un sujet de vote
import Edit from "../components/vote/Edit";  // Éditer un sujet de vote
import Create from "../components/vote/Create";   // Créer un sujet de vote
import Delete from "../components/vote/Delete";  // Supprimer un sujet de vote
import Submit from "../components/vote/Submit"


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
            path:"/profil",
            name:"Profil",
            component:Profil
          },
        {
                    path: "/vote/update/:voteid",
                    name:"edit",
                    component: Edit,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                },
                {
                    path: "/vote/delete/:voteid",
                    name:"delete",
                    component: Delete,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                },
                {
                    path: "/vote/create",
                    name:"create",
                    component: Create
                },
                {
                    path: "/vote/:voteid", 
                    name: 'single',
                    component: Single,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                },
                {
                    path: "/vote/submit/:voteid", 
                    name: 'submit',
                    component: Submit,
                    props: (route) =>  ({
                        id: route.params.voteid
                    })
                }
         
    ]
});

router.beforeEach((to,from,next) => {

    const publicPages = ['/login','/register'];
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('UUID');

    if(authRequired && !loggedIn){
        return next('/login');
    }

    next()

} )

export default router;
