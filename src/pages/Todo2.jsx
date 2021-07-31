import AuthProvider from "../components/AuthProvider";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { Hook } from "../utils";
import axios from "axios";
import { useState, useContext } from "react";
import Pagenation from "../components/Pagination";
import UserContext from "../components/UserContext";

const Todo2 = (props) => {
  const { history } = props;
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { loading, data, error } = Hook.useAsync(async () => {
    const start = (page - 1) * pageSize;
    const limit = pageSize;
    const response = await axios.get(
      `https://dg58przkr9.execute-api.ap-northeast-2.amazonaws.com/default/test?start=${start}&limit=${limit}`
    );
    console.log("page 불러오기", page);
    // throw "error";
    return response.data;
  }, [page, pageSize]);

  const { todos = [], totalCount = 0 } = data || {};

  const pageChange = (p) => {
    setPage(p);
  };
  const changePageSize = (e) => {
    setPageSize(e.target.value);
  };
  console.log(user);
  return (
    <AuthProvider history={history}>
      <div>
        {page}
        {loading && <Loading />}
        {error && <Error />}
        {!loading &&
          !error &&
          todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.content} <span>{user.email}</span>
            </div>
          ))}
        <Pagenation
          onChange={pageChange}
          currentPage={page}
          totalCount={totalCount}
          pageSize={pageSize}
        />
        <div>
          <input onChange={changePageSize} value={pageSize} />
        </div>
      </div>
    </AuthProvider>
  );
};

export default Todo2;
