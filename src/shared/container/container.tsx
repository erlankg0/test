import React, {FC} from "react";

type Props = {
    children: React.ReactNode,
    classNames?: string,
}

const Container: FC<Props> = ({children, classNames}) => {
    return (
        <div className={`container ${classNames && classNames.split(' ').join(' ')}`}>{children}</div>
    )
}

export default Container