import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../services/getAllProduct";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import formatToIDRCurrency from "../utils/formatToIDRCurrency";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const allProducts = getAllProducts();
    const product = allProducts.find((prod) => prod.slug === slug);
    setProduct(product);
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex px-8 py-4 gap-12 items-center bg-gray-100">
        <Link to="/" className="text-xl text-[#eebbc3] hover:underline">
          <FontAwesomeIcon icon={faArrowLeftLong} className="text-2xl" />
        </Link>
        <h4 className="text-3xl font-semibold text-gray-800">
          {product.name ?? "No Label"}
        </h4>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-8 py-6">
        <div className="w-full lg:w-1/2">
          <img
            src={product.imageUrl ?? product.name ?? "No Name"}
            alt={product.name ?? "No Name"}
            className="w-full h-auto max-w-[700px] mx-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold text-gray-800">
              {formatToIDRCurrency(product.price) ?? "Not For Sale"}
            </span>

            {product.stock > 0 ? (
              product.stock <= 25 ? (
                <span className="font-medium text-yellow-500">
                  Available, almost out of stock
                </span>
              ) : (
                <span className="font-medium text-green-500">Available</span>
              )
            ) : (
              <span className="font-medium text-red-500">Out of stock</span>
            )}

            <span className="text-lg text-gray-600">
              {product.category ?? "Uncategorized"}
            </span>
          </div>

          {product.stock > 0 ? (
            <Button
              type="button"
              className="flex items-center justify-center gap-2 p-4 bg-[#6173E6] hover:bg-[#5969cf] text-white active:bg-[#4956ab] rounded-lg shadow-lg"
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-white" />
              <span>Add to cart</span>
            </Button>
          ) : (
            <Button
              type="button"
              className="flex items-center justify-center gap-2 p-4 bg-[#9A9A9A] text-white rounded-lg shadow-lg"
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-white" />
              <span>Out of Stock</span>
            </Button>
          )}

          <div>
            <h5 className="text-xl font-semibold text-gray-800">Description</h5>
            <p className="text-gray-600 max-w-lg">
              {product.description ?? "No description available."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
