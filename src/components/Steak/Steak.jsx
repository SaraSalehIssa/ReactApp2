import React, { useEffect, useState } from 'react'

function Steak() {
    const [steak, setSteak] = useState([]);

    const getSteak = async () => {
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=steak");
        let data = await response.json();
        setSteak(data.recipes);
    }

    useEffect(() => {
        getSteak();
    }, []);

    return (
        <div className='row w-100 m-0 py-3'>
            {
                steak.map((s) => {
                    return <div className='steak-div col-md-4 py-3' key={s.recipe_id}>
                        <h2 className='steak-title d-flex justify-content-center'>{s.title}</h2>
                        <img className='steak-img' src={s.image_url} alt='steak image' />
                    </div>
                })
            }
        </div>
    )
}

export default Steak