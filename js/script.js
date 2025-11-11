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

// Bài 2:
console.log("");
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
console.log("");
console.log("Bài 3:");
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
      { name: "Headphones", price: 200, quantity: 2 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

function calculateOrderTotals(orders) {
  return orders.map((order) => {
    const totalPrice = order.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return {
      orderID: order.orderId,
      name: order.customer,
      totalPrice: totalPrice,
    };
  });
}
console.log("Tổng tiền của từng đơn hàng:");
console.log(calculateOrderTotals(orders));

function findMaxOrderCustomer(orders) {
  const newOrders = calculateOrderTotals(orders);
  let maxOrder = newOrders[0];
  for (const order of newOrders) {
    if (maxOrder.totalPrice < order.totalPrice) {
      maxOrder = order;
    }
  }
  return maxOrder;
}
console.log("Khách hàng có đơn hàng giá trị cao nhất:");
console.log(findMaxOrderCustomer(orders));

function mergeAndGroupProducts(orders) {
  const products = {};
  for (order of orders) {
    for (item of order.items) {
      const productName = item.name;
      if (!products[productName]) {
        products[productName] = item.quantity;
      } else {
        products[productName].quantity += item.quantity;
      }
    }
  }
  return products;
}
console.log("Danh sách sản phẩm:");
console.log(mergeAndGroupProducts(orders));

// Bài 4:
console.log("");
console.log("Bài 4:");
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

function totalDepartmentSalaries(employees) {
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

console.log("Tổng lương theo từng phòng ban:");
console.log(totalDepartmentSalaries(employees));

function findTopEmployeeByDepartment(employees) {
  return employees.reduce((acc, employee) => {
    const dept = employee.department;
    if (!acc[dept]) {
      acc[dept] = employee;
    } else if (employee.salary > acc[dept].salary) {
      acc[dept] = employee;
    }
    return acc;
  }, {});
}
console.log("Nhân viên lương cao nhất theo từng phòng ban:");
console.log(findTopEmployeeByDepartment(employees));

function groupEmployeesByDepartment(employees) {
  return employees.reduce((acc, employee) => {
    const dept = employee.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }

    acc[dept].push(employee);
    return acc;
  }, {});
}
console.log("Nhóm nhân viên theo từng phòng ban:");
console.log(groupEmployeesByDepartment(employees));

// Bài 5:
console.log("");
console.log("Bài 5:");
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

function totalWatchDuration(watchHistory) {
  return watchHistory.reduce((acc, history) => {
    const videoId = history.videoId;
    if (!acc[videoId]) {
      acc[videoId] = history.duration;
    } else {
      acc[videoId] += history.duration;
    }
    return acc;
  }, {});
}

console.log("Tổng thời gian xem của từng video:");
console.log(totalWatchDuration(watchHistory));

function getTopVideoByTime(watchHistory) {
  const result = Object.entries(totalWatchDuration(watchHistory));
  return Object.fromEntries([
    result.reduce((topVideo, history) => {
      if (topVideo[1] < history[1]) {
        topVideo = history;
      }
      return topVideo;
    }, result[0]),
  ]);
}

console.log("Video có lượt xem cao nhất: ");
console.log(getTopVideoByTime(watchHistory));

function groupByUser(watchHistory) {
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
console.log("Nhóm lịch sử xem:");
console.log(groupByUser(watchHistory));

// Bài 6:
console.log("");
console.log("Bài 6:");
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
console.log("Số trận thắng/hòa/thua của từng đội:");
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
console.log("Bảng xếp hạng các đội bóng:");
console.log(rankTeams(matches));

function findTopScoringTeam(matches) {
  const goals = {};
  for (const { teamA, teamB, scoreA, scoreB } of matches) {
    if (!goals[teamA]) goals[teamA] = 0;
    if (!goals[teamB]) goals[teamB] = 0;
    goals[teamA] += scoreA;
    goals[teamB] += scoreB;
  }
  let topTeam = null;
  let maxGoals = -Infinity;
  for (const team in goals) {
    if (goals[team] > maxGoals) {
      maxGoals = goals[team];
      topTeam = team;
    }
  }
  return { team: topTeam, goals: maxGoals };
}

console.log("Đội bóng có nhiều bàn thắng nhất ");
console.log(findTopScoringTeam(matches));

// Bài 7:
console.log("");
console.log("Bài 7:");
const employees2 = [
  { id: 1, name: "An", projects: ["P1", "P2", "P3", "P4"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4", "P3"] },
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
console.log("Nhóm nhân viên theo dự án:");
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
console.log("Dự án có nhiều nhân viên tham gia nhất:");
console.log(findProjectsWithMostEmployees(employees2));

// Bài 8:
console.log("");
console.log("Bài 8:");
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

console.log("Điểm trung bình đánh giá của mỗi sản phẩm: ");
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

console.log("Sản phẩm có điểm rating cao nhất:");
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
console.log("Nhóm sản phẩm theo ID");
console.log(groupReviewsByProduct(reviews));

// Bài 9:
console.log("");
console.log("Bài 9:");
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
console.log("Số dư của từng tài khoản: ");
console.log(calculateFinalBalances(transactions));

function findHighestBalanceAccount(transactions) {
  const balances = calculateFinalBalances(transactions);

  let topAccount = null;
  let maxBalance = -Infinity;

  for (const account in balances) {
    if (balances[account] > maxBalance) {
      maxBalance = balances[account];
      topAccount = { account, balance: balances[account] };
    }
  }

  return topAccount;
}
console.log("Tài khoản có số dư cao nhất:");
console.log(findHighestBalanceAccount(transactions));

function groupTransactionsByAccount(transactions) {
  return transactions.reduce((acc, transaction) => {
    const { account } = transaction;
    if (!acc[account]) acc[account] = [];
    acc[account].push(transaction);
    return acc;
  }, {});
}
console.log("Nhóm giao dịch theo tài khoản:");
console.log(groupTransactionsByAccount(transactions));

// Bài 10:
console.log("");
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

console.log("Số lượng tồn kho của từng sản phẩm:");
console.log(calculateInventory(inventory));

function findTopInventoryItem(inventory) {
  const stock = calculateInventory(inventory);

  let topItem = null;
  let maxQuantity = -Infinity;

  for (const item in stock) {
    if (stock[item] > maxQuantity) {
      maxQuantity = stock[item];
      topItem = { item, quantity: stock[item] };
    }
  }

  return topItem;
}

console.log("Sản phẩm có số lượng tồn kho cao nhất:");
console.log(findTopInventoryItem(inventory));

function groupInventoryByItem(inventory) {
  return inventory.reduce((acc, record) => {
    const { item } = record;
    if (!acc[item]) acc[item] = [];
    acc[item].push(record);
    return acc;
  }, {});
}

console.log("Nhóm danh sách nhập/xuất theo sản phẩm:");
console.log(groupInventoryByItem(inventory));
