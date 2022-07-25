# Desafio-02-Componentizando-a-aplicacao

# Desafio 02 - Componentizando a aplicação

# 💻 Sobre o desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde o seu principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

A seguir veremos com mais detalhes o que e como precisa ser feito 🚀

Navegue até a pasta criada, abra no Visual Studio Code e execute os seguintes comandos no terminal:

```bash
yarn
yarn server
```

Em seguida, você vai ver a mensagem:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1abc3356-2936-4106-a4fe-a3fc8efd1373/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1abc3356-2936-4106-a4fe-a3fc8efd1373/Untitled.png)

Perceba que ele iniciou uma fake API com os recursos `/genres` e `/movies` em `localhost` na porta `3333` a partir das informações do arquivo [server.json](https://github.com/rocketseat-education/ignite-template-componentizando-a-aplicacao/blob/main/server.json) localizado na raiz do seu projeto. Acessando essas rotas no seu navegador, você consegue ver o retorno das informações já em JSON (dando um clique duplo, a imagem se expandirá):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12a3c689-264b-4bd4-8515-730dfe8dd407/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12a3c689-264b-4bd4-8515-730dfe8dd407/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/400b84d4-2de4-4cd3-aef2-139f3103e9f6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/400b84d4-2de4-4cd3-aef2-139f3103e9f6/Untitled.png)

Dessa forma, basta consumir essas rotas da API normalmente com o Axios. Caso queira estudar mais sobre o **JSON Server**, dê uma olhada aqui:

[typicode/json-server](https://github.com/typicode/json-server)

## O que devo editar na aplicação?

Com o template já clonado, as dependências instaladas e a fake API rodando, você deve criar **pelo menos** os componentes SideBar e Content que já estão com os arquivos criados.
Os arquivos a serem editados são:

- **src/App.tsx**
Esse componente contém toda a aplicação com exceção do componente `Button` que não precisa ser alterado e `Icon` que também não precisa de alteração.
- **src/components/Content.tsx**
Esse componente, ainda vazio, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação (seção contornada em vermelho):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff7c8a12-50d1-4a20-a680-9085d0bd6823/example.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff7c8a12-50d1-4a20-a680-9085d0bd6823/example.png)

- **src/components/SideBar.tsx**
Esse componente, também vazio, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página (seção contornada em vermelho):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88f057c2-d29a-4b0d-b9ed-f11385e09030/example.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88f057c2-d29a-4b0d-b9ed-f11385e09030/example.png)

Se você preferir, pode também componentizar algumas outras partes da aplicação como, por exemplo, o header, mas esse não está como requisito deste desafio 🚀