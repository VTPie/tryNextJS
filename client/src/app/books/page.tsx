"use client";
import { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
const BookPage = () => {
  const data: any = useFetch(
    "https://65127f34b8c6ce52b395b49b.mockapi.io/books"
  );
  const handleFetchData = () => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="title">Book store</h1>
      <button onClick={handleFetchData}>Fetch</button>
    </div>
  );
};
export default BookPage;
