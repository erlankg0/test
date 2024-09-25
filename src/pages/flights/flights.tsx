import humaPhotoSpace from "../../shared/assets/human.webp";
import getPeriod from './../../features/Period/period.tsx';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Flight from "./flight/flight.tsx";

const Flights = () => {
    return (
        <>
            <section className={'bg-center bg-cover bg-no-repeat h-full relative'}
                     style={{backgroundImage: `url(${humaPhotoSpace})`}}>
                <div
                    className={'container top-0 left-0 right-0 mx-auto absolute flex flex-col items-center justify-center gap-28 w-full h-full'}>
                    <div>
                        <h1 className={'text-white text-8xl text-center'}>График полетов</h1>
                        <p className={'text-white text-3xl text-center'}>{getPeriod()}</p>
                    </div>

                    <Link
                        to="#periods"
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById("flights");
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
            <Flight id={'flights'}/>
        </>
    )
}

export default Flights