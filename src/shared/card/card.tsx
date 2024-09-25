import { FC, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/frame/frame.ts";

type Props = {
    title: string;
    math: string;
    text: string;
    index: number;
};

const Card: FC<Props> = ({ title, text, math, index }) => {
    const [style, setStyle] = useState({
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid transparent",
        boxShadow: "none",
    });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const borderGlowX = Math.max(100 - (Math.abs(x - rect.width / 2) / (rect.width / 2)) * 100, 10);
        const borderGlowY = Math.max(100 - (Math.abs(y - rect.height / 2) / (rect.height / 2)) * 100, 10);

        setStyle({
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent)`,
            border: `1px solid rgba(255, 255, 255, ${borderGlowX / 100})`,
            boxShadow: `0px 0px 15px ${borderGlowY / 100}px rgba(255, 255, 255, 0.5)`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid transparent",
            boxShadow: "none",
        });
    };

    return (
        <Tilt className='w-[15rem] h-[15rem]'>
            <motion.article
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={style}
                variants={fadeIn('right', 'spring', 0.5 * index, 1)}
                className='relative card text-center flex flex-col justify-around overflow-hidden'
            >
                <h3 className='text-white text-2xl'>{title}</h3>
                <p className='text-white text-7xl'>{math}</p>
                <p className='text-white text-2xl'>{text}</p>
            </motion.article>
        </Tilt>
    );
};

export default Card;
