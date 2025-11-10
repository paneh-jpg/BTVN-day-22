const users = [
  {
    id: 1,
    name: "Item 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Item 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Item 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Item 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Item 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Item 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Item 2.2.1",
    parent: 5,
  },
  {
    id: 8,
    name: "Item 2.2.2",
    parent: 5,
  },
];
console.log(users);

function nestedUsers(users) {}
