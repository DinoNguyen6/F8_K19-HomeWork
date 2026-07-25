// const pay = (type) => {
//     if (type === "cash") {
//       console.log("Thanh toán bằng tiền mặt");
//     }
//
//     if (type === "bank") {
//       console.log("Cuyển khoản");
//     }
// }

const paymentHandlers = {
    cash: () => console.log("Thanh toán tiền mặt"),
    bank: () => console.log("Chuyển khoản"),
};

const pay = (type) => {
    const handler = paymentHandlers[type];
    if (!handler) {
        console.log(`Không hỗ trợ phương thức: ${type}`);
        return;
    }
    handler();
};


paymentHandlers.momo = () => console.log("Thanh toán qua Momo");

pay("cash"); // Thanh toán tiền mặt
pay("bank"); // Chuyển khoản
pay("momo"); // Thanh toán qua Momo