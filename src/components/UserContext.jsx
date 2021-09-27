import { createContext } from "react";

const UserContext = createContext({
  user: {},
  setUser: () => {},
});
/**
 * context 생성
 */

export default UserContext;
