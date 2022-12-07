import { useAppContext } from "../../reducers/AppContext";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, setCart } = useAppContext();
    return (
        <div className='mx-5 mt-3'>
            <h1>Cart</h1>
            <br />
            {
                cart.length === 0 &&
                <h5 className='text-secondary'>Your Cart is Empty! </h5>}{
                cart.length === 0 && <h4 className='text-info'>Add Some products</h4>
            }
            {cart && <h5 className='text-center'>Your cart has {cart.length} agriculture products
            </h5>}
            <div className="d-flex mx-auto px-auto text-center"  >
                {cart.map((item, index) => (
                    <Card className="flex m-4 mx-4 text-center " style={{ width: '400px', backgroundColor: 'lightgreen' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ width: '20%', backgroundColor: 'yellowgreen' }}>
                                        {index + 1}
                                    </td>
                                    <td className='bg-dark' style={{ width: '1%' }}>
                                    </td>
                                    <td style={{backgroundColor:'azure'}}>

                                        <div>Product Name: {item.name}</div>
                                        <div>Stock: {item.quantity}</div>
                                        <div>Price: {item.price}</div>
                                        <div>Category: {item.category}</div>
                                        <div>Description: {item.description}</div>

                                    </td>
                                    <td className='bg-dark' style={{ width: '1%' }}></td>
                                    <td style={{ width: '20%', backgroundColor: 'yellowgreen' }}>
                                        <Link to={`/product/${item.product_id}`} className="card-link">
                                            View more details
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                ))}
            </div>
            <div>
                {/* total cost */}
                <h2 className='text-center fw-bolder color-white'>Total Cost: 
                <br/>
                Rs. {cart.reduce((acc, item) => acc + item.price, 0)}</h2>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}
