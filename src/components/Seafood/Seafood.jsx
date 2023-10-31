import React, { useEffect, useState } from 'react'

function Seafood() {
    const [seafood, setSeafood] = useState([]);

    const getSeafood = async () => {
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=seafood");
        let data = await response.json();
        setSeafood(data.recipes);
    }

    useEffect(() => {
        getSeafood();
    }, []);

    return (
        <div className='row w-100 m-0 py-3'>
            {
                seafood.map((s) => {
                    return <div className='seafood-div col-md-4 py-3' key={s.recipe_id}>
                        <h2 className='seafood-title d-flex justify-content-center'>{s.title}</h2>
                        <img className='seafood-img' src={s.image_url} alt='seafood image' />
                    </div>
                })
            }
        </div>
    )
}

export default Seafood