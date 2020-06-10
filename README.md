Next Level Week # 01
===
![version](https://img.shields.io/badge/Release-v0.1.0-green) ![made](https://img.shields.io/badge/language-typescript-blue)
Um Projeto desenvolvido na Semana [Next Level Week #01](https://nextlevelweek.com).

Objetivo
---
Seu marketplace de coleta de resíduos.
Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.

Requisitos
---
[Ferramentas necessárias](https://react-native.rocketseat.dev/)

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
O front-end envia requisições para o back-end através da **API (Application Programming Interface) Rest**. 
Endereço da aplicação web: http://localhost:3000
Endereço do aplicativo móvel (via expo) http://localhost:19000

**Responsabilidade da aplicação Web:**
+	Cadastrar os Pontos de Coleta. 

**Responsabilidade da aplicativo Móvel:**

+	Consultar os Pontos de Coleta por Cidade, UF e Itens recicláveis aceitos.

<!--**Aplicação Web:**-->

<!--![webapp](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_01_app_web.png)
-->
<!--
**Aplicação Móvel:**

![android](https://raw.githubusercontent.com/DanielOliveiraSouza/nlw/master/screenshots/captura_02_app.png)
-->
Back-end: Servidor Web
---
Responsável pela implementação da **API Rest** e a conexão com banco de dados Sqlite3.
Endereço do servidor: http://localhost:3333


### Entidades
+	Itens
+	Points

#### Itens
São resíduos orgânicos e inorgânicos aceitos pelos estabelecimentos.

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
Points armazena informações sobre o  Ponto de Coleta.   Seus atributos são:

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

#### Resposta do Servidor:

```js
[
  {
    "id": 1,
    "title": "Lâmpadas",
    "image_url": "http://localhost:3333/uploads/lampadas.svg"
  },
  {
    "id": 2,
    "title": "Pilhas e Baterias",
    "image_url": "http://localhost:3333/uploads/baterias.svg"
  },
  {
    "id": 3,
    "title": "Papéis e Papelão",
    "image_url": "http://localhost:3333/uploads/papeis-papelao.svg"
  },
  {
    "id": 4,
    "title": "Resíduos Eletrônicos",
    "image_url": "http://localhost:3333/uploads/eletronicos.svg"
  },
  {
    "id": 5,
    "title": "Resíduos Orgânicos",
    "image_url": "http://localhost:3333/uploads/organicos.svg"
  },
  {
    "id": 6,
    "title": "Óleo",
    "image_url": "http://localhost:3333/uploads/oleo.svg"
  }
]
```


#### 2 - Listar Ponto por ID
http://localhost:3333/points/{id}
Parâmetro | tipo
-----------|-----------
id | numeral

##### Exemplo:
http://localhost:3333/points/10

#### Resposta do servidor:

```js
{
  "point": {
    "id": 10,
    "image": "c1f7c37e04d5-market.jpg",
    "name": "Mercado da Odete",
    "email": "odete@globo.com",
    "whatsapp": "11999999999",
    "latitude": -23.01,
    "longitude": -46.01,
    "city": "Guarulhos",
    "uf": "SP",
    "image_url": "http://192.168.3.191:3333/uploads/c1f7c37e04d5-market.jpg"
  },
  "itens": [
    {
      "title": "Lâmpadas"
    },
    {
      "title": "Pilha e Bateria"
    },
    {
      "title": "Óleo"
    }
  ]
}
```

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

##### Resposta do Servidor:

``` js
[
  {
    "id": 14,
    "image": "ae03a465898d-market.jpg",
    "name": "Mercado da Laura",
    "email": "laura.p.costa@globo.com",
    "whatsapp": "11999999999",
    "latitude": -23.01,
    "longitude": -46.01,
    "city": "São Paulo",
    "uf": "SP"
  },
  {
    "id": 15,
    "image": "aca83a80b827-market.jpg",
    "name": "Mercado do Pedro",
    "email": "pedro@globo.com",
    "whatsapp": "6699999999.0",
    "latitude": -23.01,
    "longitude": -46.01,
    "city": "São Paulo",
    "uf": "SP"
  }
]
```

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


