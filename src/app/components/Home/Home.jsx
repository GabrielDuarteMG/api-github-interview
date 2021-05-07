import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <h3>Teste de Front-end Compasso UOL</h3>
          <p>
            Este é um teste de Front-End para vaga de desenvolvedor FullStack na
            Compasso UOL
          </p>
          <p>
            Link para o Teste:{" "}
            <a href="https://github.com/recrutamento-compasso/api-github-interview">
              api-github-interview
            </a>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
