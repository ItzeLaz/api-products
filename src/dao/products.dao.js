import Product from "../models/Products.js";

const productsDAO = {};

productsDAO.getAll = async () => await Product.find();

productsDAO.getOne = async (barcode) => await Product.findOne({ barcode: barcode });

productsDAO.insertOne = async (productData) => await Product.create(productData);

productsDAO.updateOne = async (barcode, product) => 
    await Product.findOneAndUpdate({ barcode: barcode }, product, { new: true });

productsDAO.deleteOne = async (barcode) => await Product.findOneAndDelete({ barcode: barcode });

export default productsDAO;