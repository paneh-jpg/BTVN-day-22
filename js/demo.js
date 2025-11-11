// service.js (version with toJSON + pretty print)

class BaseService {
  constructor(data) {
    this.data = data;
  }

  filterBy(key, value) {
    return this.data.filter((item) => item[key] === value);
  }

  groupBy(key) {
    return this.data.reduce((acc, item) => {
      const groupKey = item[key];
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(item);
      return acc;
    }, {});
  }

  sumBy(key) {
    return this.data.reduce((sum, item) => sum + item[key], 0);
  }

  findMaxBy(callback) {
    return this.data.reduce((max, item) =>
      callback(item) > callback(max) ? item : max
    );
  }

  sortBy(callback, desc = false) {
    return [...this.data].sort((a, b) =>
      desc ? callback(b) - callback(a) : callback(a) - callback(b)
    );
  }

  toJSON() {
    return JSON.stringify(this.data, null, 2);
  }

  print(title = "Data") {
    console.log(`\n========== ${title} ==========\n`);
    console.table(this.data);
  }
}

// ========== 1️⃣ PRODUCT SERVICE ==========
class ProductService extends BaseService {
  filterElectronics() {
    return this.filterBy("category", "Electronics");
  }

  totalElectronicsPrice() {
    return this.filterBy("category", "Electronics").reduce(
      (sum, p) => sum + p.price,
      0
    );
  }

  groupByCategory() {
    return this.groupBy("category");
  }

  printSummary() {
    console.log("\n📦 Product Summary:");
    console.table(this.data);
    console.log("Total Electronics Price:", this.totalElectronicsPrice());
    console.log("Group by Category:", this.groupByCategory());
  }
}

// ========== 2️⃣ STUDENT SERVICE ==========
class StudentService extends BaseService {
  averageScores() {
    return this.data.map((stu) => {
      const { math, english, science } = stu.scores;
      const avg = (math + english + science) / 3;
      return { ...stu, avg: Number(avg.toFixed(2)) };
    });
  }

  topStudent() {
    const list = this.averageScores();
    return list.reduce((max, s) => (s.avg > max.avg ? s : max));
  }

  sortByAverageDesc() {
    return this.averageScores().sort((a, b) => b.avg - a.avg);
  }

  printSummary() {
    console.log("\n🎓 Student Summary:");
    console.table(this.averageScores());
    console.log("Top Student:", this.topStudent());
  }
}

// ========== 3️⃣ ORDER SERVICE ==========
class OrderService extends BaseService {
  totalPerOrder() {
    return this.data.map((order) => ({
      ...order,
      total: order.items.reduce((s, i) => s + i.price * i.quantity, 0),
    }));
  }

  highestCustomer() {
    const totals = this.totalPerOrder();
    return totals.reduce((max, o) => (o.total > max.total ? o : max));
  }

  mergeAndGroupProducts() {
    const allItems = this.data.flatMap((o) => o.items);
    return allItems.reduce((acc, item) => {
      if (!acc[item.name]) acc[item.name] = 0;
      acc[item.name] += item.quantity;
      return acc;
    }, {});
  }

  printSummary() {
    console.log("\n🧾 Orders Summary:");
    console.table(this.totalPerOrder());
    console.log("Highest Value Order:", this.highestCustomer());
    console.log("Merged Products (by quantity):", this.mergeAndGroupProducts());
  }
}

// ========== 4️⃣ EMPLOYEE SERVICE ==========
class EmployeeService extends BaseService {
  totalSalaryByDept() {
    const grouped = this.groupBy("department");
    const result = {};
    for (const dept in grouped) {
      result[dept] = grouped[dept].reduce((sum, e) => sum + e.salary, 0);
    }
    return result;
  }

  topEmployeeByDept() {
    const grouped = this.groupBy("department");
    const result = {};
    for (const dept in grouped) {
      result[dept] = grouped[dept].reduce((max, e) =>
        e.salary > max.salary ? e : max
      );
    }
    return result;
  }

  groupDept() {
    return this.groupBy("department");
  }

  printSummary() {
    console.log("\n👩‍💼 Employee Summary:");
    console.table(this.data);
    console.log("Total Salary by Department:", this.totalSalaryByDept());
    console.log("Top Employee per Department:", this.topEmployeeByDept());
  }
}

// ========== 5️⃣ WATCH HISTORY SERVICE ==========
class WatchHistoryService extends BaseService {
  totalDurationByVideo() {
    return this.data.reduce((acc, { videoId, duration }) => {
      acc[videoId] = (acc[videoId] || 0) + duration;
      return acc;
    }, {});
  }

  mostWatchedVideo() {
    const totals = this.totalDurationByVideo();
    return Object.entries(totals).reduce((max, [video, time]) =>
      time > max[1] ? [video, time] : max
    )[0];
  }

  groupByUser() {
    return this.data.reduce((acc, { userId, videoId, duration }) => {
      if (!acc[userId]) acc[userId] = [];
      const existing = acc[userId].find((v) => v.videoId === videoId);
      if (existing) existing.totalDuration += duration;
      else acc[userId].push({ videoId, totalDuration: duration });
      return acc;
    }, {});
  }

  printSummary() {
    console.log("\n🎥 Watch History Summary:");
    console.table(this.data);
    console.log("Total Duration by Video:", this.totalDurationByVideo());
    console.log("Most Watched Video:", this.mostWatchedVideo());
    console.log("Group by User:", this.groupByUser());
  }
}

// ========== 🧪 TEST EXAMPLES ==========
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
new ProductService(products).printSummary();

const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
new StudentService(students).printSummary();

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
new OrderService(orders).printSummary();

const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];
new EmployeeService(employees).printSummary();

const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
new WatchHistoryService(watchHistory).printSummary();
