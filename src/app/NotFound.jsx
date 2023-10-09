import React from "react";
import notFoundAnimation from "../assest/animation_lnafxgqn.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex-items-center">
      <div className="w-52">
        <Lottie animationData={notFoundAnimation} loop={false} />
      </div>
      <Link className="btn mt-4" to={"/new"}>
        Add new
      </Link>
    </div>
  );
}
