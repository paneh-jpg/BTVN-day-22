// Kế thừa
// function User() {
//   this.name = "Hoàng An";
//   this.email = "hoangan.web@gmail.com";

//   this.first = function () {
//     return {
//       name: this.name,
//       email: this.email,
//     };
//   };
// }

// function Authentication() {
//   User.call(this);
//   this.getProfile = function () {
//     return this.first();
//   };
// }

// var user = new Authentication();
// console.log(user.getProfile());

// setter => cập nhật giá trị thuộc tính thông qua 1 hàm
// getter  => lấy giá trị thuộc tính thông qua 1 hàm
// ==> Cách gọi giống thuộc tính
// users.length => đây là hàm setter getter nên cách gọi giống gọi thuộc tính
// function Person() {
//   this.data = ["Item 1", "Item 2", "Item 3"];
//   this.getLatest = function () {
//     return this.data[this.data.length - 1];
//   };
// }

// Person.prototype = {
//   get latest() {
//     return this.data[this.data.length - 1];
//   },
//   set latest(value) {
//     this.data.push(value);
//   },
// };

// var person = new Person();
// person.latest = "Item 4"; // gọi setter
// console.log(person.latest); // gọi getter → "Item 4"

// // ---- Phần mảng users ----
// var users = ["User 1", "User 2", "User 3", "User 4"];

// console.log(users.length); // 👉 4
// users.length = 2; // cắt mảng chỉ còn 2 phần tử
// console.log(users); // 👉 ["User 1", "User 2"]

// Sử dụng constructor giống như 1 function thông thường
function Person() {
  this.name = "Hoàng An";
  this.email = "hoangan.web@gmail.com";
  return "F8";
}

var person = new Person();
console.log(person);
console.log(Person());

var age = new Number(10);
console.log(age);
console.log(Number(10));

var fullnameObj = new String("Hello");
var fullname = String("Hello");
console.log(fullnameObj, typeof fullnameObj);
console.log(fullname, typeof fullname);

// Có cách nào dùng từ khóa new mà vẫn trả về dữ liệu không?
