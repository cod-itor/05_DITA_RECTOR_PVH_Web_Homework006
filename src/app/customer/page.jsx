import React from "react";
import { notFound } from "next/navigation";
import CustomerCard from "@/components/CustomerCard";
import { customerService } from "@/service/CustomerService";

export default async function Page() {
  let customers = [];

  try {
    customers = await customerService.getAllCustomers({
      next: { revalidate: 10 },
    });
  } catch (error) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      {/* Container width (max-w-7xl) exactly matches the Product page */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section matches Product Page style */}
        <div className="mb-12 space-y-2">
  
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Customer Directory
          </h1>
        </div>

        {/* Customer Table Component */}
        <CustomerCard customers={customers} />
        
      </div>
    </main>
  );
}