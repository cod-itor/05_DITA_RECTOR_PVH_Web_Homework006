import Link from "next/link";
import { Eye, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

export default async function page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/customers",
    { next: { revalidate: 10 } },
  );

  if (!res.ok) {

    return notFound();
  }

  const data = await res.json();
  const customers = Array.isArray(data.payload)
    ? data.payload
    : data.payload
      ? [data.payload]
      : [];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Customers</h1>

        <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Customer Name
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Birthdate
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Amount Spent
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.customerId} className="border-t last:border-b">
                  <td className="px-6 py-5 align-top">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">
                        {c.firstName} {c.lastName}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        ID: {String(c.customerId).slice(0, 8)}...
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 align-top text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>
                        {c.birthDate
                          ? new Date(c.birthDate).toLocaleDateString()
                          : "-"}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 align-top">
                    <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">
                      $
                      {typeof c.moneySpent === "number"
                        ? c.moneySpent
                        : String(c.moneySpent)}
                    </span>
                  </td>

                  <td className="px-6 py-5 align-top">
                    <Link
                      href={`/customer/${c.customerId}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 text-sm text-slate-700"
                    >
                      <Eye className="h-4 w-4 text-slate-600" />
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
