'use client'

import React, { useEffect, useState } from 'react'
import AuctionCard from './AuctionCard';
import { Auction, PagedResult } from '@/types';
import AppPagination from '../components/AppPagination';
import { getData } from '../actions/auctionActions';
import Filters from './Filters';
import { userParamStore } from '../hooks/userParamsStore';
import { shallow } from 'zustand/shallow';
import qs from 'query-string';
import EmptyFilter from '../components/EmptyFilter';

export default function Listings() {
    const [data, setData] = useState<PagedResult<Auction>>();
    const params = userParamStore(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: state.searchTerm,
        orderBy: state.orderBy,
        filterBy: state.filterBy,
        seller: state.seller,
        winner: state.winner
    }), shallow);

    const setParams = userParamStore(state => state.setParams);

    const url = qs.stringifyUrl({ url: '', query: params })

    function setPageNumber(pageNumber: number) {
        setParams({ pageNumber })
    }

    useEffect(() => {
        getData(url)
            .then(data => {
                setData(data)
            })
    }, [url])

    if (!data) return (<div><h3 >Loading....</h3></div>)

    if (data.totalCount === 0) return <EmptyFilter showReset />

    return (
        <>
            <Filters />
            {data.totalCount === 0 ? (<EmptyFilter showReset />) : (
                <>
                    <div className='grid grid-cols-4 gap-6'>
                        {data.results.map((auction) => (
                            <AuctionCard auction={auction} key={auction.id} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-4'>
                        <AppPagination pageChanged={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount} />
                    </div>
                </>
            )}

        </>
    )
}
