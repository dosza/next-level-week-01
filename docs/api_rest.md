API  Ecoleta.
===
Versão: v0.1.0<br/>
Esta API fornece informações sobre Eco-Pontos.<br/>Implementa ações com os métodos POST e GET.

#### Método GET
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

#### Método POST
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


