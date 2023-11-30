"use client";
import { Container } from "react-bootstrap";
import useFetch from "../customHooks/useFetch";
import BookCard from "@/components/book.card";

const Store = () => {
  const data: any = useFetch(
    "https://65127f34b8c6ce52b395b49b.mockapi.io/books"
  );
  const books: Book[] = data;

  return (
    <Container className="d-flex w-100 flex-wrap justify-content-between">
      {books &&
        books.length > 0 &&
        books.map((book) => {
          return (
            <BookCard
              name={book.name}
              author={book.author}
              image={book.image}
              price={book.price}
              key={book.id}
            />
          );
        })}
    </Container>
  );
};
export default Store;
