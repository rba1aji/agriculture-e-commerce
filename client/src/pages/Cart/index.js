import { useAppContext } from "../../reducers/AppContext";
import React from "react";
import { Card } from "react-bootstrap";

export default function Cart() {
    const { cart, setCart } = useAppContext();
    return (
        <div>
            <h1>Cart</h1>
            <div className="flex flex-col mx-4 px-4" >
                {cart.map((item) => (
                    <Card className="flex m-2 mx-4" style={{backgroundColor:'lightgreen'}}>
                        <div>Product Name: {item.name}</div>
                        <div>Stock: {item.quantity}</div>
                        <div>Price: {item.price}</div>
                        <div>Category: {item.category}</div>
                        <div>Description: {item.description}</div>
                        
                    </Card>
                ))}
            </div>
        </div>
    );
}
