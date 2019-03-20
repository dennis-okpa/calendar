const knex = require('../knex');

const getData = ({name, system}) => ({
  name, system
});

module.exports = {
  getAll(){
    return knex('rights');
  },
  getOne(id){
    return knex('rights').where('id', id).first();
  },
  create(right){
    const data = getData(right);
    if(right.id !== undefined) data.id = right.id;
    return knex("rights").insert(data, 'id').then(IDs=>this.getOne(IDs[0]));
  },
  update(id, right){
    return knex("rights").where('id', id).update(getData(right)).then(()=>this.getOne(id));
  },
  delete(id){
    return knex('rights').where('id', id).del()
  }
};