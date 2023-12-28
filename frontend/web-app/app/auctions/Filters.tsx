import { Button } from 'flowbite-react';
import React from 'react'
import { userParamStore } from '../hooks/userParamsStore';

const pageSizeButtons = [4, 8, 12];

export default function Filters() {
    const pageSize = userParamStore(state => state.pageSize);
    const setParams = userParamStore(state => state.setParams);

    return (
        <div className='flex justify-between items-center mb-4'>
            <div>
                <span className='uppercase text-sm text-gray-500 mr-2'>Page size</span>
                <Button.Group outline>
                    {pageSizeButtons.map((value, i) => (
                        <Button
                            key={i}
                            onClick={() => { setParams({ pageSize: value }) }}
                            color={`${pageSize === value ? 'red' : 'gray'} `}>
                            {value}
                        </Button>
                    ))}
                </Button.Group>
            </div>
        </div>
    )
}
