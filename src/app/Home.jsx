import React from "react";
import PhoneBook from "./phonebook/PhoneBook";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <div className="flex 2xl:mt-5 2xl:mb-5 w-full">
      <PhoneBook />
      <Outlet />
    </div>
  );
}
