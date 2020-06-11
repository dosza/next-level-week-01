<p align=center>
  <img src="https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/aulas/mobile/src/assets/logo.png"/>
</p>

<p align=center>
  <img src="https://img.shields.io/badge/Release-v0.1.1-green"/> <img src="https://img.shields.io/badge/language-typescript-blue!"/> <img src="https://img.shields.io/github/license/danieloliveirasouza/next-level-week-01"/>
</p>

Um Projeto desenvolvido na Semana [Next Level Week \#1](https://nextlevelweek.com).<br/>Seu marketplace de coleta de resíduos.<br/>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.


Tecnologias usadas
---
Consulte  *[tutorial](https://react-native.rocketseat.dev/)* de instalação feito pela Rocketseat.
+ Node JS
+ React JS
+ React Native
+ TypeScript
+ Sqlite3
+ Expo
+ Insomnia

Módulos do Projeto 
---
+ [Servidor Web](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/server)
+ [Aplicativo Móvel](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/mobile)
+ [Aplicação Web](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/web)

Front-end:
---

O front-end envia requisições para o back-end através da **API Rest**.<br/>Endereço da aplicação web: http://localhost:3000<br/>Endereço do aplicativo móvel (via expo) http://localhost:19000

**Responsabilidade da aplicação Web:**
+ Cadastrar os Pontos de Coleta. 

**Responsabilidade da aplicativo Móvel:**

+ Consultar os Pontos de Coleta por Cidade, UF e Itens recicláveis aceitos.


<!--**Aplicação Móvel:**

![android](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_02_app.png)
-->
Back-end: Servidor Web
---
Responsável pela implementação da **API Rest** e a conexão com banco de dados Sqlite3.<br/>Endereço do servidor: http://localhost:3333
### Entidades do Sistema:
+ Itens: São resíduos orgânicos e inorgânicos aceitos pelos estabelecimentos.
+ Points: São os de coleta

#### Itens pré-definidos:
1. Lâmpadas
2. Pilha e Baterias
3. Papéis e Papelão
4. Resíduos Eletrônicos
5. Resíduos Orgânicos
6. Óleo 

API Rest
---
Leia a Especificação da *[API Rest:](https://github.com/DanielOliveiraSouza/nlw/tree/master/docs/api_rest.md)* para obter informações sobre Itens e Pontos disponíveis. <br/>
<!--#### Definição de Itens
Nome do atributo | Tipo | Informação
-----------------|------|-----------
id      | numeral | Identificador gerado automáticamente.
title   | string | título do resíduo
image     | string | nome da imagem associada ao item.
-->


<!--Seus atributos são:

Nome do atributo | Tipo | Informação
-----------------|------|-----------
id      | numeral | Identificador gerado automáticamente.
name      | string  | Nome do estabelecimento
email     | string  | E-mail
whatsapp  | string  | Telefone para contato
latitude  | numeral | Coordenada latitude do local
longitude | numeral | Coordenada de longitude do local
city    | string  | Cidade
uf      | string  | Unidade da Federação (uf)
items   | string  | Lista dos ID dos  itens separada por vírgula \*
image   | image/*   | arquivo de imagem

##### exemplo: \* 1,2,3
-->
Getting Started!
---
Inicializando o servidor
```console
user@pc:~$ cd server
user@pc:~$ # configuração de dependencias
user@pc:~$  yarn
# Inicialização do servidor
user@user@pc:~$ pc:~$  yarn run dev
```
Inicialização da Aplicação web
```console
user@pc:~$ cd web
user@pc:~$ # configuração de dependencias
user@pc:~$  yarn
user@pc:~$ # Inicialização da aplicação web
user@pc:~$  yarn start
```
Inicialização da App Movel
```console
user@pc:~$ cd mobile
user@pc:~$ # configuração de dependencias
user@pc:~$  yarn
user@pc:~$ # Inicialização do App
user@pc:~$ expo start
```

Release Notes
---
Para informaçõs sobre novas funcionalidades  e correções de *bugs* leia as *[Notas de Lançamento](https://github.com/DanielOliveiraSouza/nlw/tree/master/docs/releases_notes.md)*<br/>
