import Human from "../human/human.tsx";
import Hero from "../hero/hero.tsx";
import bgVideo from './../../../shared/assets/video/startship.mp4';

const Technologies = () => {
    return (
        <>
            <Hero/>
            <Human id={'about'}/>
            <section className="video-background relative">
                <video autoPlay muted loop className="bg-video">
                    <source src={bgVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className={'container top-0 absolute h-full w-full flex justify-center items-center z-10'}>
                    <article className={'w-3/4 max-w-[50rem] text-center flex flex-col gap-10'}>
                        <div className={'flex flex-col'}>
                            <h3 className={'text-white text-6xl mb-4 text-left'}>Starship Overview</h3>
                            <p className={'text-white text-3xl text-left'}>
                                Космический корабль Starship и сверхтяжелая ракета SpaceX - в совокупности называемые
                                Starship - представляют собой полностью многоразовую транспортную систему,
                                предназначенную для доставки экипажа и грузов на околоземную орбиту, Луну, Марс и далее.
                                Starship - самая мощная в мире ракета-носитель, способная вывести на орбиту до 150 тонн
                                грузов многоразового использования и до 250 тонн грузов многоразового использования.
 </p>
                        </div>
                        <table className="w-full text-white text-2xl text-left border-separate space-y-2">
                            <tbody>
                            <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                                <td className="uppercase text-gray-400">Вес</td>
                                <td className="text-white font-light">121 м <span
                                    className="text-gray-500">/ 397 ft</span></td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                                <td className="uppercase text-gray-400">Диаметр</td>
                                <td className="text-white font-light">9 m <span
                                    className="text-gray-500">/ 29.5 ft</span></td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                                <td className="uppercase text-gray-400">Грузоподъемность</td>
                                <td className="text-white font-light">100 – 150 т <span className="text-gray-500">(полностью многоразовый)</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </article>
                </div>
            </section>
        </>
    );
};

export default Technologies;
