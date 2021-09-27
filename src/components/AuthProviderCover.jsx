import AuthProvider from "./AuthProvider";

const AuthProviderCover = ({ children, history }) => {
  return <AuthProvider history={history}>{children}</AuthProvider>;
};

export default AuthProviderCover;
