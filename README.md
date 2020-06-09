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
Endereço do servidor: http://localhost:3333

API Rest:
---
Implementa ações com o método GET e POST.

## GET
1. 	Listar todos os itens:
2.	Listar ponto por ID
3.	Listar Pontos por cidade, UF e itens

### 1 - Listar todos os itens
http://localhost:3333/itens


### 2 - Listar Ponto por ID
http://localhost:3333/points/{id}
Parâmetro | tipo
-----------|-----------
id| numeral

#### Exemplo:
http://localhost:3333/points/1

### 3 - Listar Pontos Específico
http://localhost:3333/points

Parâmetros | Valor do parâmetro | Tipo
-----------|-----------|-----------
city  | nome da cidade | string
uf    | sigla da UF | string
itens|  num1,num2,... | string

#### Exemplo:

Parâmetros | Valor do parâmetro | Tipo
-----------| -----------|-----------
city  | São Paulo | string
uf    | SP | string
itens|  1,2,6 | string

*Query* resultante: http://localhost:3333/points/?city=S%C3%A3o%20Paulo&uf=SP&itens=1,2,6

### POST
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




Front-end:
---

![webapp](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_01_app_web.png)
Endereço da aplicação web: http://localhost:3000

**Responsabilidades:**
+	Cadastrar os Pontos de Coleta.
+	Consultar os Pontos de Coleta por Cidade, UF e Itens recicláveis aceitos.

**Disponível em:**
+	Aplicativo Móvel
+	Aplicação Web

[!app](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_02_app.png)
Tecnologias usadas
---
+	Node JS
+	React JS
+	React Native
+	TypeScript
+	Sqlite3
