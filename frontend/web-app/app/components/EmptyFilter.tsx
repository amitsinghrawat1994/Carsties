'use client'

import React from 'react'
import { userParamStore } from '../hooks/userParamsStore'
import Heading from './Heading'
import { Button } from 'flowbite-react'
import { signIn } from 'next-auth/react'

type Props = {
    title?: string,
    subtitle?: string,
    showReset?: boolean,
    showLogin?: boolean,
    callbackUrl?: string
}

export default function EmptyFilter({
    title = 'No Matches fro this filter',
    subtitle = 'Try changing or resetting the filter',
    showReset,
    showLogin,
    callbackUrl
}: Props) {

    const reset = userParamStore(state => state.reset)

    return (
        <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
            <Heading title={title} subTitle={subtitle} center />
            <div className='mt-4'>
                {showReset && (
                    <Button outline onClick={reset}>Remove Filters</Button>
                )}
                {showLogin && (
                    <Button outline onClick={() => signIn('id-server', { callbackUrl })}>Login</Button>
                )}
            </div>
        </div>
    )
}
