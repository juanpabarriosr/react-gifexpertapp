import React, { useState } from 'react';

export const GifExpertApp = () => {

    // No se hace con []
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    const handleAdd = () => {
        // setCategories( [...categories, 'HunterXHunter']);
        setCategories( cats => [ ...cats, 'HunterXHunter' ]);
        // setCategories( cats => [ ...categories, 'HunterXHunter' ]);

    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick= { handleAdd } >Agregar</button>

            <ol>
            {
                categories.map( category => {
                    return <li key={ category } > { category } </li>
                })
            }
        </ol>

        </>
       
    )
}


// function GifExpertApp() {
//     return(
//         <>
//             <h2>GifExpertApp</h2>
//             <hr />
//         </>
//     )
    
// }
// export default GifExpertApp;