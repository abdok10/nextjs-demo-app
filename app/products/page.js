// import ProductCard from "@/app/components/ProductCard";

import BackButton from "../components/BackButton";
import Productcard from "../components/Productcard";

function ProductsPage() {
  return (
    <div className="mt-12">
      <BackButton />
      <p className="text-xl font-bold text-cyan-300">Products Page:</p>
      <div className="grid items-start justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <Productcard />
      </div>
    </div>
  );
}
export default ProductsPage;
