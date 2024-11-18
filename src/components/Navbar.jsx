import { useId } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="grid grid-cols-3 justify-between px-8 py-4 bg-[#232946] items-center shadow-lg rounded-b-lg">
      <ul className="flex items-center justify-start">
        <li className="text-xl font-semibold">
          <Link
            to="/"
            className="text-[#eebbc3] hover:text-[#F9E79F] active:text-[#f5f5f5] transition-colors"
          >
            Home
          </Link>
        </li>
      </ul>

      <ul className="flex justify-center items-center">
        <li className="w-full max-w-[500px]">
          <input
            type="text"
            className="text-black focus:outline-none focus:ring-2 focus:ring-[#6246ea] px-4 py-2 w-full rounded-lg shadow-md"
            name="search"
            id={inputId}
            placeholder="Search product..."
            onChange={handleSearchInput}
          />
        </li>
      </ul>

      {!isLoggedIn ? (
        <ul className="flex gap-4 justify-end items-center">
          <li>
            <button
              onClick={login}
              className="text-[#eebbc3] hover:text-[#F9E79F] active:text-[#f5f5f5] transition-colors font-medium"
            >
              Sign in
            </button>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-[#eebbc3] hover:text-[#F9E79F] active:text-[#f5f5f5] transition-colors font-medium"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-4 justify-end items-center">
          <li>
            <Link
              to="/cart"
              className="text-[#eebbc3] hover:text-[#F9E79F] active:text-[#f5f5f5] transition-colors font-medium"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-[#eebbc3] hover:text-[#F9E79F] active:text-[#f5f5f5] transition-colors font-medium"
            >
              My Orders
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-[#eebbc3] hover:text-[#F9E79F] active:text-[#f5f5f5] transition-colors font-medium"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
