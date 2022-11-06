const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//mw
app.use(cors());
app.use(express.json());

//route
// create a product
app.post("/products", async (req, res) => {
    try {
        const { name, price, description, category, quantity } = req.body;
        const newProduct = await pool.query(
            "INSERT INTO products (name, price, description, category, quantity) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, price, description, category, quantity]
        );
        res.json(newProduct.rows[0]);
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});
app.get("/products", async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.json(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);
        res.json(product.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//add to cart
app.post("/cart", async (req, res) => {
    try {
        const { product_id } = req.body;
        const newCart = await pool.query(
            "INSERT INTO cart (product_id) VALUES($1) RETURNING *",
            [product_id]
        );
        res.json(newCart.rows[0]);
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});






const port = 5000;
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});
