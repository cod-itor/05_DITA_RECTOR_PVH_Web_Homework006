import ProductDetails from "@/components/ProductDetails";
import { productService } from "@/service/ProductService";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { id } = params; 
  let product = null;

  try {
    product = await productService.getProductById(id);
  } catch (error) {
    return notFound();
  }

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <ProductDetails product={product} />
    </div>
  );
}
