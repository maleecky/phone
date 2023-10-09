import React, { useEffect, useState } from "react";
import defaultPicture from "../../../assest/Vector.png";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../../feature/Reducer";
import { useNavigate, useParams } from "react-router";

export default function Edit({ contact, hideEditUi }) {
  const [name, setName] = useState(contact[0].name);
  const [imageUrl, setimageUrl] = useState(contact[0].image);
  const [phone, setphone] = useState(contact[0].phone);
  const [email, setemail] = useState(contact[0].email);
  const [phoneAlreadyExist, setPhoneAlreadyExist] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.phoneBook.value);

  useEffect(() => {
    const PhoneAlreadyExist = () => {
      const phoneFilter = state.filter((item) => item.phone !== id);
      let resembleArr = phoneFilter.filter((item) => item.phone === phone);

      return resembleArr.length > 0;
    };
    setPhoneAlreadyExist(PhoneAlreadyExist);
  }, [state, phone]);

  function handleClick(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = Object.fromEntries(data.entries());
    res.image = imageUrl ? imageUrl : defaultPicture;
    dispatch(editContact({ ...res, id: contact[0].id }));
    hideEditUi();
    navigate(`/${phone}`);
  }

  function handleCancel() {
    hideEditUi();
  }

  return (
    <form onSubmit={handleClick} className="flex-items-center">
      <div className="img-container">
        <img
          src={imageUrl ? imageUrl : defaultPicture}
          className="block object-cover w-full h-full"
          alt="champ"
        />
        <label className="hidden-rounded-file-input">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => {
              const file = URL.createObjectURL(e.target.files[0]);
              setimageUrl(file);
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
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="phone-container">
          <input
            type="text"
            className="p-2 pl-3 slate-300-inputs"
            pattern="(\+255|0)[1-9]\d{7,8}$"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.currentTarget.value);
            }}
          />
        </div>
        <div className="email-container">
          <input
            type="email"
            className="p-2 pl-3 slate-300-inputs"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setemail(e.currentTarget.value);
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
          type="submit"
          className={`btn ${phoneAlreadyExist ? "disabled-btn" : undefined}`}
        >
          Save
        </button>
        <button onClick={handleCancel} type="button" className="red-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}
