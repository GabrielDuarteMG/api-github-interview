import { Nav } from "react-bootstrap";
import React, { Component } from "react";

import "./Header.scss";
export default class Header extends Component {
  isUserPage() {
    // Testes por validação de caminho da rota
    /* istanbul ignore next */
    if (document.location.pathname === "/users") return true;
    else return false;
  }
  isHomePage() {
    // Testes por validação de caminho da rota
    /* istanbul ignore next */
    if (document.location.pathname === "/") return true;
    else return false;
  }

  render() {
    return (
      <Nav id="app-header" variant="tabs" className="header">
        <Nav.Item>
          <img src={"assets/img/gh-logo.png"} className="gh-logo" alt="" />
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="link" active={this.isHomePage()} href="/">
            Início
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="link"
            active={this.isUserPage()}
            eventKey="users"
            href="/users"
          >
            Usuários
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
