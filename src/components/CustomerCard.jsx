"use client";
import React from "react";
import Link from "next/link";
import { Eye, Calendar, User } from "lucide-react";

export default function CustomerCard({ customers }) {
  if (!customers || customers.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
        <p className="text-slate-500 font-medium">No customers found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                Customer Name
              </th>
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                Birthdate
              </th>
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                Amount Spent
              </th>
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-400 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customers.map((c) => (
              <tr key={c.customerId} className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <User size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {c.firstName} {c.lastName}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-tighter text-slate-400">
                        ID: {String(c.customerId).slice(0, 8)}...
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-8 py-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span className="font-medium">
                      {c.birthDate ? new Date(c.birthDate).toLocaleDateString() : "-"}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-6">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700 ring-1 ring-inset ring-green-600/10">
                    ${typeof c.moneySpent === "number" ? c.moneySpent.toLocaleString() : c.moneySpent}
                  </span>
                </td>

                <td className="px-8 py-6 text-right">
                  <Link
                    href={`/customer/${c.customerId}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900"
                  >
                    <Eye className="h-4 w-4" />
                    View Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}