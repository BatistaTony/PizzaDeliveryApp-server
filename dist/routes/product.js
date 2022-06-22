"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const make_create_product_controller_1 = require("../factories/controllers/make-create-product-controller");
const make_delete_product_controller_1 = require("../factories/controllers/make-delete-product-controller");
const make_get_all_product_controller_1 = require("../factories/controllers/make-get-all-product-controller");
const make_update_product_controller_1 = require("../factories/controllers/make-update-product-controller");
const productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
productRoutes.get("/getAll", (0, make_get_all_product_controller_1.makeGetAllProductController)());
productRoutes.get("/getOne/:id", async (req, res) => {
    // const product_id = req.params.id;
    // if (product_id) {
    //   try {
    //     const product = await Product.findOne({ _id: product_id });
    //     res.json({ product });
    //   } catch (error) {
    //     res.json({ message: error });
    //   }
    // } else {
    //   res.json({ message: "Id do producto ?" });
    // }
});
productRoutes.post("/create", (0, make_create_product_controller_1.makeCreateProductController)());
productRoutes.delete("/delete/:id", (0, make_delete_product_controller_1.makeDeleteProductController)());
productRoutes.post("/update", (0, make_update_product_controller_1.makeUpdateProductController)());
