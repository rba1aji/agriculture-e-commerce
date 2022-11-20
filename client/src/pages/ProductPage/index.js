import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import bg4 from '../../images/bg4.jpg';
import { prodImgUrl } from "../../reducers/ApiUrl";
import { Row } from "react-bootstrap";

export default function ProductPage() {
    const id = useParams().id;
    const [prod, setProd] = useState({});
    const [time, setTime] = useState('');
    const [prodImg, setProdImg] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProd(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        setProdImg(prodImgUrl());
    }, [])

    {
        useState(() => {
            const interval = setInterval(() => {
                setTime(new Date().toLocaleTimeString())

            }, 100);
            return () => clearInterval(interval);

        }, [])
    }

    return (
        <div style={{
            backgroundImage: `url("${bg4}")`,
            backgroundSize: "cover",
            backgroundPosition: "fixed",
            minHeight: "100vh",
            color: 'white'
        }}
            className="pt-5"
        >
            <h1></h1>
            <div className="py-4  ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prodImg} alt={prod.name}
                                style={{ height: '90vh', objectFit: 'cover' }}
                                className="img-fluid" />
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
                            <button
                                //  as={Link} to={`/buy/${prod.product_id}`} 
                                className="btn btn-primary ms-4"
                                onClick={() => {
                                    alert(`Only Cash On Delivery is available\n
                                    Contact the seller for more details
                                `)
                                }}
                            >
                                Buy now</button>

                            <br />
                            <br />
                            <h4 className="text-danger">Offer ends soon</h4>
                            <h5 className="text-danger">
                                {/* timer */}
                                {time}
                            </h5>

                            <br />
                            <br />
                            <h3 className='text-center'>Seller Details:</h3>
                            {
                                prod.image?.split(',')?.map((item, index) => {
                                    return (
                                        <p>{['Name', 'Phone number', 'emailId'][index]}:{item}</p>
                                    )
                                })

                            }

                        </div>


                    </div>



                </div>
            </div>


        </div>
    );
}