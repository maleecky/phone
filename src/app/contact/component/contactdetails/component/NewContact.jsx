import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../../../feature/Reducer";
import defaultProfile from "../../../../../assest/Vector.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NewContact() {
  const [img, setimg] = useState(defaultProfile);
  const [phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [count, setcount] = useState(0);
  const navigate = useNavigate();
  const [phoneAlreadyExist, setPhoneAlreadyExist] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.phoneBook.value);
  useEffect(() => {
    const PhoneAlreadyExist = () => {
      const phoneFilter = state.filter((item) => item.phone === phone);
      return phoneFilter.length > 0;
    };
    setPhoneAlreadyExist(PhoneAlreadyExist);
  }, [state, phone]);

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const res = Object.fromEntries(data.entries());
    res.image = img ? img : defaultProfile;
    setcount((count) => count + 1);
    dispatch(addContact({ ...res, id: count }));

    setName("");
    setPhone("");
    setimg(defaultProfile);
    setEmail("");
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="flex-items-center">
      <div className="img-container">
        <img
          src={img}
          className="block object-cover w-full h-full"
          alt="champ"
        />
        <label className="hidden-rounded-file-input">
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setimg(URL.createObjectURL(e.target.files[0]));
            }}
          />
          📷
        </label>
      </div>
      <div className="space-y-4">
        <div className="name-container">
          <input
            type="text"
            className="p-2 pl-3 slate-300-inputs"
            placeholder="name"
            required
            pattern="^[a-zA-Z0-9\s]*$"
            name="name"
            value={Name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="phone-container">
          <input
            type="text"
            className="p-2 pl-3 slate-300-inputs"
            name="phone"
            required
            pattern="^(\+255|0)[1-9]\d{7,8}$"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
          />
        </div>
        <div className="email-container">
          <input
            type="email"
            name="email"
            className="p-2 pl-3 slate-300-inputs"
            placeholder="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
      </div>
      <p className={`mt-2  ${phoneAlreadyExist ? "opacity-100" : "opacity-0"}`}>
        The phone already exist
      </p>
      <div className="btn-container">
        <button
          disabled={phoneAlreadyExist}
          className={`btn ${phoneAlreadyExist ? "disabled-btn" : undefined}`}
          type="submit"
          name="submit"
        >
          Save
        </button>
        <button onClick={handleCancel} className="red-btn" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}
