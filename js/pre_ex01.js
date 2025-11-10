// console.log("Hello World");
// Thực hành Prototype
// - Thêm prototype cho Object => Tất cả các object đều kế thừa được
// - Thêm prototype cho Constructor (Array, String, ...) => Chỉ những Object được tạo ra từ Constructor đó kế thừa được

// Object ==> Instance
// Bài tập:
// Array.prototype.map2 = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     var value = this[i];
//     var index = i;
//     result.push(callback(value, index, this));
//   }
//   return result;
// };

// var users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
// var newUsers = users.map2(function (user, index) {
//   return `<h3>${index + 1} - ${user}</h3>`;
// });
// console.log(newUsers);

// const numbers = [1, 2, 3];
// const newArr = numbers.map2((num, index, arr) => {
//   return arr;
// });

// console.log(newArr);

//Object Literal => cách thường dùng
// Function Constructor : PascalCase

// Phương thức tĩnh, thuộc tính tĩnh => Dữ liệu được bảo toàn
/* 
- Không phụ thuộc vào đối tượng
- Đảm bảo dữ liệu không thay đổi khi Constructor được khởi tạo lại 
- Truy cập được trực tiếp từ constructor
*/
function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
const person1 = new Person("Phương Anh", 25, "anhvtpf@f8fullstack.edu.vn");
const person = new Person("Hoàng An", 32, "hoangan.web@gmail.com");

// console.log(person1);
// console.log(person2);

Person.message = "Học JS không khó"; // Static Property

Person.isPerson = function (instance) {
  return instance instanceof Person;
}; // Static method

// console.log(Person.message);
// console.log(Person.isPerson(person1));

// non-static property
Person.prototype.data = "Hello anh em F8!";

// non-static method
Person.prototype.getData = function () {
  console.log(this.constructor.message);
  return this.data;
};
console.log(person);
Person.something = function () {
  console.log(new this().data);
  return "Something";
};
console.log(Person.something());

// console.log(person.getData());
