const knex = require('../knex');

const getData = ({name, system}) => ({
  name, system
});

module.exports = {
  getAll(){
    return knex('roles');
  },
  getOne(id){
    return knex('roles').where('id', id).first();
  },
  create(role){
    const data = getData(role);
    if(role.id !== undefined) data.id = role.id;
    return knex("roles").insert(data, 'id').then(IDs=>this.getOne(IDs[0]));
  },
  update(id, role){
    return knex("roles").where('id', id).update(getData(role)).then(()=>this.getOne(id));
  },
  delete(id){
    return knex('roles').where('id', id).del();
  }
};