import humaPhotoSpace from "./../../../shared/assets/moon.jpg";
import {FC} from "react";

type Props = {
    id: string
}
const Flight: FC<Props> = ({id}) => {
    return (
        <section
            id={id}
            className={'bg-center bg-cover bg-no-repeat h-full relative'}
            style={{backgroundImage: `url(${humaPhotoSpace})`}}
        >
            <div
                className={'container top-0 left-0 right-0 mx-auto absolute flex flex-col items-center justify-center gap-28 w-full h-full'}>
                <table className="w-full text-white text-2xl text-left border-separate space-y-2">
                    <tbody>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Понедельник</td>
                        <td className="text-white font-light">Утро <span
                            className="text-gray-500">07:00</span></td>
                    </tr>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Вторник</td>
                        <td className="text-white font-light">Обеда <span
                            className="text-gray-500">12:00</span></td>
                    </tr>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Среда</td>
                        <td className="text-white font-light">Ночь <span
                            className="text-gray-500">02:00</span></td>
                    </tr>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Четверг</td>
                        <td className="text-white font-light">День <span
                            className="text-gray-500">14:00</span></td>
                    </tr>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Пятница</td>
                        <td className="text-white font-light">Вечер <span
                            className="text-gray-500">17:00</span></td>
                    </tr>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Суббота</td>
                        <td className="text-white font-light">Утро <span
                            className="text-gray-500">10:00</span></td>
                    </tr>
                    <tr className="flex flex-row justify-between border-b border-gray-700 py-2">
                        <td className="uppercase text-gray-400">Воскресенья</td>
                        <td className="text-white font-light">- <span
                            className="text-gray-500">Off day</span></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Flight