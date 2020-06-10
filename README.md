![webapp](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_01_app_web.png)
Ecoleta - Next Level Week \# 01
=======================================================================
![version](https://img.shields.io/badge/Release-v0.1.0-green) ![made](https://img.shields.io/badge/language-typescript-blue)  

Um Projeto desenvolvido na Semana [Next Level Week \#1](https://nextlevelweek.com).<br/>Seu marketplace de coleta de resíduos.<br/>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.




Requisitos
---
Consulte  *[tutorial](https://react-native.rocketseat.dev/)* de instalação feito pela Rocketseat.

Tecnologias usadas
---
+ Node JS
+ React JS
+ React Native
+ TypeScript
+ Sqlite3
+ Expo

Módulos do Projeto 
---
+	[Servidor Web](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/server)
+	[Aplicativo Móvel](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/mobile)
+	[Aplicação Web](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/web)

Front-end:
---

O front-end envia requisições para o back-end através da **API Rest**.<br/>Endereço da aplicação web: http://localhost:3000<br/>Endereço do aplicativo móvel (via expo) http://localhost:19000

**Responsabilidade da aplicação Web:**
+	Cadastrar os Pontos de Coleta. 

**Responsabilidade da aplicativo Móvel:**

+	Consultar os Pontos de Coleta por Cidade, UF e Itens recicláveis aceitos.


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
```sh
# configuração de dependencias
user@pc:$ yarn
# Inicialização do servidor
user@pc:$ yarn run dev
```
*[API Rest:](https://github.com/DanielOliveiraSouza/nlw/tree/master/docs/api_rest.md)*<br/>*[Notas de Lançamento](https://github.com/DanielOliveiraSouza/nlw/tree/master/docs/releases_notes.md)*
