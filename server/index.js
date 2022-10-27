const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//mw
app.use(cors());
app.use(express.json());

//routes
// create a product
app.post("/products", async (req, res) => {
    try {
        const { name, price, category, description, quantity } = req.body;
        const newProduct = await pool.query(
            "INSERT INTO products (name, price, description, category, quantity) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, price, description, category, quantity]
        );
        res.json(newProduct.rows[0]);
    } catch (err) {
        console.error(err.message)
        }
});

// get all products
app.get("/product", async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.json(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a product
app.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pool.query("SELECT * FROM product WHERE id = $1", [id]);
        res.json(product.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update a product
app.put("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, category, quantity, seller_id } = req.body;
        const updateProduct = await pool.query(
            "UPDATE products SET name = $1, price = $2, description = $3, category = $4, quantity = $5, seller_id = $6 WHERE id = $7",
            [name, price, description, category, quantity, seller_id, id]
        );
        res.json("Product was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// delete a product
app.delete("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await pool.query("DELETE FROM products WHERE id = $1", [id]);
        res.json("Product was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

// create a seller
app.post("/seller", async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        const newSeller = await pool.query(
            "INSERT INTO sellers (name, email, password, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, email, password, phone, address]
        );
        res.json(newSeller.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get a seller
app.get("/seller/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const seller = await pool.query("SELECT * FROM sellers WHERE seller_id = $1", [id]);
        res.json(seller.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// create a buyer
// app.post("/buyer", async (req, res) => {
//     try {
//         const { name, email, password, phone, address } = req.body;
//         const newBuyer = await pool.query(
//             "INSERT INTO buyer (name, email, password, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING *",
//             [name, email, password, phone, address]
//         );
//         res.json(newBuyer.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });




const port = 6000;
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});
