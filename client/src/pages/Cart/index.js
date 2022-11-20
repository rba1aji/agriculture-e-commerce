import { useAppContext } from "../../reducers/AppContext";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, setCart } = useAppContext();
    return (
        <div className='mx-5'>
            <h1>Cart</h1>
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
                                    <td>

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
        </div>
    );
}
