import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";
import NoLayout from "@/layouts/NoLayout";

import Home from "@/pages/Home";
import News from "@/pages/News";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";

import paths from "@/configs/paths";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.home, component: Home },
            { path: paths.news, component: News },
            { path: paths.about, component: About },
        ],
    },
    {
        layout: AuthLayout,
        children: [
            { path: paths.login, component: Login },
            { path: paths.register, component: Register },
        ],
    },
    {
        layout: NoLayout,
        children: [{ path: paths.notFound, component: NotFound }],
    },
];

export default routes;
