import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import 'normalize-scss'
import App from "./app/index.tsx";
import {ParallaxProvider} from "react-scroll-parallax";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ParallaxProvider>
            <App/>
        </ParallaxProvider>
    </StrictMode>,
)
