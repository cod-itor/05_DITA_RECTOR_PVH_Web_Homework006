import Link from "next/link";
import { Calendar, DollarSign, ArrowLeft, IdCard } from "lucide-react";

export function CustomerProfileCard({ customer }) {
  if (!customer) return null;

  const fullName =
    [customer.firstName, customer.lastName].filter(Boolean).join(" ") ||
    "Unnamed User";
  const birthDate = customer.birthDate
    ? new Date(customer.birthDate).toLocaleDateString()
    : "Unknown";
  const moneySpent =
    typeof customer.moneySpent === "number"
      ? customer.moneySpent
      : Number(customer.moneySpent) || 0;

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-slate-50 flex flex-col items-center justify-center gap-4 py-10 px-6">
          <div className="w-32 h-32 rounded-full bg-white shadow-inner border border-slate-200 flex items-center justify-center">
            <span className="text-4xl text-slate-300">👤</span>
          </div>
          <p className="text-lg font-bold text-slate-800">{fullName}</p>
        </div>

        <div className="flex-1 p-8 space-y-8">
          <Link
            href="/customer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to customer table
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Full Name
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <IdCard className="h-4 w-4 text-amber-500" />
                  <p className="text-xl font-semibold text-slate-900">
                    {fullName}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Birthdate
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <Calendar className="h-4 w-4 text-amber-500" />
                  <p className="text-lg font-semibold text-slate-900">
                    {birthDate}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Total Spent
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <p className="text-3xl font-black text-green-600 drop-shadow-sm">
                    ${moneySpent}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Account ID
                </p>
                <div className="mt-2">
                  <p className="px-4 py-3 rounded-2xl bg-slate-100 text-slate-500 text-sm font-mono break-all">
                    {customer.customerId}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-semibold shadow-md hover:bg-slate-800 transition-colors">
              Edit Profile
            </button>
            <button className="flex-1 border-2 border-rose-200 text-rose-500 py-4 rounded-2xl font-semibold hover:bg-rose-50 transition-colors">
              Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
