import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
    console.log("called")
    try {
        const response = await fetch("https://algoexpert.io/api/fe/questions");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return NextResponse.json({
            data
        })
    } catch (error) {
        return Response.json(error)
    }

}