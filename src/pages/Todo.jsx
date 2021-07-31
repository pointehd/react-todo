import { Auth } from "../utils";

const Todo = (props) => {
  const { history } = props;

  return (
    <Auth.CheckJWT history={history}>
      <div>Hello Todo Pages</div>
    </Auth.CheckJWT>
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
