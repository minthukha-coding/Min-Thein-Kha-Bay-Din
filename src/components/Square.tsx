import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NUM_LIST } from "../data";
import { useNavigate } from "react-router-dom";

const Square = () => {
  const location = useLocation();
  const [question] = useState(location.state);
  const navigate = useNavigate();

  return (
    <>
      <div className="md:containner mx-auto md:px-20 my-10 px-3">
        <button
          className="md:hidden px-6 py-2 mb-6 bg-amber-400 rounded-md"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <div className="flex items-center justify-between">
          <button
            className="hidden md:block  px-6 py-2 bg-amber-400 rounded-md"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <h2 className="text-center text-xl">{question}</h2>
          <div></div>
        </div>

        <div className="grid grid-cols-9 grid-flow-row w-fit gap-3 mx-auto my-6 h-60">
          {NUM_LIST.map((number) => (
            <Link key={number.key} to={`${number.key}`} className="border-t-gray-300 p-2 text-center cursor-pointer">
              {number.value}
            </Link>
          ))}
        </div>
        <Outlet/>
      </div>
    </>
  );
};

export default Square;
