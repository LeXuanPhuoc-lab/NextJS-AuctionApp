'use client'

import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { useParamsStore } from '../hooks/useParamsStore'

const Logo = () => {
    const resetParams = useParamsStore((state) => state.resetParams);

    return (
        <div onClick={resetParams} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500'>
            <AiOutlineCar size={34} />
            <div>Car Auctions</div>
        </div>
    )
}

export default Logo