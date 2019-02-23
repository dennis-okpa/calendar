const knex = require('../knex');

const getAccountData = ({name, description, initial_amount}) => {
  return {
    name, description, initial_amount
  }
};

module.exports = {
  getAll(){
    return knex('accounts');
  },
  getOne(id){
    return knex('accounts').where('id', id).first();
  },
  create(account){
    const accountData = getAccountData(account);
    if(account.id !== undefined) accountData.id = account.id;
    if(account.date_created !== undefined) accountData.date_created = account.date_created;
    return knex("accounts").insert(accountData, 'id').then(IDs=>this.getOne(IDs[0]));
  },
  update(id, account){
    const accountData = getAccountData(account);
    return knex("accounts").where('id', id).update(accountData).then(()=>this.getOne(id));
  },
  delete(id){
    return knex('accounts').where('id', id).del()
  }
};