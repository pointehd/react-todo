import AuthProvider from "../components/AuthProvider";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { Hook } from "../utils";
import axios from "axios";
import { useState, useContext } from "react";
import Pagenation from "../components/Pagination";
import UserContext from "../components/UserContext";
import AuthProviderCover from "../components/AuthProviderCover";

const Todo2 = (props) => {
  const { history } = props;

  const { user } = useContext(UserContext);
  console.log("test", user);
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
    <AuthProviderCover history={history}>
      {/* 하나더 감싸도 context 를 가져오지 못함. */}
      <div>loginUser : {user.email}</div>
      <div>
        <div>{user.name}</div>
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
    </AuthProviderCover>
  );
};

export default Todo2;
