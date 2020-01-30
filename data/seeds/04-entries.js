exports.seed = function(knex) {
  return knex('entries').del()
    .then(function () {
      return knex('entries').insert([
        { children_id: 1, food_id: 2, amount: "3", date: "January 29, 2020" }
      ]);
    });
};
