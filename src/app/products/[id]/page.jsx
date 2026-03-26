import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";


export default async function ProductPage({ params }) {
  const {productId} = await params;

   const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/products/${productId}`);
  const products = await res.json();


  return (
    <>
    <div className="min-h-screen bg-slate-50 py-12">
      <ProductDetails product={products.payload} />
    </div>
    
    </>
  );
}
