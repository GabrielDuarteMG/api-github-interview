import Routers from "./app/Routers/index";
import "./App.scss";
import Header from "./app/components/Header";
import { ToastContainer } from "react-toastify";


const App = () => (
  <div className="App">

      <Header></Header>
      <div className="app-container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <Routers></Routers>
      </div>

  </div>
);
export default App;
