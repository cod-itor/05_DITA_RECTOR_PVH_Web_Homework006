import React from "react";
import { notFound } from "next/navigation";
import CustomerSearchSection from "@/components/CustomerSearchSection";
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

  return <CustomerSearchSection customers={customers} />;
}
