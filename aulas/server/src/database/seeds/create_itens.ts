import Knex from 'knex';

export async function seed(knex:Knex){
    return await knex('itens').insert( [
        {title: "Lâmpadas", image: "lampadas.svg"},
        {title: "Pilhas e baterias", image: "bateria.svg"},
        {title: "Papéis e Papelão", image: "papeis-papelao.svg"},
        {title: "Resíduos Eletrônicos", image: "eletronicos.svg"},
        {title: "Resíduos Orgânicos", image: "organicos.svg"},
        {title: "Óleo", image: "oleo.svg"},
    ])
    ;
}