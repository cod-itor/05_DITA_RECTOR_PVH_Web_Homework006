import { notFound } from "next/navigation";
import { CustomerProfileCard } from "@/components/CustomerProfileCard";
import { customerService } from "@/service/CustomerService";

export default async function CustomerDetailPage({ params }) {
  const { id } = params;

  let customer = null;

  try {
    customer = await customerService.getCustomerById(id, {
      next: { revalidate: 10 },
    });
  } catch (error) {
    return notFound();
  }

  if (!customer) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <CustomerProfileCard customer={customer} />
      </div>
    </div>
  );
}
