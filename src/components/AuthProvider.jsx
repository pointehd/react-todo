import axios from "axios";
import { decode } from "jsonwebtoken";
import { useEffect, useState } from "react";
import { Auth } from "../utils";
import UserContext from "./UserContext";

const AuthProvider = (props) => {
  const { history, children } = props;
  const [user, setUser] = useState({});

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    const isVaild = Auth.checkVaildJWT(jwt);

    if (!isVaild) {
      axios.defaults.headers.common = {};
      sessionStorage.setItem("jwt", "");
      history.push("/");
    } else {
      axios.defaults.headers.common = { authorization: `Bearer ${jwt}` };
      const userInfo = decode(jwt);
      //   console.log(userInfo);
      setUser(userInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
