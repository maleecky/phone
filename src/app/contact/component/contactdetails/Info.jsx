import React from "react";
import newContactAnimation from "../../../../assest/5KfIRWETIt.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className="flex space-y-4 flex-col items-center justify-center h-screen">
      <div className="w-44">
        <Lottie loop={false} animationData={newContactAnimation} />{" "}
      </div>
      <Link to={"new"} className="px-2 py-1 btn">
        Add contact
      </Link>
    </div>
  );
}
