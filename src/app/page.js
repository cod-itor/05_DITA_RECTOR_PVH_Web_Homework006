import CustomerHomepageCardComponent from "../components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "../components/ProductHomepageCardComponent";
import { customerService } from "@/service/CustomerService";

export default async function Home() {
  const customer = await customerService.getCustomersResponse();

  return (
    <div className="flex justify-center items-center w-full m-10  gap-4">
  <ProductHomepageCardComponent  />
  <CustomerHomepageCardComponent customer ={customer} />
</div>
  );
}
