const knex = require('../knex');

const getData = ({role_fk, right_fk}) => ({
  role_fk, right_fk
});

module.exports = {
  getAll(){
    return knex('group_of_rights');
  },
  getOne(id){
    return knex('group_of_rights').where('id', id).first();
  },
  create(groupOfRight){
    const data = getData(groupOfRight);
    if(groupOfRight.id !== undefined) data.id = groupOfRight.id;
    return knex("group_of_rights").insert(data, 'id').then(IDs=>this.getOne(IDs[0]));
  },
  update(id, groupOfRight){
    return knex("group_of_rights").where('id', id).update(getData(groupOfRight)).then(()=>this.getOne(id));
  },
  delete(id){
    return knex('group_of_rights').where('id', id).del();
  }
};