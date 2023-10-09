import React from "react";
import PhoneBookHeader from "./component/PhoneBookHeader";
import ContactsList from "./component/ContactsList";

export default function PhoneBook() {
  return (
    <div className="w-[30%] min-w-[280px] text-slate-200">
      <PhoneBookHeader />
      <div className="scrollbar h-screen bg-slate-900 overflow-y-auto overflow-x-hidden p-5 ">
        <ContactsList />
      </div>
    </div>
  );
}
