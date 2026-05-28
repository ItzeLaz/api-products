import productsDAO from "../dao/products.dao.js";

const productsControllers = {};

productsControllers.getAll = async (req, res) => {
    try {
        const products = await productsDAO.getAll();
        res.json({ data: products });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

productsControllers.getOne = async (req, res) => {
    try {
        const product = await productsDAO.getOne(req.params.barcode);
        product ? res.json(product) : res.status(404).json({ error: "Product not found" });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

productsControllers.insertOne = async (req, res) => {
    try {
        const newProduct = await productsDAO.insertOne(req.body);
        res.status(201).json({ message: "Product inserted", product: newProduct });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

productsControllers.updateOne = async (req, res) => {
    try {
        const updated = await productsDAO.updateOne(req.params.barcode, req.body);
        updated ? res.json({ message: "Product updated", data: updated }) : res.status(404).json({ error: "Product not found" });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

productsControllers.deleteOne = async (req, res) => {
    try {
        const deleted = await productsDAO.deleteOne(req.params.barcode);
        deleted ? res.json({ message: "Product deleted" }) : res.status(404).json({ error: "Product not found" });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

export default productsControllers;