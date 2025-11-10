// // console.log("Hello World");
// // class
// class User {
//   // Phương thức khởi tạo: must be constructor()
//   //   constructor() {
//   //     console.log("Initial");
//   //   }
//   constructor(name, email) {
//     // console.log("Initial");
//     // console.log(name + " - " + email);

//     // Khởi tạo thuộc tính
//     this.name = name;
//     this.email = email;
//   }

//   // method viết ở ngoài
//   getName() {
//     console.log(this.name);
//   }

//   getEmail() {
//     console.log(this.email);
//   }
// }

// // Khởi tạo instance
// // const user = new User();
// // const user = new User("User1", "user1@gmail.com");
// // console.log(user);
// // user.getName();
// // user.getEmail();

// // //age chỉ tồn tại trong instance user, class sẽ không có thuộc tính age
// // user.age = 33;
// // console.log(user);

// // kế thừa:
// class Auth extends User {
//   // CÓ thể viết phương thức mới, thuộc tính mới
//   getProfile() {
//     return [this.name, this.email, this.age, this.status];
//   }
//   //auth không có constructor nên sẽ kế thừa từ User

//   // Khi nào class con (auth) sẽ có constructor
//   constructor(name, email, age, status) {
//     super(name, email);
//     this.age = age;
//     this.status = status;
//   }
// }

// const auth = new Auth("User2", "user2@gmail.com", 25, true);
// console.log(auth.getProfile());
// console.log(auth);

// class Auth2 extends Auth {
//   getProfile() {
//     return [this.name, this.email, this.age, this.status, this.test];
//   }
//   constructor(name, email, age, status, test) {
//     super(name, email, age, status);
//     this.test = test;
//   }
//   getEmail() {
//     // console.log(this.email + " - F9");
//     super.getEmail();
//     // gọi phương thức của class cha
//     // console.log(super.getEmail());
//   }
// }

// const auth2 = new Auth2("User2", "user2@gmail.com", 25, true, "TEST");
// console.log(auth2.getProfile());
// console.log(auth2);

// auth2.getEmail();

// // * Lưu ý : 1 class chỉ có thể kế thừa được từ 1 class

//Static method, static property => không bị phụ thuộc bởi instance
// class User {
//   static name = "Phương Anh";
//   email = "anhvtp@f8.fullstack.edu";
//   static getName() {
//     console.log(this);
//     console.log("Xin chào, tôi là " + this.name);
//   }

//   getName2() {
//     console.log("Xin chào tôi là non-static");
//     // console.log(this);
//     // this là instance của User
//     // this.constructor biến User thành class
//     console.log(this.constructor.name);
//   }

//   static getEmail() {
//     console.log("static");
//     console.log(new this().email);
//   }
// }

// console.log(User.name);
// User.getName();

// Ví dụ: Array.isArray (isArray => static method)

// const user = new User();
// user.getName2();
// User.getEmail();

//Setter/Getter

// Thêm # vào trước array để cất data đi
// class User {
//   #data = ["Item 1", "Item 2", "Item 3"];
//   get latest() {
//     return this.#data[this.#data.length - 1];
//   }

//   // Lợi ích: giấu phương thức thật && xử lí logic
//   set latest(value) {
//     if (value === "admin") {
//       console.log("Invalid Value");
//       return;
//     }
//     this.#data.push(value);
//   }
// }
// const user = new User();

// user.latest = "Item 4"; //Push new item vào cuối mảng
// user.latest = "admin";

// console.log(user.latest);
// console.log(user.#data);

// class Calc {
//   //Cần khai báo #data ở bên ngoài constructor (vị trí trên dưới đều được)
//   //This ở đây chính là constructor
//   #data;
//   constructor(value) {
//     this.#data = value;
//   }
//   add(value) {
//     this.#data += value;
//     return this;
//   }
//   minus(value) {
//     this.#data -= value;
//     return this;
//   }
//   multi(value) {
//     this.#data *= value;
//     return this;
//   }
//   div(value) {
//     this.#data /= value;
//     return this;
//   }
//   get() {
//     return this.#data;
//   }
// }

// const result = new Calc(5).add(3).minus(2).multi(6).div(3).get();
// console.log(result);

//Ví dụ: Cần xây dựng hệ thống CRUD products:
// - create
// - read
// - update
// - delete

// Service sẽ xử lí logic Vd: thêm mới sản phẩm, thêm, sửa,  xóa,....
// class Service {
//   #data = [];
//   // Phương thức add dùng chung cho cả add Product và add User
//   add(item) {
//     this.#data.push(item);
//   }

//   // Phương thức list thực hiện hiển thị cả Product data list và User data list
//   list() {
//     return this.#data;
//   }
// }

// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }

// class User {
//   constructor(id, name, email) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//   }
// }

// const productService = new Service();
// productService.add(new Product(1, "Product 1", 1000));
// productService.add(new Product(2, "Product 2", 1000));
// console.log(productService.list());

// const userService = new Service();
// userService.add(new User(1, "User 1", "abc1@gmail.com"));
// userService.add(new User(2, "User 2", "abc1@gmail.com"));
// console.log(userService.list());

//Dependency Injection (DI)
// Solid

// Optional Chaining (?.)

// Trường hợp 1:
// const user = {
//   email: {
//     domain: "@gmail.com",
//   },
//   getName() {
//     console.log("OK");
//   },
// };
// // Không được dùng optional chaining ở vế trái của biểu thức
// const result = user?.email?.domain;
// console.log(result);

// Trường hợp 2: Sử dụng đối với phương thức
// user?.getName?.();

// function nestedUsers(list, parent = 0) {
//   return users.reduce((acc, item) => {
//     if (item.parent === parent) {
//       const children = item;
//       acc.push(children);
//     }

//     return acc;
//   }, []);
// }

// const nestedUsers = [];
// Lần 1
// users.forEach((user) => {
//   if (user.parent === 0) {
//     nestedUsers.push(user);
//     // Lần 2
//     users.forEach((user2) => {
//       if (user2.parent === user.id) {
//         if (!user.children) {
//           user.children = [];
//         }
//         user.children.push(user2);
//         //Lần 3
//         users.forEach((user3) => {
//           if (user3.parent === user2.id) {
//             if (!user2.children) {
//               user2.children = [];
//             }
//             user2.children.push(user3);
//           }
//         });
//       }
//     });
//   }
// });

// Ứng dụng lấy dữ liệu để xử lí menu đa cấp
// const users = [
//   {
//     id: 1,
//     name: "Item 1",
//     parent: 0,
//   },
//   {
//     id: 2,
//     name: "Item 2",
//     parent: 0,
//   },
//   {
//     id: 3,
//     name: "Item 3",
//     parent: 0,
//   },
//   {
//     id: 4,
//     name: "Item 2.1",
//     parent: 2,
//   },
//   {
//     id: 5,
//     name: "Item 2.2",
//     parent: 2,
//   },
//   {
//     id: 6,
//     name: "Item 2.3",
//     parent: 2,
//   },
//   {
//     id: 7,
//     name: "Item 2.2.1",
//     parent: 5,
//   },
//   {
//     id: 8,
//     name: "Item 2.2.2",
//     parent: 5,
//   },
// ];

// function nestedUsers(list, parent = 0) {
//   let arr = [];
//   list.forEach((user) => {
//     if (user.parent === parent) {
//       arr.push(user);
//       const result = nestedUsers(list, user.id);
//       console.log(result);
//       console.log(result.length);
//       if (result.length) {
//         user.children = result;
//       }
//     }
//   });
//   return arr;
// }

// console.log(nestedUsers(users));

// console.log(nestedUsers(users));
// console.log(nestedUsers);
