<h1 align="center">
  Desafio Backend - #VemProiFood :motor_scooter:
</h1>

<p align="center">O objetivo do desafio é criar um microsserviço capaz de aceitar solicitações RESTful que recebam como parâmetro o nome da cidade(city) ou as coordenadas(lat e long) e retorne uma sugestão de lista de reprodução (apenas nomes de faixa são adequados) de acordo com a temperatura atual.</p>


## :bookmark_tabs: Regras do negócio

* Se a temperatura (celcius) estiver acima de 30 graus, sugira faixas para a festa (party)
* Caso a temperatura esteja entre 15 e 30 graus, sugira faixas de música pop
* Se estiver um pouco frio (entre 10 e 14 graus), sugira faixas de música rock
* Caso contrário, se estiver frio lá fora, sugere faixas de música clássica (classical)

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## 📚 Tecnologias

- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd vemproifood-backend`;
3. Rode `yarn` dentro da pasta para instalar as dependências ;
4. Na pasta execute `yarn dev` pra iniciar o servidor de desenvolvimento;
