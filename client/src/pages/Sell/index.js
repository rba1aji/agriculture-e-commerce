import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { ApiUrl } from "../../reducers/ApiUrl";

const Sell = () => {
    const [name, setName] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");

    return <div className='mt-4 py-auto' style={{ height: '110vh' }}>
        <h2 >Sell your product</h2>

        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(name, quantity, price, category, description, image);
            axios.post("http://localhost:5000/products", {
                name, price, description, category, quantity, image
            })
                .then((res) => {
                    console.log(res);
                    alert("Product listed for selling");
                })
        }}>
            <style>
                {`
                .form - group label {
                    color:white;
                }
            `}
            </style>
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <br />
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                <br />
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={price} onChange={e => setPrice(e.target.value)} />
                <br />
                <label htmlFor="category">Category</label>
                <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} />
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} />
                <br />

                <label
                    className='pt-5'
                    htmlFor="description"
                    style={{ color: 'white', fontWeight: 'bolder', textShadow: '2px 2px 5px black' }}
                >Enter Seller details as comma seperated value
                    <br />
                    (Name, phone no, email id)</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
                <br />
                <br />
                <Button type="submit" className='mt-2'>Submit to sell</Button>
            </div>
        </form>
    </div>;
}
export default Sell;