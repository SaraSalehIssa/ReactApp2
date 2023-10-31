import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';

function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container className='row m-auto py-3'>
            {
                products.map((product) => {
                    return <div className='procuct-div col-md-4 py-3' key={product.id}>
                        <h2 className='product-title d-flex justify-content-center'>{product.title}</h2>
                        <img className='product-img' src={product.image} alt='product image' />
                    </div>
                })
            }
        </Container>
    )
}

export default Products