import Routers from "./app/Routers/index";
import "./App.scss";
import Header from "./app/components/Header";
const App = () => (
  <div className="App">
    <Header></Header>
    <div className="app-container">
      <Routers></Routers>
    </div>
  </div>
);
export default App;
