import React, { useEffect, useState } from 'react'

function Pizza() {
    const [pizza, setPizza] = useState([]);

    const getPizza = async () => {
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data = await response.json();
        setPizza(data.recipes);
    }

    useEffect(() => {
        getPizza();
    }, [])

    return (
        <div className='row w-100 m-0 py-3'>
            {
                pizza.map((p) => {
                    return <div className='pizza-div col-md-4 py-3' key={p.recipe_id}>
                        <h2 className='pizza-title d-flex justify-content-center'>{p.title}</h2>
                        <img className='pizza-img' src={p.image_url} alt='pizza image' />
                    </div>
                })
            }
        </div>
    )
}

export default Pizza