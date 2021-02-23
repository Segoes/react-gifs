import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifs( category )
   

    return (
        <>
            <h3>{ category }</h3>
            {<div className="card-grid">
                {
                    data.map( img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }  
            </div>}
        </>
    )
}

export default GifGrid;
