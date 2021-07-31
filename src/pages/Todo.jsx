import { useEffect, useState } from "react";
import AuthProvider from "../components/AuthProvider";
import Error from "../components/Error";
import Loading from "../components/Loading";

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

const Todo = (props) => {
  const { history } = props;
  const [state, setState] = useState("LOADING");

  useEffect(() => {
    const fetch = async () => {
      setState("LOADING");

      try {
        await apiCall(); // await 가 Promise 벗김
        setState("DONE");
      } catch (e) {
        setState("ERROR");
      }
    };
    fetch();
  }, []);
  return (
    <AuthProvider history={history}>
      {/* 이거 잘보기 ===, && */}
      {state === "LOADING" && <Loading />}
      {state === "ERROR" && <Error />}
      {state === "DONE" && <div>데이터 불러오기</div>}
      <div>Hello Todo Pages</div>
    </AuthProvider>
  );
  /* 
  const { history } = props;
  
  페이지가 로드될때 한번은 실행
  useEffect 뒤 배열에 있는 변수가 변경되면 실행
  
  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    const isVaild = checkVaildJWT(jwt);
    if (!isVaild) {
      sessionStorage.setItem("jwt", "");
      history.push("/");
    }
    console.log(jwt);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>This is TodoPage</div>;
  */
};

export default Todo;
