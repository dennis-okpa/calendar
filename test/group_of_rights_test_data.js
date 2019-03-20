const groupOfRights = [
  {
    "id": 1,
    "role_fk": 3,
    "right_fk": 1
  },
  {
    "id": 2,
    "role_fk": 1,
    "right_fk": 1
  },
  {
    "id": 3,
    "role_fk": 1,
    "right_fk": 2
  },
  {
    "id": 4,
    "role_fk": 1,
    "right_fk": 3
  },
  {
    "id": 5,
    "role_fk": 1,
    "right_fk": 4
  },
  {
    "id": 6,
    "role_fk": 1,
    "right_fk": 5
  },
  {
    "id": 7,
    "role_fk": 1,
    "right_fk": 6
  },
  {
    "id": 8,
    "role_fk": 1,
    "right_fk": 7
  },
  {
    "id": 9,
    "role_fk": 1,
    "right_fk": 8
  },
  {
    "id": 10,
    "role_fk": 1,
    "right_fk": 9
  },
  {
    "id": 11,
    "role_fk": 2,
    "right_fk": 1
  },
  {
    "id": 12,
    "role_fk": 2,
    "right_fk": 2
  },
  {
    "id": 13,
    "role_fk": 2,
    "right_fk": 3
  },
  {
    "id": 14,
    "role_fk": 2,
    "right_fk": 4
  }
];

const groupOfRight_to_create = {
  "id": 15,
  "role_fk": 2,
  "right_fk": 5
};

const groupOfRight_to_update = {
  "id": 16,
  "role_fk": 2,
  "right_fk": 6
};

const groupOfRight_to_del = {
  "id": 17,
  "role_fk": 2,
  "right_fk": 7
};

module.exports = {
  groupOfRights,
  groupOfRight_to_create,
  groupOfRight_to_update,
  groupOfRight_to_del
};