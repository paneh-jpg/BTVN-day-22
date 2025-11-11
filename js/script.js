console.log("Exercise 1:".toUpperCase());

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

function filterProductsByCategory(products, category) {
  console.log(`- Filter products in ${category}:`);
  let result = products.filter((product) => product.category === category);
  return result;
}
console.log(filterProductsByCategory(products, "Electronics"));

function getTotalPriceCategory(products, category) {
  const productsList = products.filter(
    (product) => product.category === category
  );
  const result = productsList.reduce(
    (total, product) => total + product.price,
    0
  );
  return `- Total price of products in ${category}: ${result}`;
}
console.log(getTotalPriceCategory(products, "Electronics"));

function groupProductsByCategory(products) {
  console.log("- Group products by category:");

  return products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
}
console.log(groupProductsByCategory(products));

console.log("\nExercise 2:".toUpperCase());
const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
  { id: 4, name: "Taylor Swift", scores: { math: 8, english: 7, science: 9 } },
  { id: 5, name: "Ariana Grande", scores: { math: 8, english: 7, science: 9 } },
];

function totalAverageScore(students) {
  return students.reduce((acc, student) => {
    const name = student.name;
    let averageScore = 0;
    let count = 0;
    for (let score in student.scores) {
      averageScore += student.scores[score];
      count++;
    }
    acc[name] = Number((averageScore / count).toFixed(2));
    return acc;
  }, {});
}
console.log("- The average score of each student:");
console.log(totalAverageScore(students));

function findTopStudent(students) {
  students = totalAverageScore(students);
  let highestScore = Math.max(...Object.values(students));
  const result = [];
  for (let student in students) {
    if (students[student] === highestScore) {
      result.push({
        name: student,
        averageScore: students[student],
      });
    }
  }
  return result;
}
console.log("- Student(s) with the highest average score:");
console.log(findTopStudent(students));

function sortStudent(students) {
  const newStudents = students.map((student) => {
    const scores = Object.values(student.scores);
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = (total / scores.length).toFixed(2);

    return {
      ...student,
      averageScore: Number(average),
    };
  });
  return newStudents.sort((a, b) => b.averageScore - a.averageScore);
}
console.log("- List of students sorted by average score in descending order:");
console.log(sortStudent(students));

console.log("\nExercise 3:".toUpperCase());
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

function getTotalPriceOfOrder(orders) {
  return orders.map((order) => ({ orderId: order.orderId }));
}
console.log("- Total price of each order:");
console.log(getTotalPriceOfOrder(orders));
