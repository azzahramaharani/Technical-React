import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import formatToIDRCurrency from "../utils/formatToIDRCurrency";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[350px] w-full bg-[#232946] hover:bg-[#1E2746] border border-[#393E6A] rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <img
        src={product?.imageUrl ?? ""}
        alt={product?.name ?? "No Title"}
        className="block w-full h-[280px] mb-3 object-cover rounded-t-lg"
      />
      <div className="flex flex-col p-5 gap-3 bg-[#232946] rounded-b-lg">
        <h4 className="font-bold text-lg text-[#eebbc3] transition-all duration-200 hover:text-[#F9E79F]">
          {product?.name ?? "No Title"}
        </h4>
        <span className="text-xs font-medium text-[#b8c1ec] uppercase tracking-wider">
          Type: {product?.category ?? "Uncategorized"}
        </span>
        <span className="text-xl font-bold text-[#f5f5f5]">
          {product?.price > 0
            ? formatToIDRCurrency(product.price)
            : "Not For Sale"}
        </span>

        {/* Stock Status */}
        <div>
          {product.stock <= 0 ? (
            <p className="text-lg font-semibold text-center text-[#ff6f61]">
              Out of Stock
            </p>
          ) : product.stock <= 5 && product.stock !== 0 ? (
            <>
              <p className="text-lg font-semibold text-center text-[#F7D560]">
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="mt-3 p-3 bg-[#6246ea] text-white hover:bg-[#4e37b5] rounded-lg w-full text-center"
              >
                View Details
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="mt-3 p-3 bg-[#3FC1C9] text-white hover:bg-[#2A9D8F] rounded-lg w-full text-center"
            >
              View Details
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.prototypes = {
  product: PropTypes.object.isRequired,
};
