// Bài 1:
console.log("Bài 1:");

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

class ProductService {
  constructor(products) {
    this.products = products;
  }

  filterElectronics() {
    return this.products.filter(
      (product) => product.category === "Electronics"
    );
  }

  totalElectronicsPrice() {
    return this.filterElectronics().reduce(
      (total, product) => total + product.price,
      0
    );
  }

  groupByCategory() {
    return this.products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  }
}

const productService = new ProductService(products);
console.log("Sản phẩm Electronics:", productService.filterElectronics());
console.log("Tổng giá Electronics:", productService.totalElectronicsPrice());
console.log("Nhóm sản phẩm theo danh mục:", productService.groupByCategory());

console.log("                                     ");

// Bài 2:
console.log("Bài 2:");

const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];

function calcAverageScore(students) {
  const result = [];
  for (let student of students) {
    const scoreArr = Object.values(student.scores);
    const avg =
      scoreArr.reduce((acc, score) => acc + score, 0) / scoreArr.length;

    result.push({
      id: student.id,
      name: student.name,
      scores: student.scores,
      average: Number(avg.toFixed(2)),
    });
  }
  return result;
}

console.log("Điểm trung bình của học viên: ");
console.log(calcAverageScore(students));

function findTopStudent(students) {
  const newStudents = calcAverageScore(students);

  let topStudent = newStudents[0];
  for (let i = 0; i < newStudents.length; i++) {
    if (topStudent.average < newStudents[i].average) {
      topStudent = newStudents[i];
    }
  }
  return topStudent;
}
console.log("Học sinh có điểm TB cao nhất:");
console.log(findTopStudent(students));

function sortStudents(students) {
  const newStudents = calcAverageScore(students);
  return newStudents.sort((a, b) => {
    const avgA = a.average;
    const avgB = b.average;
    return avgB - avgA;
  });
}
console.log("Mảng sau khi sắp xếp: ");
console.log(sortStudents(students));

// Bài 3:
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

console.log("                                     ");

console.log("Bài 3:");

function calculateOrderTotals(orders) {
  const newOrders = structuredClone(orders);
  for (const order of newOrders) {
    for (const item of order.items) {
      let price = item.price * item.quantity;
      order.totalPrice = price;
    }
  }
  return newOrders;
}
console.log("Tổng số tiền của từng đơn hàng như sau:");
console.log(calculateOrderTotals(orders));

function findCustomerRichest(orders) {
  const newOrders = calculateOrderTotals(orders);
  let richestCustomer = newOrders[0];
  for (const order of newOrders) {
    if (order.totalPrice > richestCustomer.totalPrice) {
      richestCustomer = order;
    }
  }
  return richestCustomer;
}
console.log("Khách hàng có đơn hàng giá trị cao nhất là:");
console.log(findCustomerRichest(orders));

function mergeAndGroupProducts(orders) {
  const products = {};
  for (const order of orders) {
    for (const item of order.items) {
      const productName = item.name;
      if (!products[productName]) {
        products[productName] = {
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        };
      } else {
        products[productName].quantity += item.quantity;
      }
    }
  }

  return Object.values(products);
}
console.log("Danh sách sản phẩm:");
console.log(mergeAndGroupProducts(orders));
