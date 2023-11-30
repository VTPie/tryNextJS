import CardStyle from "../styles/books.module.scss";
interface IProps {
  name: string;
  author: string;
  image: string;
  price: number;
}
const BookCard = (props: IProps) => {
  const { name, author, image, price } = props;
  return (
    <div className={CardStyle["card-container"]}>
      <img src={image} className="w-100 rounded-3" />
      <h5 className="mt-3">{name}</h5>
      <p className="fst-italic">{author}</p>
      <h5 className="mb-0 text-danger">{price} $</h5>
    </div>
  );
};
export default BookCard;
