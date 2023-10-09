import React from "react";
import { Outlet } from "react-router";

export default function Contact() {
  return (
    <div className="flex-1 w-full h-screen min-w-[300px]  relative bg-slate-800 text-slate-200 overflow-auto">
      <Outlet />
    </div>
  );
}
