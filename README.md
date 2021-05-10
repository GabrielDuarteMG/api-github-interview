# api-github-interview

Este é um projeto proposto para busca de usuários e repositórios no Github utilizando a API V3.

## Detalhes da aplicação

A aplicação foi desenvolvida utilizando o ReactJS v17.0.2, para gerenciamento de rotas foi utilizado o react-router-dom, e para gerenciamento das requisições para o Github com a gestão do Authorization foi utilizado o axios com sua feature de interceptor.

Na parte de design foi utilizado o Bootstrap implementado com o módulo complementar react-bootstrap e react-bootstrap-table-next, utilizando como framework de estilização o sass. E para alguns alertas aos usuários, foi implementado o react-toastify.

# Getting Started

- Clone este projeto.
- Em seguida faça a instalação dos módulos com o comando:
- ```
    npm install --save
  ```
- Após a instalação dos módulos utilize o comando abaixo para executar a aplicação:
- ```
    npm start
  ```
- Em seguida a aplicação estará rodando na porta 3000 seguindo o endereço [http://localhost:3000](http://localhost:3000)

## Requisitos da entrega

Para utilizar os Endpoints abaixo, você precisará estar autenticado, para isso você irá utilizar a autenticação do GITHUB:

- Guia Autenticação: https://docs.github.com/pt/developers/apps/building-oauth-apps

Gostaríamos nos entregasse uma aplicação utilizando a api do GITHUB https://developer.github.com/v3/ consumindo os seguintes endpoints:

- Endpoint user: https://api.github.com/users/NOME_USUARIO
- Endpoint repos: https://api.github.com/users/NOME_USUARIO/repos
- Endpoint starred: https://api.github.com/users/NOME_USUARIO/starred{/owner}{/repo}

A aplicação deverá constituir três componentes principais:

- O campo de busca.
- Visualização de resultados.
- Dois botões para executar um determinado resultado.

Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada endpoint
apresentado anteriormente.

Dado um determinado usuário, deverá ser possível navegar diretamente até a página de
detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/NOME_USUARIO

- Gostariamos de pesquisar por usuario.
- Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.
- Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.

Você poderá usar o framework css Bootstrap ou Materialize para construção dos componentes UI (Se preferir, os componentes poderão ser criados do zero, utilizando as boas práticas).

Você poderá usar os frameworks js para desenvolvimento da sua aplicação ou utilizar o Vanilajs e jQuery.

Você poderá utilizar Jasmine, Mocha ou RhinoUnit para testar os request feitos.

## Cenário

Na página do campo de busca, deverá ser possível inserir nomes de usuários do github, repositórios e os mais visitados pelos os usuários.
