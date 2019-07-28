import { MoviesList } from "../components/MoviesList";
import { About } from "../components/About";
import { MovieFullDescription } from "../components/MovieFullDescription";

export const routes = [
    {
        isNavBar: true,
        isExact: true,
        path: "/",
        name: "Home",
        component: MoviesList
    },
    {
        isNavBar: true,
        path: "/about",
        name: "About",
        component: About
    },
    {
        isNavBar: false,
        path: "/movie/:id",
        name: "MovieItem",
        component: MovieFullDescription
    }
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: Login
    // }
    // {
    //     isNavBar: true,
    //     path: "/profile",
    //     name: "Profile",
    //     component: Profile,
    //     isPrivate: true
    // },
];
