import { useParams } from "react-router-dom";
import { ProductDescription } from "../ProductDetails/ProductDescription";
import { ProductImages } from "../ProductDetails/ProductImages";
import { useEffect, useState } from "react";
import { getProduct } from "../../../services/httpServices";
import { ProductSkeleton } from "../Skeleton/ProductSkeleton";
import type { Product } from "./Product Wrapper/ProductList";

export const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (productId) {
          const data: Product = await getProduct(productId);
          setProduct(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);
  console.log("Product", product);

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <section
      className="
        bg-tertiary
        pt-24
        pb-16
        px-4
        md:px-8
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
        "
      >
        {/* LEFT SECTION */}
        <ProductImages images={product!.images} />

        {/* RIGHT SECTION */}
        <ProductDescription product={product!} />
      </div>
    </section>
  );
};
