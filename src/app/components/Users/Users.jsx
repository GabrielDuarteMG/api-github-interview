import axios from "axios";
import React, { Component } from "react";
import { Form, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import "./Users.scss";
import { toast } from "react-toastify";
import UserDetail from "./components/UserDetail";

export default class Users extends Component {

  
  constructor(props) {
    super(props);
    this.callGithubUrl = this.callGithubUrl.bind(this);
    this.state = {
      userName:
        this.props["match"] &&
        this.props["match"]["params"] &&
        this.props.match.params.userName
          ? this.props.match.params.userName
          : "",
      userSelected: null,
    };
  }
  componentWillMount() {
    if (
      this.props["match"] &&
      this.props["match"]["params"] &&
      this.props.match.params.userName
    ) {
      window["loading"] = true;
      setTimeout(() => {
        this.callGithubUrl();
      }, 1000);
    }
  }

  callGithubUrl() {
    this.setState({ userSelected: null });
    // Ignorado testes por vinculo axios
    /* istanbul ignore next */
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then((resp) => {
        if (resp.status === 200) {
          this.setState({ userSelected: resp.data });
        }
      })
      .catch((err) => {
        window["loading"] = false;
        if (err.response.status === 404) {
          toast.error(
            `Usuário ${this.state.userName} não encontrado no Github, tente novamente!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            }
          );
        }
      });
  }
  render() {
    return (
      <div className="w-75 content">
        <Form
          onKeyPress={
            // Testes ignorados para modo de entrada
            /* istanbul ignore next */
            (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                return false;
              }
            }
          }
        >
          <h5> Buscar nome de usuário</h5>
          <Form.Row className="align-items-center username-input">
            <Col xs="auto">
              <InputGroup className="mb-2 ">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  value={this.state.userName}
                  onChange={(e) => this.setState({ userName: e.target.value })}
                  onKeyPress={(e) => {
                    // Testes ignorados para modo de entrada
                    /* istanbul ignore next */
                    if (e.key === "Enter") this.callGithubUrl();
                  }}
                  placeholder="Username"
                />
              </InputGroup>
            </Col>
            <br />
            <Col xs="auto">
              <Button
                variant="dark"
                onClick={this.callGithubUrl}
                className="mb-2"
              >
                Buscar
              </Button>
            </Col>
          </Form.Row>
        </Form>
        {!!this.state.userSelected ? (
          <UserDetail userSelected={this.state.userSelected}></UserDetail>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
