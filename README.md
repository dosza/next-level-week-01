Next Level Week # 01
===

![ecoleta](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/aulas/mobile/src/assets/logo.png)

O que é
---
Um Projeto desenvolvido na Semana [Next Level Week #01](https://nextlevelweek.com).


Objetivo
---
Seu marketplace de coleta de resíduos.
Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.


Requisitos
---
[Ferramentas necessárias](https://react-native.rocketseat.dev/)


Módulos do Projeto 
---

+	[Servidor Web](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/server)
+	[Aplicativo Móvel](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/mobile)
+	[Aplicação Web](https://github.com/DanielOliveiraSouza/nlw/tree/master/aulas/web)

Front-end:
---
O front-end envia requisições para o back-end através da **API (Application Programming Interface) Rest**.
Endereço da aplicação web: http://localhost:3000

**Responsabilidade da aplicação Web:**
+	Cadastrar os Pontos de Coleta. 

**Responsabilidade da aplicativo Móve:**
+	Consultar os Pontos de Coleta por Cidade, UF e Itens recicláveis aceitos.

**Aplicação Web:**
![webapp](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_01_app_web.png)

**Aplicação Móvel:**

![android](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_02_app.png)
Back-end: Servidor Web
---
Responsável pela implementação da **API Rest** e a conexão com banco de dados Sqlite3.
Endereço do servidor: http://localhost:3333
Endereço do aplicativo móvel (via expo) http://localhost:19000

### Entidades
Duas entidades são fundamentais para a aplicação
+	Itens
+	Points

#### Itens
São resíduos orgânicos e inorgânicos coletado pelos estabelecimentos.

#### Itens pré-definidos:
1. Lâmpadas
2. Pilha e Baterias
3. Papéis e Papelão
4. Resíduos Eletrônicos
5. Resíduos Orgânicos
6. Óleo 

#### Definição de Itens
Nome do atributo | Tipo | Informação
-----------------|------|-----------
id 			| numeral | Identificador gerado automáticamente.
title		| string | título do resíduo
image 		| string | nome da imagem associada ao item.


#### Points
Points armazena informações sobre o  Ponto de Coleta.¨ Seus atributos são:

Nome do atributo | Tipo | Informação
-----------------|------|-----------
id 			| numeral | Identificador gerado automáticamente.
name  		| string  | Nome do estabelecimento
email 		| string  | E-mail
whatsapp	| string  | Telefone para contato
latitude	| numeral | Coordenada latitude do local
longitude	| numeral | Coordenada de longitude do local
city		| string  | Cidade
uf 			| string  | Unidade da Federação (uf)
items		| string  | Lista dos ID dos  itens separada por vírgula \*
image		| image/*   | arquivo de imagem

##### exemplo: \* 1,2,3

### API Rest:

Implementa ações com o método GET e POST.

#### GET
1. 	Listar todos os itens:
2.	Listar ponto por ID
3.	Listar Pontos Específico

#### 1 - Listar todos os itens
http://localhost:3333/itens


#### 2 - Listar Ponto por ID
http://localhost:3333/points/{id}
Parâmetro | tipo
-----------|-----------
id | numeral

##### Exemplo:
http://localhost:3333/points/1

#### 3 - Listar Pontos Específico
Mostra os Pontos por cidade, UF e itens.

http://localhost:3333/points

Parâmetros | Valor do parâmetro | Tipo
-----------|-----------|-----------
city  | nome da cidade | string
uf    | sigla da UF | string
itens|  num1,num2,... | string

**Obs:** Todos os parâmetros são requeridos

##### Exemplo:

Parâmetros | Valor do parâmetro | Tipo
-----------| -----------|-----------
city  | São Paulo | string
uf    | SP | string
itens|  1,2,6 | string

*Query* resultante: http://localhost:3333/points/?city=S%C3%A3o%20Paulo&uf=SP&itens=1,2,6

#### POST
Formato de envio: arquivo *multipart*
+	Cadastar Ponto de Coleta

http://localhost:3333/points

Parâmetros | Tipo| Valor
-----------|-----------|-----------
name  		| string  | 'Daniel'
email 		| string  | 'seuemail@dominio.com'
whatsapp	| string  | '1140000000'
latitude	| numeral | -23.00
longitude	| numeral | -46.00
city		| string  | 'São Paulo'
uf 			| string  | 'SP'
items		| string  | 1,2,3
image		| image/*   | arquivo.jpg


Tecnologias usadas
---
+	Node JS
+	React JS
+	React Native
+	TypeScript
+	Sqlite3
