const roles = [
  {
    "id": 1,
    "name": "Admin",
    "system": true
  },
  {
    "id": 2,
    "name": "Basic",
    "system": true
  },
  {
    "id": 3,
    "name": "Guest",
    "system": true
  }
];

const role_to_create = {
  "id": 4,
  "name": "TESTING",
  "system": true
};

const role_to_update = {
  "id": 5,
  "name": "TESTING",
  "system": true
};

const role_to_del = {
  "id": 6,
  "name": "TESTING",
  "system": false
};

module.exports = {
  roles,
  role_to_create,
  role_to_update,
  role_to_del
};