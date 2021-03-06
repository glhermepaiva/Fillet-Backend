# **Fillet Back-end**

## Stack
Esse é um projeto de Back-end Web desenvolvido em Node.js, com Typescript e banco de dados MySQL. A API está hospedada no Heroku.

## Sobre
O projeto se trata de uma tela de cadastro simples onde o usuário deve informar seu primeiro e último nome, telefone, email e senha. A comunicação do front com o back-end é feita através de requisições do _Axios_ para a API, que conta com dois endpoints: _Signup_, que faz o cadastro do usuário no banco de dados e _Get User By Id_, utilizada para ler as informações individuais do usuário. O id de cada usuário é gerado automaticamente via _uuid_, as senhas são criptografadas com _bcryptjs_ e é gerado um token de acesso pelo _jsonwebtoken_. O projeto segue o padrão MVC.

## Instruções para rodar
Acessar o site https://filletfullstack.surge.sh

## Link para parte Frontend do projeto
https://github.com/glhermepaiva/Fillet-Frontend

## Contato
https://www.linkedin.com/in/glhrmpaiva // glhrmpaiva@gmail.com
