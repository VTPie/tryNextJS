import styles from "../styles/pagination.module.scss";

interface IProps {
  items: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (value: number) => void;
}

const Pagination = (props: IProps) => {
  const { items, currentPage, pageSize, onPageChange } = props;
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div className={styles["pagination"]}>
      {pages.map((page) => (
        <li
          key={page}
          className={
            page === currentPage ? styles["pageItemActive"] : styles["pageItem"]
          }
        >
          <a className={styles["pageLink"]} onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
