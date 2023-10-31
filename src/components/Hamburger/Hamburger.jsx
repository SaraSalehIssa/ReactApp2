import React, { useEffect, useState } from 'react'

function Hamburger() {
    const [hamburger, setHamburger] = useState([]);

    const getHamburger = async () => {
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=hamburger");
        let data = await response.json();
        setHamburger(data.recipes);
    }

    useEffect(() => {
        getHamburger();
    }, [])

    return (
        <div className='row w-100 m-0 py-3'>
            {
                hamburger.map((h) => {
                    return <div className='hamburger-div col-md-4 py-3' key={h.recipe_id}>
                        <h2 className='hamburger-title d-flex justify-content-center'>{h.title}</h2>
                        <img className='hamburger-img' src={h.image_url} alt='hamburger image' />
                    </div>
                })
            }
        </div>
    )
}

export default Hamburger