const rights = [
  {
    "id": 1,
    "name": "Calendar_VIEW",
    "system": true
  },
  {
    "id": 2,
    "name": "Calendar_Event_ADD",
    "system": false
  },
  {
    "id": 3,
    "name": "Calendar_Event_EDIT",
    "system": true
  },
  {
    "id": 4,
    "name": "Calendar_Event_DELETE",
    "system": true
  },
  {
    "id": 5,
    "name": "Admin_Page_VIEW",
    "system": true
  },
  {
    "id": 6,
    "name": "Admin_Page_Role_ADD",
    "system": true
  },
  {
    "id": 7,
    "name": "Admin_Page_Role_EDIT",
    "system": true
  },
  {
    "id": 8,
    "name": "Admin_Page_Role_DELETE",
    "system": true
  },
  {
    "id": 9,
    "name": "Admin_Page_User_Role_Edit",
    "system": true
  }
];

const right = {
  "id": 10,
  "name": "TESTING",
  "system": true
};

const right_to_del = {
  "id": 11,
  "name": "TESTING",
  "system": false
};

module.exports = {
  rights,
  right,
  right_to_del
};