'use client'

import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { userParamStore } from '../hooks/userParamsStore';

export default function Logo() {
    const reset = userParamStore(store => store.reset);

    return (
        <div onClick={reset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500'>
            <AiOutlineCar size={34} />
            <div> Carsties Auctions</div>
        </div>
    )
}
