import React from "react";
import Details from "./contactdetails/component/Details";
import Edit from "./Edit";
import { useParams, useRouteError } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { isEdit } from "../../../feature/Reducer";

export default function DetailsLayout() {
  const state = useSelector((state) => state.phoneBook.value);
  const editState = useSelector((state) => state.phoneBook.bool);
  const dispatch = useDispatch();

  const { id } = useParams();

  const contact = state.filter((state) => state.phone === id);

  if (contact.length <= 0) {
    throw Error("The contact is not available");
  }
  function handleEditOperation() {
    dispatch(isEdit(true));
  }

  function hideEditUi() {
    dispatch(isEdit(false));
  }
  return (
    <div>
      {editState ? (
        <Edit contact={contact} hideEditUi={hideEditUi} />
      ) : (
        <Details handleEditOperation={handleEditOperation} contact={contact} />
      )}
    </div>
  );
}
