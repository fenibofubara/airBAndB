import React, { forwardRef } from 'react'
import Image from 'next/image';

const PrimaryBtn = ({ onEvent, btnClass, dataRoute, label, allowBtn }, ref) => {

    const classSty = `${btnClass} flex justify-center items-center`;

    const buttonSubmit = (e) => {
        console.log(label, dataRoute)
        if (onEvent) {
            return onEvent(e)
        }
    }

    return (
        <button ref={ref} type="button" data-route={dataRoute} onClick={buttonSubmit} className={classSty}>
            {label}
        </button>
    )
}

export default forwardRef(PrimaryBtn);