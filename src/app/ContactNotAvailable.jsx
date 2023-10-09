import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

export default function ContactNotAvailable() {
  const error = useRouteError();
  return (
    <div className="flex space-y-4 flex-col items-center justify-center h-screen">
      <h1>Error </h1>
      <p>{error.message}</p>
      <Link to={"/new"} className="btn">
        Add new
      </Link>
    </div>
  );
}
