// import React, { useState, useEffect } from 'react'
import React from 'react'
// import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { loading } = useFetchGifs();

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ] )

    

    return (
        <>
            <h3> { category } </h3>

            { loading ? 'Cargando...' : 'Data Cargada'}

            {/* <div className="card-grid">
                {
                    images.map( img => (
                        < GifGridItem 
                            key = { img.id }
                            {...img}    
                        />
                    ))
                }
            </div> */}
        </>
    )
}
