import ProductSearchSection from "@/components/ProductSearchSection";
import { productService } from "@/service/ProductService";
import React from "react";

export default async function page() {
  const products = await productService.getAllProducts();

  return <ProductSearchSection products={products} />;
}
