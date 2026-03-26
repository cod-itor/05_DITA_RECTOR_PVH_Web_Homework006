import { notFound } from "next/navigation";
import { CustomerProfileCard } from "@/components/CustomerProfileCard";

export default async function CustomerDetailPage({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/customers/${id}`,
    { next: { revalidate: 10 } },
  );

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  const customer = Array.isArray(data.payload)
    ? data.payload[0]
    : data.payload || null;

  if (!customer) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <CustomerProfileCard customer={customer} />
      </div>
    </div>
  );
}
