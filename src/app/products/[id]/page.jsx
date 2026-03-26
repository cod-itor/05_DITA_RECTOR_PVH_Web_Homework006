import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { productId } = params;

  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/products/${productId}`,
  );

  if (!res.ok) {
    
    return notFound();
  }

  const data = await res.json();

  const product = Array.isArray(data.payload)
    ? data.payload[0]
    : data.payload || null;

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <ProductDetails product={product} />
    </div>
  );
}
