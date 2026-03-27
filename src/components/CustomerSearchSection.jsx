"use client";

import { useMemo, useState } from "react";
import Example from "@/components/examples/input/types/input-types-4";
import CustomerCard from "@/components/CustomerCard";

export default function CustomerSearchSection({ customers }) {
  const [query, setQuery] = useState("");

  const filteredCustomers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return customers;

    return customers.filter((customer) => {
      const name = `${customer?.firstName ?? ""} ${customer?.lastName ?? ""}`
        .trim()
        .toLowerCase();
      const descriptionCandidate = (
        customer?.description ??
        customer?.bio ??
        customer?.notes ??
        ""
      ).toLowerCase();

      return name.includes(normalized) || descriptionCandidate.includes(normalized);
    });
  }, [customers, query]);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Catalog
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Customer Directory
            </h1>
          </div>
          <div className="w-full md:w-80">
            <Example
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search customers..."
              inputId="customer-search"
            />
          </div>
        </div>

        {filteredCustomers.length ? (
          <CustomerCard customers={filteredCustomers} />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No customers match “{query}”.
          </div>
        )}
      </div>
    </main>
  );
}
