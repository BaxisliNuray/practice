import React from 'react'
import classNames from "classnames"

function Button({ variant = "default", text, id }) {
    return (
        <>
            <button className={classNames({
                "p-3": true,
                "bg-red-200": variant === 'red',
                "bg-green-200": variant === 'green',
                "bg-yellow-200": variant === 'yellow',
                "bg-gray-200": variant === 'defalut',
            })} id={id}>{text} {variant}</button>
            <p style={{ backgroundColor:'red', color:'white' }}> 
            <i>bu hisseye reng vermeye calisdim 5.videodaki kimi amma alinmadi</i>
             </p>
        </>


    )
}

export default Button