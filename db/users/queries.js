const knex = require('../knex');

module.exports = {
  getAll(){
    return knex('users');
  },
  getOne(id){
    return knex('users').where('id', id).first();
  },
  create(user){
    return knex("users").insert(user, 'id').then(IDs=>this.getOne(IDs[0]));
  },
  update(id, user){
    return knex("users").where('id', id).update(user).then(()=>this.getOne(id));
  },
  delete(id){
    return knex('users').where('id', id).del()
  }
};