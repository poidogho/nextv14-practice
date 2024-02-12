'use client'
import React from 'react'
import { useGetQuestions } from '@/hooks/useQuestions'
import { useCryptosQuery } from '@/hooks/useGetCryptos'

const PokemonList = () => {
    const questions = useGetQuestions()
    console.log({ questions })
    const { data: cryptos, isLoading, isError } = useCryptosQuery(10, 1);

    console.log({ crypto })

    return (
        <div>pokemonList</div>
    )
}

export default PokemonList