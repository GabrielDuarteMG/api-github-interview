import Routers from "./app/Routers/index";
import "./App.scss";
import Header from "./app/components/Header";
import { ToastContainer } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import React, { Component } from "react";

export default class App extends Component {
  state = { isLoading: false };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ isLoading: window["loading"] });
    }, 200);
  }
  render() {
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Carregando...">
        <div className="App">
          <Header ></Header>

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
      </LoadingOverlay>
    );
  }
}
