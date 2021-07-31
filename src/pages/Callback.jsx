// yarn add jsonwebtoken jwt 파싱
// yarn querystring string 분해

import { parse } from "querystring";
import { Auth } from "../utils";

const Callback = ({ location, history }) => {
  console.log(location);
  const queryParams = parse(location.search.replace("?", ""));
  console.log(queryParams);

  const { jwt = "" } = queryParams;
  console.log(jwt);
  const isVaild = Auth.checkVaildJWT(jwt);
  if (isVaild) {
    // 1. jwt -> session storage 에 저장
    sessionStorage.setItem("jwt", jwt);
    // 2. Todo 로 이동
    history.push("/todo");
  } else {
    // sessionStorage 비운후 -> 다시 Home으로 이동
    sessionStorage.setItem("jwt", "");
    // 다시 홈으로 이동
    history.push("/");
  }
  console.log(`is valid ${isVaild}`);

  return null;
};

// https://le7nrigoo3.execute-api.ap-northeast-2.amazonaws.com/default/connect
export default Callback;
