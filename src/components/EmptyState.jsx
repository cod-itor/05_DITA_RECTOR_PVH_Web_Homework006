"use client";

export function EmptyStateProducts({ query }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-16 px-6 text-center">
      <h3 className="text-xl font-semibold text-slate-900">No products found</h3>
      <p className="mt-2 text-slate-500">
        We couldn't find any products matching "{query}"
      </p>
      <a href="#" onClick={() => window.location.href = window.location.pathname} className="mt-4 text-blue-500 underline">
        Clear search
      </a>
    </div>
  );
}

export function EmptyStateCustomers({ query }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-16 px-6 text-center">
      <h3 className="text-xl font-semibold text-slate-900">No customer data available</h3>
      <p className="mt-2 text-slate-500">
        We couldn't find any customers matching "{query}"
      </p>
      <a href="#" onClick={() => window.location.href = window.location.pathname} className="mt-4 text-blue-500 underline">
        Clear search
      </a>
    </div>
  );
}
