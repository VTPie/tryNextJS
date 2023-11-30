"use client";
import Image from "next/image";
import cat from "../../../assets/pictures/Cat.jpg";

const CatPage = () => {
  return (
    <div>
      <h1 className="title">This is my cat</h1>
      <Image
        src={cat}
        alt="Cat"
        width={300}
        height={400}
        className="d-block mx-auto"
      />
    </div>
  );
};
export default CatPage;
