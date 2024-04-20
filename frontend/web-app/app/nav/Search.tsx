'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { userParamStore } from '../hooks/userParamsStore'
import { usePathname, useRouter } from 'next/navigation'

export default function Search() {
    const router = useRouter()
    const pathName = usePathname();
    const serParams = userParamStore(state => state.setParams);
    const setSearchValue = userParamStore(state => state.setSearchValue);
    const searchValue = userParamStore(state => state.searchValue);

    function onChange(event: any) {
        setSearchValue(event.target.value);
    }

    function search() {
        if (pathName !== '/') router.push('/')
        serParams({ searchTerm: searchValue });
    }

    return (
        <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
            <input
                onKeyDown={(e: any) => {
                    if (e.key === 'Enter') search();
                }}
                value={searchValue}
                onChange={onChange}
                type='text'
                placeholder='Search for a cars by make, model or color'
                className='
                    input-custom
                    text-sm
                    text-gray-600
                '
            />
            <button onClick={search}>
                <FaSearch
                    size={34}
                    className="bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
            </button>
        </div>
    )
}
