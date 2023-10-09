import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../../../feature/Reducer";
import { useNavigate } from "react-router";

export default function Details({ handleEditOperation, contact }) {
  const [showDeletePopup, setshowDeletePopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDeletion() {
    dispatch(deleteContact(contact[0].phone));
    navigate("/new");
    setshowDeletePopup(false);
  }
  return (
    <>
      {showDeletePopup && (
        <div className="flex z-50  absolute w-full h-full backdrop-blur-lg flex-col items-center  justify-center">
          <p className="mb-4">Are you sure wants to Delete this contact</p>
          <div className="space-x-2">
            <button onClick={handleDeletion} className="red-btn">
              Yes
            </button>
            <button
              onClick={() => {
                setshowDeletePopup(false);
              }}
              className="btn"
            >
              No
            </button>
          </div>
        </div>
      )}

      <div className=" flex-items-center">
        <div className="img-container">
          <img
            src={contact[0].image}
            className="block object-cover w-full h-full"
            alt="champ"
          />
        </div>
        <div className="space-y-4">
          <div className="name-container bg-slate-900 w-64 p-2.5 rounded-lg shadow-lg shadow-slate-900">
            <small>Name</small>
            <p>{contact[0].name}</p>
          </div>
          <div className="name-container bg-slate-900 w-64 p-2.5 rounded-lg shadow-lg shadow-slate-900">
            <small>Phone</small>
            <p>{contact[0].phone}</p>
          </div>
          <div className="name-container bg-slate-900 w-64 p-2.5 rounded-lg shadow-lg shadow-slate-900">
            <small>Email</small>
            <p>{contact[0].email}</p>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={handleEditOperation} className="btn">
            Edit
          </button>
          <button
            onClick={() => {
              setshowDeletePopup(true);
            }}
            className="red-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
