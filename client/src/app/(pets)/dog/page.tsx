"use client";
import Image from "next/image";
import dog from "../../../assets/pictures/dog.jpeg";

const CatPage = () => {
  return (
    <div>
      <h1 className="title">This is my dog</h1>
      <Image
        src={dog}
        alt="dog"
        width={300}
        height={300}
        className="d-block mx-auto"
      />
    </div>
  );
};
export default CatPage;
