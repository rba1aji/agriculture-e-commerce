import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import bg4 from '../../images/bg4.jpg';

export default function ProductPage() {
    const id = useParams().id;
    const [prod, setProd] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProd(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    return (
        <div style={{
            backgroundImage: `url("${bg4}")`,
            backgroundSize: "cover",
            backgroundPosition: "fixed",
            minHeight: "100vh",
            color:'white'
        }}
            className="pt-5"
        >
            <h1></h1>
            <div className="py-4 mb-4 ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prod.image} alt={prod.name} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2>{prod.name}</h2>
                            <h4>Rs.{prod.price}</h4>
                            <p>{prod.description}</p>
                            <button className="btn btn-primary"
                                onClick={() => {
                                    axios.post(`http://localhost:5000/cart`, {
                                        product_id: prod.product_id,
                                    })
                                        .then((res) => {
                                            console.log(res.data);
                                        })
                                        .catch((err) => {
                                            console.log(err.message);
                                        })
                                    alert("Product added to cart");
                                }}
                            >Add to cart</button>
                            <button as={Link} to={`/buy/${prod.product_id}`} className="btn btn-primary ms-4">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}