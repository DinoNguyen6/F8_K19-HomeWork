// =========================
// DATA
// =========================

const invoiceData = {

    meta: {
        invoiceNo: "WM-20260521-0001",
        saleDate: "2026/05/21",
        currency: "VND",
        paymentMethod: "Cash"
    },

    seller: {
        name: "WinMark 2 Hai Bà Trưng",
        address: "2 Hai BÀ Trưng - Hoàn Kiếm - HN",
        phone: "012345678",
        representative: "Đại diện WinMark"
    },

    customer: {
        name: "Nguyen Van A",
        age: 20,
                                                                                                                                                                                address: "Hà Đông, Hà Nội"
    },

    items: [
        {
            no: 1,
            name: "Ao Thun",
            size: "XL",
            quantity: 1,
            price: 200000
        },

        {
            no: 2,
            name: "Ao Thun",
            size: "XL",
            quantity: 1,
            price: 200000
        }
    ],

// 5. Chương trình ưu đãi / Giảm giá (Promotion & Discount)
    promotion: {
        description: "Khuyen mai 50% chi KH than thiet",
        discountPercent: 50
    }
};
// Sử dụng DOM để render ra file hóa đơn sau (HTML)


// =========================
// FORMAT MONEY
// =========================

function formatCurrency(number) {
    return number.toLocaleString("vi-VN") + " đ";
}


// =========================
// CALCULATE
// =========================

const subTotal = invoiceData.items.reduce(function(total, item) {

    return total + (item.quantity * item.price);

}, 0);


const discount =
    subTotal * invoiceData.promotion.discountPercent / 100;


const grandTotal = subTotal - discount;


// =========================
// RENDER ITEMS
// =========================

const itemRows = invoiceData.items.map(function(item) {

    const total = item.quantity * item.price;

    return `
    <tr>
      <td>${item.no}</td>
      <td>${item.name}</td>
      <td>${item.size}</td>
      <td>${item.quantity}</td>
      <td>${formatCurrency(item.price)}</td>
      <td>${formatCurrency(total)}</td>
    </tr>
  `;

}).join("");


// =========================
// TEMPLATE
// =========================

const html = `

  <!-- HEADER -->
  <div class="header">

    <div class="brand">
      <h1>${invoiceData.seller.name}</h1>

      <p>
        Cung cấp sản phẩm thời trang cao cấp & thiết kế độc quyền
      </p>
    </div>

    <div class="invoice-info">

      <h3>HÓA ĐƠN BÁN LẺ</h3>

      <p>
        <strong>Mã số:</strong>
        ${invoiceData.meta.invoiceNo}
      </p>

      <p>
        <strong>Ngày bán:</strong>
        ${invoiceData.meta.saleDate}
      </p>

    </div>

  </div>


  <!-- INFO -->
  <div class="info-section">

    <!-- SELLER -->
    <div class="box">

        <h4>ĐƠN VỊ BÁN HÀNG (SELLER)</h4>

        <p>
            <strong>${invoiceData.seller.name}</strong>
        </p>
    
        <p>
            <i class="fa-solid fa-location-dot info-icon"></i>
            ${invoiceData.seller.address}
        </p>
    
        <p>
            <i class="fa-solid fa-phone info-icon"></i>
            ${invoiceData.seller.phone}
        </p>
    </div>



    <!-- CUSTOMER -->
    <div class="box">

        <h4>KHÁCH HÀNG (BUYER)</h4>
    
        <p>
            <strong>${invoiceData.customer.name}</strong>
        </p>
    
        <p>
            <i class="fa-solid fa-user info-icon"></i>
            Tuổi: ${invoiceData.customer.age}
        </p>
    
        <p>
            <i class="fa-solid fa-location-dot info-icon"></i>
            ${invoiceData.customer.address}
        </p>

    </div>
</div>

  <!-- TABLE -->
  <div class="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>STT</th>
          <th>TÊN SẢN PHẨM</th>
          <th>SIZE</th>
          <th>SL</th>
          <th>ĐƠN GIÁ</th>
          <th>THÀNH TIỀN</th>
        </tr>
      </thead>

      <tbody>
        ${itemRows}
      </tbody>

    </table>

  </div>


  <!-- SUMMARY -->
  <div class="summary">

    <div class="promotion-box">

        <div class="promotion-content">
            <div class="promo-icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>
        <div>
            <h4>KHUYẾN MÃI / TRỢ GIÁ</h4>
            <p>${invoiceData.promotion.description}</p>
        </div>
    </div>

  </div>


    <div class="total-box">

      <div class="total-item">
        <span>Cộng tiền hàng:</span>

        <strong>
          ${formatCurrency(subTotal)}
        </strong>
      </div>


      <div class="total-item">
        <span>Khấu trừ giảm giá:</span>

        <strong>
          - ${formatCurrency(discount)}
        </strong>
      </div>


      <div class="total-item grand-total">
        <span>Tổng thanh toán:</span>

        <span>
          ${formatCurrency(grandTotal)}
        </span>
      </div>

    </div>

  </div>

`;


// =========================
// RENDER DOM
// =========================

const invoice = document.getElementById("invoice");

invoice.innerHTML = html;