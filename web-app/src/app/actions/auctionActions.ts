'use server'

import { Auction, BaseResponse, PagedResult } from "../../../types";

type Props = {
    pageIndex: number
}

export async function getData({pageIndex = 1}: Props): Promise<BaseResponse<PagedResult<Auction>>>{
    const res = await fetch(`http://localhost:6002/search?pageIndex=${pageIndex}&pageSize=4`);
    if(!res.ok) throw new Error('Failed to fetch data');
    
    return res.json();
}


