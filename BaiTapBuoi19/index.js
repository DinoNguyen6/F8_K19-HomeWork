const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]
const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]


function getTopRevenueProduct(products, orders) {
    // Lưu doanh thu của từng sản phẩm
    const revenueByProduct = {};

    // Duyệt từng đơn hàng
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        // Duyệt từng sản phẩm trong đơn hàng
        for (let j = 0; j < order.items.length; j++) {
            const item = order.items[j];

            // Tìm thông tin sản phẩm
            const product = products.find(function (p) {
                return p.id === item.productId;
            });

            // Doanh thu của lần bán này
            const revenue = product.price * item.quantity;

            // Nếu chưa có thì khởi tạo
            if (!revenueByProduct[product.id]) {
                revenueByProduct[product.id] = {
                    productName: product.name,
                    revenue: 0
                };
            }

            // Cộng dồn doanh thu
            revenueByProduct[product.id].revenue += revenue;
        }
    }

    // Tìm sản phẩm doanh thu cao nhất
    let topProduct = null;

    for (let productId in revenueByProduct) {
        if (
            topProduct === null ||
            revenueByProduct[productId].revenue > topProduct.revenue
        ) {
            topProduct = revenueByProduct[productId];
        }
    }

    return topProduct;
}

console.log(getTopRevenueProduct(products, orders));