import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearch, searchHandler } from "../../../feature/Reducer";

export default function PhoneBookHeader() {
  const dispatch = useDispatch();

  function handleChange(event) {
    const text = event.currentTarget.value;

    if (text) {
      dispatch(searchHandler(text));
    } else {
      dispatch(clearSearch());
    }
  }
  return (
    <div className="p-5 flex items-center justify-between w-full border-slate-500 bg-slate-900 space-x-2 shadow-lg border-b">
      <div className="flex flex-1 items-center relative">
        <svg
          width="18"
          height="18"
          className="absolute pl-1 bg-slate-300"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9642 17.0751L13.2156 12.3264C14.3567 10.9565 14.9257 9.19933 14.8043 7.42051C14.6829 5.64168 13.8804 3.97815 12.5636 2.77597C11.2469 1.57379 9.51744 0.925521 7.73494 0.966023C5.95244 1.00652 4.25417 1.73268 2.99342 2.99342C1.73268 4.25417 1.00652 5.95244 0.966023 7.73494C0.925521 9.51744 1.57379 11.2469 2.77597 12.5636C3.97815 13.8804 5.64168 14.6829 7.42051 14.8043C9.19933 14.9257 10.9565 14.3567 12.3264 13.2156L17.0751 17.9642L17.9642 17.0751ZM2.24431 7.90348C2.24431 6.78421 2.57622 5.69006 3.19806 4.75942C3.81989 3.82877 4.70373 3.10342 5.73781 2.67509C6.77189 2.24676 7.90976 2.13469 9.00753 2.35305C10.1053 2.57141 11.1137 3.1104 11.9051 3.90185C12.6966 4.6933 13.2356 5.70166 13.4539 6.79943C13.6723 7.89721 13.5602 9.03508 13.1319 10.0692C12.7035 11.1032 11.9782 11.9871 11.0476 12.6089C10.1169 13.2308 9.02276 13.5627 7.90348 13.5627C6.40309 13.561 4.96462 12.9642 3.90368 11.9033C2.84274 10.8423 2.24598 9.40388 2.24431 7.90348Z"
            fill="#777777"
          />
        </svg>

        <input
          type="text"
          className="p-1 pl-6 rounded w-full bg-slate-300 text-slate-500"
          placeholder="Search contact"
          onChange={handleChange}
        />
      </div>
      <Link to={"new"} className="btn">
        New
      </Link>
    </div>
  );
}
