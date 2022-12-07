import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ApiUrl } from "../../reducers/ApiUrl";
import { useAppContext } from "../../reducers/AppContext";
import { Link } from 'react-router-dom';
import poster1 from '../../images/poster1.jpg';

export default function Home() {

    const [products, setProducts] = React.useState([]);

    useEffect(() => {

        axios.get(`${ApiUrl}/products`)
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    const { cart, setCart } = useAppContext();

    return (
        <div className="px-5 ">
            <table style={{width:'100vw', height:'70vh'}}>
                <tbody>
                    <tr style={{width:'50%'}} className='pe-5 me-4'>
                        <td><img src={poster1} style={{width:'75%'}} />
                    </td><td style={{width:'50%'}} className='h1 pe-5 me-5'>
                        You are smart if you sell your agriculture products here
                        <br/>Get the best price for it.
                        </td></tr>
                </tbody>     </table>
                <Button variant='info' className='mx-5 px-5 h2 text-white'> <a href='#products'><h2>Get Started</h2></a></Button>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className="text-center pt-3 mt-1"
    id='products'
                style={{
                    color: '#0d6efd',
                    textShadow: "2px 2px 2px #fff",
                    fontWeight: "bolder",
                }}

            >AGRICULTURE PRODUCTS</h2>
            <p className="text-center ">available for selling</p>

            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3 my-3" key={product.id}>
                        <div className="card" style={{ backgroundColor: '#daf1f1' }}>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Price: Rs.{product.price}</h6>
                                <p className="card-text">category:{product.category}</p>
                                <p className="card-text">{product.description}</p>
                                <Button className="card-link"
                                    variant='info'
                                    onClick={() => {
                                        setCart([...cart, product]);
                                        alert("Product added to cart");
                                    }}>Add to cart</Button>
                                <Button as={Link} to={`/product/${product.product_id}`}
                                    variant='warning'
                                    className="card-link">View details</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}