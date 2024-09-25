import Header from "../../shared/header/header.tsx";
import '.'
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <main className={'h-full'}>
            <Header/>
            <Outlet/>
        </main>
    );
};

export default RootLayout;
