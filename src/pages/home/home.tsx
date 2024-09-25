import {cardData} from "./model/constants";
import Card from "./../../shared/card/card.tsx";

const Home = () => {
    return (
        <section className="flex h-[90%]">
            <div className="container flex flex-col min-h-full">
                <div className="flex flex-row justify-between w-full h-full">
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex flex-col h-1/2 px-5 gap-0">
                            <h1 className="m-0 text-[5.8rem] bg-gradient-to-r from-white to-[#ff440b] bg-clip-text text-transparent">
                                Путешествие
                            </h1>
                            <p className={'m-0 text-[2.5rem] bg-gradient-to-r from-white to-[#ff440b] bg-clip-text text-transparent'}>на
                                красную планету
                            </p>
                        </div>
                        <div className={'flex flex-col items-start'}>
                            <button type={'button'}
                                    className={'text-xl text-white px-[1.5rem] py-[1rem] border-[1px] '}>Начать
                                путешествие
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-2 grid-rows-2 justify-center my-auto">
                        {cardData.map((card, index) => (
                            <Card key={index} index={index} {...card}/>))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;