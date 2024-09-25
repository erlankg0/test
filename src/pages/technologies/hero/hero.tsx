import {motion} from "framer-motion";
import {textVariant} from "../../../utils/frame/frame.ts";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className='container'>
            <div className='flex flex-col h-screen justify-around'>
                <motion.div
                    variants={textVariant(66)}
                    initial="hidden"
                    animate="show"
                >
                    <h2 className='text-white text-[10rem] text-center my-3.5 md:text-[6rem] sm:text-[4rem]'>
                        Наши технологии
                    </h2>
                </motion.div>

                <Link
                    to="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById("about");
                        if (target) {
                            target.scrollIntoView({behavior: "smooth"});
                        }
                    }}
                    aria-label="Scroll down to about section"
                    className='focus:outline-none mx-auto'
                >
                    <div
                        className='w-[35px] h-[64px] border-4 rounded-3xl border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{y: [0, 24, 0]}}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-amber-50 mb-1"
                        />
                    </div>
                </Link>
            </div>
        </section>

    )
}

export default Hero;