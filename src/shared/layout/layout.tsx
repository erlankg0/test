import {motion} from "framer-motion";
import {FC} from "react";
import {textVariant} from "../../utils/frame/frame.ts";

type Props = {
    bgImage: string,
    title: string,
    subtext?: string,
}
const Layout: FC<Props> = ({bgImage, title, subtext}) => {
    return (
        <>
            <motion.section
                className={'bg-center bg-cover bg-no-repeat h-full relative'}
                style={{backgroundImage: `url(${bgImage})`}}
                variants={textVariant(66)}
                initial="hidden"
                animate="show"
            >
                <div
                    className={'container top-0 left-0 right-0 mx-auto absolute flex flex-col items-center justify-center gap-28 w-full h-full'}>
                    <div>
                        <h1 className={'text-white text-8xl text-center'}>{title}</h1>
                        {subtext && (<p className={'text-white text-[1.6rem] text-center'}>{subtext}</p>)}
                    </div>

                </div>
            </motion.section>
        </>
    )
}

export default Layout