// yarn add jsonwebtoken jwt 파싱
// yarn querystring string 분해

import { decode } from "jsonwebtoken";
import { parse } from "querystring";

const Callback = ({ location }) => {
  console.log(location);
  const queryParams = parse(location.search.replace("?", ""));
  console.log(queryParams);

  const { jwt = "" } = queryParams;
  console.log(jwt);
  if (jwt) {
    const userInfo = decode(jwt);
    console.log(userInfo);
    // 1. jwt -> session storage 에 저장한후
    // 2. Todo 로 이동
  } else {
    // 다시 홈으로 이동
  }
  return null;
};

// https://le7nrigoo3.execute-api.ap-northeast-2.amazonaws.com/default/connect
export default Callback;
