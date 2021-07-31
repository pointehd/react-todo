import { BrowserRouter, Route } from "react-router-dom";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import Todo2 from "./pages/Todo2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/todo" component={Todo2} exact />
        <Route path="/callback" component={Callback} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
