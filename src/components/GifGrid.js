import React from 'react'
import { GifGridItems } from './GifGridItems'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs( category )



    return (
        <>
            <h3>{ category }</h3>

            { loading && <h6>Cargando . . .</h6>}

            <div className='card-grid'>
                    {
                        images.map( img => (
                            <GifGridItems key={ img.id } { ...img }/>
                        ))
                    }
            </div>
        </>
    )
}
