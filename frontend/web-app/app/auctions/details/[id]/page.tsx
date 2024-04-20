import { getBidsForAuctions, getDetailedViewData } from '@/app/actions/auctionActions'
import Heading from '@/app/components/Heading';
import React from 'react'
import CountdownTimer from '../../CountdownTimer';
import CarImages from '../../CarImages';
import DetailedSpecs from './DetailsSpaces';
import { getCurrentUser } from '@/app/actions/authActions';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import BidItem from './BidItem';
import BidList from './BidList';

export default async function Details({ params }: { params: { id: string } }) {
    const data = await getDetailedViewData(params.id);
    const user = await getCurrentUser();
    // const bids = await getBidsForAuctions(params.id);

    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Heading title={`${data.make} ${data.model}`} />
                    {user?.username === data.seller && (
                        <>
                            <EditButton id={data.id} />
                            <DeleteButton id={data.id} />
                        </>
                    )}
                </div>
                <div className='flex gap-3'>
                    <h3>Time remaining</h3>
                    <CountdownTimer auctionEnd={data.auctionEnd} />
                </div>
            </div>
            <div className='grid grid-cols-2 gap6 mt-3'>
                <div className='w-full bg-gray-200 aspect-h-10 aspect-w-16 rounded-lg overflow-hidden'>
                    <CarImages imageUrl={data.imageUrl} />
                </div>
                <BidList user={user} auction={data} />
            </div>
            <div className='mt-3 grid grid-cols-1 rounded-lg'>
                <DetailedSpecs auction={data} />
            </div>
        </div>
    )
}
