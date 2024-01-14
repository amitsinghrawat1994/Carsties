'use server'

import { Auction, PagedResult } from "@/types";
import { getTokenWorkaround } from "./authActions";
import { fetchWrapper } from "../lib/fetchWrapper";
import { FieldValues } from "react-hook-form";

export async function getData(query: string): Promise<PagedResult<Auction>> {
    return await fetchWrapper.get(`search${query}`)
}

export async function updateAuctionTest() {
    const data = {
        milage: Math.floor(Math.random() * 100000) + 1
    }

    return await fetchWrapper.put('auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', data);
    // const token = await getTokenWorkaround();

    // const res = await fetch('http://localhost:6001/auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': 'Bearer ' + token?.access_token
    //     },
    //     body: JSON.stringify(data)
    // })

    // if (!res.ok) return { status: res.status, message: res.statusText }

    // return res.statusText;
}

export async function createAuction(data: FieldValues) {
    return await fetchWrapper.post('auctions', data);
}