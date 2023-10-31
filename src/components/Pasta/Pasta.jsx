import React, { useEffect, useState } from 'react'

function Pasta() {
    const [pasta, setPasta] = useState([]);

    const getPasta = async () => {
        let respone = await fetch("https://forkify-api.herokuapp.com/api/search?q=pasta");
        let data = await respone.json();
        setPasta(data.recipes);
    }

    useEffect(() => {
        getPasta();
    }, []);

    return (
        <div className='row w-100 m-0 py-3'>
            {
                pasta.map((p) => {
                    return <div className='pasta-div col-md-4 py-3' key={p.recipe_id}>
                        <h2 className='pasta-title d-flex justify-content-center'>{p.title}</h2>
                        <img className='pasta-img' src={p.image_url} alt='pasta image' />
                    </div>
                })
            }
        </div>
    )
}

export default Pasta