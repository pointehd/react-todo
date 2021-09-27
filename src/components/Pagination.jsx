import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";

const Pagination = (props) => {
  const { currentPage, totalCount, pageSize, onChange } = props;
  const { user } = useContext(UserContext);
  /*
  const pages = new Array(Math.ceil(totalCount / pageSize))
    .fill(true)
    .map((_v, i) => i + 1);
*/
  const [pages, setPages] = useState([]);
  console.log("pagination: ", user);
  useEffect(() => {
    const paginationLength = Math.ceil(totalCount / pageSize);
    const pages = [];
    for (let i = 0; i < paginationLength; i++) {
      pages.push(i + 1);
    }
    setPages(pages);
  }, [currentPage, totalCount, pageSize, onChange]);
  return (
    <div>
      {pages.map((value, index) => {
        return (
          <button
            disabled={value === currentPage}
            key={index}
            onClick={() => onChange(value)}
          >
            {value}
          </button>
        );
      })}
      {/*Array.from(Array(totalCount / pageSize + 1), (e, i) => {
        console.log(e);
        return (
          <button
            disabled={i + 1 === currentPage}
            key={i}
            onClick={() => onChange(i + 1)}
          >
            {i}
          </button>
        );
      })*/}
    </div>
  );
};
export default Pagination;
