import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../../pages/root-layout/layout.tsx";
import {Suspense} from "react";
// import Pages
import HomePage from "./../../pages/home/home.tsx";
import Technologies from "../../pages/technologies/main/technologies.tsx";
import Flights from "../../pages/flights/flights.tsx";
import {LayoutAsync} from "../../shared/layout/Layout.async.ts";
import saves from "./../../shared/assets/save.jpg"
import planet from "./../../shared/assets/planet.webp";
import engine from "./../../shared/assets/engien.jpg";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'technologies',
                element: <Technologies/>,
            },
            {
                path: 'flights',
                element: <Flights/>
            },
            {
                path: 'guaranties',
                element: <Suspense fallback={<div>Loading...</div>}><LayoutAsync title={'Не безопасно'} bgImage={saves}/></Suspense>
            },
            {
                path: 'about',
                element: <Suspense fallback={<div>Loading...</div>}><LayoutAsync title={'Копия на минималках'} bgImage={planet}/></Suspense>
            },
            {
                path: 'contacts',
                element: <Suspense fallback={<div>Loading...</div>}><LayoutAsync title={'era.ab.02@gmail.com'} bgImage={engine}/></Suspense>
            },
        ]
    },

])

export default router