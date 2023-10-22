/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);

  return knex('meal')
  // Deletes ALL existing entries
//  const result =  await knex('meals').del()
  .del()
  .then(function () {

  return  knex('meal').insert([
    {
      name: 'burger',
     description: 'burger with cheese',
     price: 70,
     is_vegetarian: false,
     image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Double_Decker-0.jpeg',
    },
    {
      name: 'pizza',
      description: 'pizza with beef',
      price: 130,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Freestyler-0.jpeg'
    },
     {
      name : 'rice',
      description: 'rice with chicken',
      price: 80,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Fried_Rice-0.jpeg'

     },
     {
      name: 'pork',
      description: 'pork with beef',
      price: 90,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Portion_of_Pork-0.jpeg'
     },
     {
      name: 'Shawarma',
      description: 'Tuna Shawarma',
      price: 50,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Slim_Macho_Shawarma-0.jpeg'
     },
     {
      name: 'Sandwich',
      description: 'vegetable & chicken filled',
      price: 67,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Oliver_Twist_Sandwich-0.jpeg'
     },
     {
      name: 'Mangopine',
      description: 'Mango & Pinapple smoothie',
      price: 67,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Mangopine-0.jpeg'
     }

  ]);

 }).catch(function (error) {
  console.error(error);
 });

};


