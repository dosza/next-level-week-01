# Next Level Week # 01
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

Back-end: Servidor Web
---
Responsável pela implementação da **API (Application Programming Interface) Rest** e a conexão com banco de dados.

API Rest:
---
http://localhost:3333 ou http://seu_ip_local:3333

### GET
1. 	Listar todos os itens:
2.	Listar pontos por ID
3.	Listar Pontos Especificos
4.	Listar Pontos por cidade, UF e itens

#### Listar todos os itens
http://localhost:3333/itens


#### Listar Ponto por ID
http://localhost:3333/points/{id}
Parâmetro | tipo
-----------|-----------
id| numeral

##### Exemplo:
http://localhost:3333/points/1

#### Listar Pontos Específico
http://localhost:3333/points

Parâmetros | Valor do parâmetro | Tipo
-----------|-----------|-----------
city  | nome da cidade | string
UF    | sigla da UF | string
itens|  num1,num2,... | string

##### Exemplo:

Parâmetros | Valor do parâmetro | Tipo
-----------| -----------|-----------
city  | São Paulo | string
UF    | SP | string
itens|  1,2,6 | string

### POST
Formato de envio: arquivo multi-part!
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




Front-end:
---
**Responsabilidades:**
+	Cadastrar os Pontos de Coleta.
+	Consultar os Pontos de Coleta por Cidade, UF e Itens recicláveis aceitos.

**Disponível em:**
+	Aplicativo Móvel
+	Aplicação Web

Tecnologias usadas
---
+	ReactJS
+	Node JS
+	ReactJS
+	React Native
+	TypeScript
+	Sqlite3
