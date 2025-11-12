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
    customer: "Conan",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 104,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

function getTotalPriceOfOrder(orders) {
  return orders.map((order) => ({
    orderId: order.orderId,
    customer: order.customer,
    totalPrice: order.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
  }));
}
console.log("- Total price of each order:");
console.log(getTotalPriceOfOrder(orders));

function findTopCustomer(orders) {
  orders = getTotalPriceOfOrder(orders);
  const topCustomers = orders.filter(
    (order) =>
      order.totalPrice === Math.max(...orders.map((order) => order.totalPrice))
  );
  return topCustomers;
}
console.log("- Customer(s) with the highest total price:");
console.log(findTopCustomer(orders));

function groupProductsByName(orders) {
  const products = {};
  for (const order of orders) {
    for (const item of order.items) {
      const productName = item.name;
      if (!products[productName]) {
        products[productName] = {
          quantity: item.quantity,
          price: item.price,
        };
      } else {
        products[productName].quantity += item.quantity;
      }
    }
  }
  return products;
}

console.log("- Group products by name:");
console.log(groupProductsByName(orders));

console.log("\nExercise 4:".toUpperCase());
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
  { id: 6, name: "John", department: "IT", salary: 1500 },
];

function sumSalaryByDept(employees) {
  return employees.reduce((acc, employee) => {
    const department = employee.department;
    if (!acc[department]) {
      acc[department] = employee.salary;
    } else {
      acc[department] += employee.salary;
    }
    return acc;
  }, {});
}
console.log("- Total salary of each department:");
console.log(sumSalaryByDept(employees));

function groupDepartment(employees) {
  const group = {};
  for (const employee of employees) {
    const dept = employee.department;
    if (!group[dept]) {
      group[dept] = [];
    }
    group[dept].push(employee);
  }
  return group;
}
console.log("- Group employee by department:");
console.log(groupDepartment(employees));

function findTopEmployee(employees) {
  const group = groupDepartment(employees);
  const result = {};
  for (const dept in group) {
    const maxSalary = Math.max(
      ...group[dept].map((employee) => employee.salary)
    );
    result[dept] = group[dept].filter(
      (employee) => employee.salary === maxSalary
    );
  }
  return result;
}
console.log("- Employee with the highest salary in each department");
console.log(findTopEmployee(employees));

console.log("\nExercise 5:".toUpperCase());
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
  { userId: 4, videoId: "C2", duration: 45 },
];

function calculateTotalWatchTime(watchHistory) {
  const totals = watchHistory.reduce((acc, history) => {
    const videoId = history.videoId;
    acc[videoId] = (acc[videoId] || 0) + history.duration;
    return acc;
  }, {});
  //Destructuring [videoId, totalDuration] để tách ra các giá trị
  //Mỗi lần duyệt, trả về Object mới có dạng { videoId, totalDuration }
  const result = Object.entries(totals).map(([videoId, totalDuration]) => ({
    videoId,
    totalDuration,
  }));
  return result;
}
console.log("- Total watch time of each video:");
console.log(calculateTotalWatchTime(watchHistory));

function findTopVideo(watchHistory) {
  watchHistory = calculateTotalWatchTime(watchHistory);
  const topVideos = watchHistory.filter(
    (video) =>
      video.totalDuration ===
      Math.max(...watchHistory.map((video) => video.totalDuration))
  );
  return topVideos;
}
console.log("- Video(s) with the highest total watch time: ");
console.log(findTopVideo(watchHistory));

function groupWatchHistoryByUser(watchHistory) {
  return watchHistory.reduce((acc, history) => {
    const id = history.userId;
    if (!acc[id]) {
      acc[id] = [];
    }
    const existingVideo = acc[id].find((v) => v.videoId === history.videoId);
    if (existingVideo) {
      existingVideo.totalDuration += history.duration;
    } else {
      acc[id].push({
        videoId: history.videoId,
        totalDuration: history.duration,
      });
    }
    return acc;
  }, {});
}

console.log("- Group watch history by user:");
console.log(groupWatchHistoryByUser(watchHistory));

console.log("\nExercise 6:".toUpperCase());
const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

function getTeamResults(matches) {
  const results = {};
  for (const match of matches) {
    const { teamA, teamB, scoreA, scoreB } = match;
    if (!results[teamA]) {
      results[teamA] = { win: 0, draw: 0, loss: 0 };
      results[teamB] = { win: 0, draw: 0, loss: 0 };
    }
    if (scoreA > scoreB) {
      results[teamA].win++;
      results[teamB].loss++;
    } else if (scoreA < scoreB) {
      results[teamA].loss++;
      results[teamB].win++;
    } else {
      results[teamA].draw++;
      results[teamB].draw++;
    }
  }
  return results;
}
console.log("- Number of wins, draws, and losses of each team:");
console.log(getTeamResults(matches));

function rankTeams(matches) {
  const records = Object.entries(getTeamResults(matches));
  const ranking = records.map(([team, record]) => {
    const points = record.win * 3 + record.draw * 1;
    return { team, points };
  });
  ranking.sort((a, b) => b.points - a.points);
  return ranking;
}
console.log("- Football team rankings:");
console.log(rankTeams(matches));

function findTopScoringTeams(matches) {
  const goals = {};

  for (const { teamA, teamB, scoreA, scoreB } of matches) {
    goals[teamA] = (goals[teamA] || 0) + scoreA;
    goals[teamB] = (goals[teamB] || 0) + scoreB;
  }

  const maxGoals = Math.max(...Object.values(goals));

  const topTeams = Object.entries(goals)
    .filter(([_, goalsCount]) => goalsCount === maxGoals)
    .map(([team, goalsCount]) => ({ team, goals: goalsCount }));

  return topTeams;
}

console.log("- The team with the most goals:");
console.log(findTopScoringTeams(matches));

console.log("\nExercise 7:".toUpperCase());
const employees2 = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

function groupEmployeesByProject(employees) {
  const projectGroups = {};
  for (const employee of employees) {
    for (const project of employee.projects) {
      if (!projectGroups[project]) {
        projectGroups[project] = []; // nếu chưa có dự án thì tạo mảng mới
      }
      projectGroups[project].push(employee.name);
    }
  }
  return projectGroups;
}
console.log("- Group employees by project:");
console.log(groupEmployeesByProject(employees2));

function findProjectsWithMostEmployees(employees) {
  const projectCount = {};
  for (const employee of employees) {
    for (const project of employee.projects) {
      if (!projectCount[project]) {
        projectCount[project] = 1;
      } else {
        projectCount[project]++;
      }
    }
  }
  let maxCount = 0;
  for (const project in projectCount) {
    if (projectCount[project] > maxCount) {
      maxCount = projectCount[project];
    }
  }
  const topProjects = Object.entries(projectCount)
    .filter(([_, count]) => count === maxCount)
    .map(([project, count]) => ({ project, count }));

  return topProjects;
}
console.log("- The project with the most employees: ");
console.log(findProjectsWithMostEmployees(employees2));

console.log("\nExercise 8:".toUpperCase());
const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

function calculateRating(reviews) {
  const ratings = reviews.reduce((acc, { productId, rating }) => {
    if (!acc[productId]) acc[productId] = { total: 0, count: 0 };
    acc[productId].total += rating;
    acc[productId].count++;
    return acc;
  }, {});

  return Object.entries(ratings).map(([productId, { total, count }]) => ({
    productId,
    rating: total / count,
  }));
}

console.log("- Average rating of each product: ");
console.log(calculateRating(reviews));

function findTopRatedProducts(reviews) {
  const ratings = calculateRating(reviews);
  let maxRating = -Infinity;

  for (const product of ratings) {
    if (product.rating > maxRating) {
      maxRating = product.rating;
    }
  }
  const topProducts = ratings.filter((product) => product.rating === maxRating);

  return topProducts;
}

console.log("- The product with the highest rating:");
console.log(findTopRatedProducts(reviews));

function groupReviewsByProduct(reviews) {
  const grouped = {};

  for (const review of reviews) {
    const { productId, userId, rating } = review;

    if (!grouped[productId]) {
      grouped[productId] = [];
    }

    grouped[productId].push({ userId, rating });
  }

  return grouped;
}
console.log("- Group products by ID:");
console.log(groupReviewsByProduct(reviews));

console.log("\nExercise 9:".toUpperCase());
const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];

function calculateFinalBalances(transactions) {
  return transactions.reduce((acc, { account, type, amount }) => {
    if (!acc[account]) acc[account] = 0;

    if (type === "deposit") acc[account] += amount;
    else if (type === "withdraw") acc[account] -= amount;

    return acc;
  }, {});
}
console.log("- Balance of each account: ");
console.log(calculateFinalBalances(transactions));

function findHighestBalanceAccounts(transactions) {
  const balances = calculateFinalBalances(transactions);
  const maxBalance = Math.max(...Object.values(balances));

  // Lọc ra tất cả tài khoản có số dư bằng maxBalance
  const topAccounts = Object.entries(balances)
    .filter(([_, balance]) => balance === maxBalance)
    .map(([account, balance]) => ({ account, balance }));

  return topAccounts;
}

console.log("- Account(s) with the highest balance");
console.log(findHighestBalanceAccounts(transactions));

function groupTransactionsByAccount(transactions) {
  return transactions.reduce((acc, transaction) => {
    const { account } = transaction;
    if (!acc[account]) acc[account] = [];
    acc[account].push(transaction);
    return acc;
  }, {});
}
console.log("- Group transactions by account: ");
console.log(groupTransactionsByAccount(transactions));

console.log("\nExercise 10:".toUpperCase());
console.log("Bài 10:");
const inventory = [
  { item: "Laptop", type: "import", quantity: 10 },
  { item: "Mouse", type: "import", quantity: 50 },
  { item: "Laptop", type: "export", quantity: 4 },
  { item: "Keyboard", type: "import", quantity: 20 },
  { item: "Mouse", type: "export", quantity: 10 },
];

function calculateInventory(inventory) {
  return inventory.reduce((acc, { item, type, quantity }) => {
    if (!acc[item]) acc[item] = 0;

    if (type === "import") acc[item] += quantity;
    else if (type === "export") acc[item] -= quantity;

    return acc;
  }, {});
}
console.log("- Stock quantity of each product:");
console.log(calculateInventory(inventory));

function findTopInventoryItems(inventory) {
  const stock = calculateInventory(inventory);
  const maxQuantity = Math.max(...Object.values(stock));

  const topItems = Object.entries(stock)
    .filter(([_, quantity]) => quantity === maxQuantity)
    .map(([item, quantity]) => ({ item, quantity }));

  return topItems;
}
console.log("- Product(s) with the highest stock quantity: ");
console.log(findTopInventoryItems(inventory));

function groupInventoryByItem(inventory) {
  return inventory.reduce((acc, record) => {
    const { item } = record;
    if (!acc[item]) acc[item] = [];
    acc[item].push(record);
    return acc;
  }, {});
}
console.log("- Group import/export records by product: ");
console.log(groupInventoryByItem(inventory));
