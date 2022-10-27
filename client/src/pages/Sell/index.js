import React from "react";
import { Button } from "react-bootstrap";

const Sell = () => {
    const [name, setName] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [description, setDescription] = React.useState("");

    return <div>
        <h2>Sell your product</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
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
                <Button type="submit" className='mt-2'>Submit to sell</Button>
            </div>
        </form>
    </div>;
}
export default Sell;