const employees = [
    { id: 1, name: "Alice", age: 23, status: "working" },
    { id: 3, name: "Bob", age: 25, status: "working" },
    { id: 6, name: "John", age: 27, status: "working" },
    { id: 8, name: "David", age: 23, status: "quit_job" },
    { id: 10, name: "Eve", age: 20, status: "working" },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000 },
    { id: 3, name: "Tab", price: 2000 },
    { id: 4, name: "PC", price: 800 },
    { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 3, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 3 },
    { id: 4, employeeId: 6, productId: 1, quantity: 2 },
    { id: 5, employeeId: 3, productId: 5, quantity: 3 },
    { id: 6, employeeId: 8, productId: 1, quantity: 1 },
    { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

/* =========================================================
   Common Functions
========================================================= */

/* Create map for faster lookup */
function createMapById(list) {

    const result = {};

    for (let i = 0; i < list.length; i++) {

        const item = list[i];

        result[item.id] = item;
    }

    return result;
}

const employeeMap = createMapById(employees);
const productMap = createMapById(products);

/* =========================================================
   Bai 1
   Lay ra ds nhan vien dang lam viec
========================================================= */

function getWorkingEmployees(employeeList) {

    const result = [];

    for (let i = 0; i < employeeList.length; i++) {

        const employee = employeeList[i];

        if (employee.status === "working") {

            result.push({
                employeeName: employee.name,
                employeeStatus: employee.status,
            });
        }
    }

    return result;
}

console.log("Bai 1: Lay ra ds nhan vien dang lam viec");
console.log(getWorkingEmployees(employees));


/* =========================================================
   Bai 2
   Lay ra nhan vien lon tuoi nhat
========================================================= */

function getOldestEmployee(employeeList) {

    let oldestEmployee = employeeList[0];

    for (let i = 1; i < employeeList.length; i++) {

        const currentEmployee = employeeList[i];

        if (currentEmployee.age > oldestEmployee.age) {
            oldestEmployee = currentEmployee;
        }
    }

    return {
        employeeName: oldestEmployee.name,
        employeeAge: oldestEmployee.age,
    };
}

console.log("Bai 2: Lay ra nhan vien lon tuoi nhat");
console.log(getOldestEmployee(employees));


/* =========================================================
   Bai 3
   Lay ra san phan gia re nhat
========================================================= */

function getCheapestProduct(productList) {

    let cheapestProduct = productList[0];

    for (let i = 1; i < productList.length; i++) {

        const currentProduct = productList[i];

        if (currentProduct.price < cheapestProduct.price) {
            cheapestProduct = currentProduct;
        }
    }

    return {
        productName: cheapestProduct.name,
        productPrice: cheapestProduct.price,
    };
}

console.log("Bai 3: Lay ra san phan gia re nhat");
console.log(getCheapestProduct(products));

/* =========================================================
   Bai 4
   Tìm ra sản phẩm bán chạy nhất ( bán nhiều nhất về mặt số lượng )
========================================================= */

function getBestSellingProduct(orderList, productData) {

    const quantityByProduct = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        if (!quantityByProduct[order.productId]) {
            quantityByProduct[order.productId] = 0;
        }

        quantityByProduct[order.productId] += order.quantity;
    }

    let bestProductId = null;
    let highestQuantity = 0;

    for (const productId in quantityByProduct) {

        if (quantityByProduct[productId] > highestQuantity) {

            highestQuantity = quantityByProduct[productId];
            bestProductId = Number(productId);
        }
    }

    const bestProduct = productData[bestProductId];

    return {
        productName: bestProduct.name,
        totalQuantity: highestQuantity,
    };
}

console.log("Bai 4: Tìm ra sản phẩm bán chạy nhất ( bán nhiều nhất về mặt số lượng )");
console.log(
    getBestSellingProduct(orders, productMap)
);

/* =========================================================
   Bai 5
   Tim ra san phan doanh thu cao nhat ( nhiều tiền nhất )
========================================================= */

function getHighestRevenueProduct(orderList, productData) {

    const revenueByProduct = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        const product = productData[order.productId];

        const revenue = product.price * order.quantity;

        if (!revenueByProduct[order.productId]) {
            revenueByProduct[order.productId] = 0;
        }

        revenueByProduct[order.productId] += revenue;
    }

    let bestProductId = null;
    let highestRevenue = 0;

    for (const productId in revenueByProduct) {

        if (revenueByProduct[productId] > highestRevenue) {

            highestRevenue = revenueByProduct[productId];
            bestProductId = Number(productId);
        }
    }

    const bestProduct = productData[bestProductId];

    return {
        productName: bestProduct.name,
        revenue: highestRevenue,
    };
}

console.log("Bai 5: Tim ra san phan doanh thu cao nhat ( nhiều tiền nhất )");
console.log(
    getHighestRevenueProduct(orders, productMap)
);

/* =========================================================
   Bai 6
   Tim ra nhan vien ban nhieu hang nhat
========================================================= */

function getTopSellerEmployee(orderList, employeeData) {

    const quantityByEmployee = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        if (!quantityByEmployee[order.employeeId]) {
            quantityByEmployee[order.employeeId] = 0;
        }

        quantityByEmployee[order.employeeId] += order.quantity;
    }

    let bestEmployeeId = null;
    let highestQuantity = 0;

    for (const employeeId in quantityByEmployee) {

        if (quantityByEmployee[employeeId] > highestQuantity) {

            highestQuantity = quantityByEmployee[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }

    const bestEmployee = employeeData[bestEmployeeId];

    return {
        employeeName: bestEmployee.name,
        totalQuantity: highestQuantity,
    };
}

console.log("Bai 6: Tim ra nhan vien ban nhieu hang nhat");
console.log(
    getTopSellerEmployee(orders, employeeMap)
);


/* =========================================================
   Bai 7
   Tim ra nhan vien co doanh thu cao nhat
========================================================= */

function getHighestRevenueEmployee(
    orderList,
    employeeData,
    productData
) {

    const revenueByEmployee = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        const product = productData[order.productId];

        const revenue = product.price * order.quantity;

        if (!revenueByEmployee[order.employeeId]) {
            revenueByEmployee[order.employeeId] = 0;
        }

        revenueByEmployee[order.employeeId] += revenue;
    }

    let bestEmployeeId = null;
    let highestRevenue = 0;

    for (const employeeId in revenueByEmployee) {

        if (revenueByEmployee[employeeId] > highestRevenue) {

            highestRevenue = revenueByEmployee[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }

    const bestEmployee = employeeData[bestEmployeeId];

    return {
        employeeName: bestEmployee.name,
        revenue: highestRevenue,
    };
}

console.log("Bai 7: Tim ra nhan vien co doanh thu cao nhat");
console.log(
    getHighestRevenueEmployee(
        orders,
        employeeMap,
        productMap
    )
);

/* =========================================================
   Bai 8
   Tim ra san pham ban co doanh thu nhat cua moi nhan vien
========================================================= */

function getTopProductByEmployee(
    orderList,
    employeeData,
    productData
) {

    const revenueByEmployee = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        const product = productData[order.productId];

        const revenue = product.price * order.quantity;

        if (!revenueByEmployee[order.employeeId]) {
            revenueByEmployee[order.employeeId] = {};
        }

        if (!revenueByEmployee[order.employeeId][order.productId]) {
            revenueByEmployee[order.employeeId][order.productId] = 0;
        }

        revenueByEmployee[order.employeeId][order.productId] += revenue;
    }

    const result = [];

    for (const employeeId in revenueByEmployee) {

        const productRevenue = revenueByEmployee[employeeId];

        let bestProductId = null;
        let highestRevenue = 0;

        for (const productId in productRevenue) {

            if (productRevenue[productId] > highestRevenue) {

                highestRevenue = productRevenue[productId];
                bestProductId = Number(productId);
            }
        }

        result.push({
            employeeName: employeeData[employeeId].name,
            productName: productData[bestProductId].name,
            revenue: highestRevenue,
        });
    }

    return result;
}

console.log("Bai 8: Tim ra san pham ban co doanh thu nhat cua moi nhan vien");
console.log(
    getTopProductByEmployee(
        orders,
        employeeMap,
        productMap
    )
);


/* =========================================================
   Bai 9
   Gia su nhan vien se nhan duoc hoa hong la 3% -> tim hoa hong cho moi nhan vien
========================================================= */

function calculateEmployeeCommission(
    orderList,
    employeeData,
    productData
) {

    const revenueByEmployee = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        const product = productData[order.productId];

        const revenue = product.price * order.quantity;

        if (!revenueByEmployee[order.employeeId]) {
            revenueByEmployee[order.employeeId] = 0;
        }

        revenueByEmployee[order.employeeId] += revenue;
    }

    const result = [];

    for (const employeeId in revenueByEmployee) {

        const totalRevenue = revenueByEmployee[employeeId];

        result.push({
            employeeName: employeeData[employeeId].name,
            commission: totalRevenue * 0.03,
        });
    }

    return result;
}

console.log("Bai 9: Gia su nhan vien se nhan duoc hoa hong la 3% -> tim hoa hong cho moi nhan vien");
console.log(
    calculateEmployeeCommission(
        orders,
        employeeMap,
        productMap
    )
);


/* =========================================================
   Bai 10
   Sap xep nhan vien theo thu tu giam dan theo doanh thu
========================================================= */

function sortEmployeesByRevenue(
    orderList,
    employeeData,
    productData
) {

    const revenueByEmployee = {};

    for (let i = 0; i < orderList.length; i++) {

        const order = orderList[i];

        const product = productData[order.productId];

        const revenue = product.price * order.quantity;

        if (!revenueByEmployee[order.employeeId]) {
            revenueByEmployee[order.employeeId] = 0;
        }

        revenueByEmployee[order.employeeId] += revenue;
    }

    const result = [];

    for (const employeeId in revenueByEmployee) {

        result.push({
            employeeName: employeeData[employeeId].name,
            revenue: revenueByEmployee[employeeId],
        });
    }

    // Sort by revenue descending
    result.sort(function(a, b) {
        return b.revenue - a.revenue;
    });

    return result;
}

console.log("Bai 10: Sap xep nhan vien theo thu tu giam dan theo doanh thu");
console.log(
    sortEmployeesByRevenue(
        orders,
        employeeMap,
        productMap
    )
);