import { FC } from "react";
import { SearchBar } from "@components/index";
import Sidebar from "@components/common/Sidebar";
import ProductsList from "@components/Products/ProductsList";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  return (
    <div className="products-page-container">
      <SearchBar variant="small" />
      <h1>Search Results</h1>
      <div className="product-content">
        <Sidebar />
        <ProductsList />
      </div>
    </div>
  );
};

export { Products };
