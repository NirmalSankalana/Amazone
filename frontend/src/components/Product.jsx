import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
    const { product } = props;
    return (
        <Card className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className='card-img-top'/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product.slug}`} >
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text><strong>${product.price}</strong></Card.Text>
                <Button className='add-to-cart'>Add to Cart</Button>
            </Card.Body>
            <div className="product-info">

            </div>
        </Card>
    )
}

export default Product