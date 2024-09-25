import humaPhotoSpace from './../../../shared/assets/human.webp';
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/frame/frame.ts";
import { FC } from "react";

type Props = {
    id: string
}

const Human: FC<Props> = ({ id }) => {
    return (
        <motion.section
            id={id}
            variants={staggerContainer(0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.25 }}
            className={'h-full'}
        >
            <div className={'bg-center bg-cover bg-no-repeat h-full relative'}
                 style={{ backgroundImage: `url(${humaPhotoSpace})` }}>
                <div className={'container top-0 left-0 right-0 mx-auto absolute flex flex-col items-center justify-center w-full h-full'}>
                    <h1 className={'text-white text-8xl text-center'}>Human Spaceflight</h1>
                    <p className={'text-white text-3xl text-center'}>MAKING LIFE MULTIPLANETARY</p>
                </div>
            </div>
        </motion.section>
    )
}

export default Human;
