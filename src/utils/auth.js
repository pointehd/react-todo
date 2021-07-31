import { decode } from "jsonwebtoken";
import { useEffect } from "react";

const Auth = {
  checkVaildJWT: (jwt) => {
    try {
      const hasJWT = !!jwt; // !<< 이거 좀신기 !! false -> ture && false -> true empty 한가 아닌가
      const { exp } = decode(jwt);
      const expiredDate = exp * 1000; // 자바 스크립트에서 밀리세컨드까지 있기 때문에 1000 곱해주기
      const isExpred = Date.now() > expiredDate;
      return hasJWT || isExpred;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
};

export default Auth;
