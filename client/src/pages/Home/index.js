import React from "react";
import { Button } from "react-bootstrap";
import { useAppContext } from "../../reducers/AppContext";

const products = [
    {
        "id": "hdmdu0t80yjkfqselfc",
        "name": "Pestiside 1",
        "quantity": 10,
        "price": 399.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "3dc7fiyzlfmkfqseqam",
        "name": "Uriya",
        "quantity": 20,
        "price": 299.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "aoe8wvdxvrkfqsew67",
        "name": "Pestiside 2",
        "quantity": 15,
        "price": 149.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "bmfrurdkswtkfqsf15j",
        "name": "Fresh ECola",
        "quantity": 5,
        "price": 109.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "bmfrurdkswtkfqsf15j",
        "name": "Oxygenw Fresh",
        "quantity": 5,
        "price": 109.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "bmfrurdkswtkfqsf15j",
        "name": "Corbon 1",
        "quantity": 5,
        "price": 109.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "bmfrurdkswtkfqsf15j",
        "name": "NItrogen Fertilizer",
        "quantity": 5,
        "price": 109.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    },
    {
        "id": "bmfrurdkswtkfqsf15j",
        "name": "ECO Friendly Seed",
        "quantity": 5,
        "price": 109.99,
        "category": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
        "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    }
];

export default function Home() {

    const { cart, setCart } = useAppContext();

    return (
        <div className="px-5 ">
            <h2 className="text-center py-3 bg-light my-1">AGRICULTURE PRODUCTS</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3 my-3" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Price: Rs.{product.price}</h6>
                                <p className="card-text">{product.category}</p>
                                <Button  className="card-link" onClick={() => {
                                    setCart([...cart, product]);
                                    alert("Product added to cart");
                                }}>Add to cart</Button>
                               <Button href="#" className="card-link">View details</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}