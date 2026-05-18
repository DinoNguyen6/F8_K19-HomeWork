const products = [
    { id: 1, name: 'MacBook Pro', price: 2000, category: 'Laptop' },
    { id: 2, name: 'iPhone 15', price: 1000, category: 'Phone' },
    { id: 3, name: 'Bàn phím cơ', price: 150, category: 'Accessories' },
    { id: 4, name: 'Màn hình Dell', price: 500, category: 'Monitor' }
];

const orders = [
    { orderId: 'ORD01', productId: 2, quantity: 2, status: 'completed' },
    { orderId: 'ORD02', productId: 1, quantity: 1, status: 'pending' },
    { orderId: 'ORD03', productId: 4, quantity: 3, status: 'completed' },
    { orderId: 'ORD04', productId: 3, quantity: 1, status: 'canceled' },
    { orderId: 'ORD05', productId: 2, quantity: 1, status: 'completed' }
];


// Mảng kết quả cuối cùng
const completedOrderDetails = [];


// Duyệt từng order trong orders
for (const order of orders) {

    // Kiểm tra đơn hàng completed
    if (order.status === 'completed') {

        // Tìm product tương ứng với productId
        const product = products.find(function(productItem) {
            return productItem.id === order.productId;
        });

        // Tính tổng tiền
        const tongTien = product.price * order.quantity;

        // Tạo object mới đúng format đề bài
        const newOrder = {
            idDonHang: order.orderId,
            tenSanpham: product.name,
            tongTien: tongTien
        };

        // Thêm vào mảng kết quả
        completedOrderDetails.push(newOrder);
    }
}


// In kết quả
console.log(completedOrderDetails);