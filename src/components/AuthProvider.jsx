import { useEffect } from "react";
import { Auth } from "../utils";

const AuthProvider = (props) => {
  const { history, children } = props;
  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    const isVaild = Auth.checkVaildJWT(jwt);

    if (!isVaild) {
      sessionStorage.setItem("jwt", "");
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
};

export default AuthProvider;
