import React from "react";
import PhoneBook from "./app/phonebook/PhoneBook";
import Contact from "./app/contact/Contact";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./app/Home";
import Info from "./app/contact/component/contactdetails/Info";
import NewContact from "./app/contact/component/contactdetails/component/NewContact";
import Details from "./app/contact/component/contactdetails/component/Details";
import NotFound from "./app/NotFound";
import DetailsLayout from "./app/contact/component/DetailsLayout";
import ContactNotAvailable from "./app/ContactNotAvailable";
//starting with identifying the structure of my ui

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Home />}>
      <Route path="/" element={<Contact />}>
        <Route index element={<Info />} />
        <Route path="new" element={<NewContact />} />
        <Route
          path=":id"
          element={<DetailsLayout />}
          errorElement={<ContactNotAvailable />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
//i will increase the other files letter as i know i will be using the router hence i will have some layout along the way 🚀
