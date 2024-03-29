'use client'
import { useQuery } from '@tanstack/react-query'

type CryptoQueryKey = ['cryptos', number, number];
interface QueryFunctionContext {
    queryKey: CryptoQueryKey;
}
const fetchCryptos = async ({ queryKey }: QueryFunctionContext) => {
    const [, limit, start] = queryKey;
    const url = `/api/cryptos?limit=${limit}&start=${start}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


export const useCryptosQuery = (limit: number, start: number) => {
    return useQuery({
        queryKey: ['cryptos', limit, start],
        queryFn: fetchCryptos,
        //@ts-ignore
        options: {
            keepPreviousData: true,
            refetchInterval: 60000
        }
    });
};