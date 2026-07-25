// Hàm khai báo Declaration function: là cách truyền thống để định nghĩa một hàm trong JS.
//hàm này cí thể được gọi trước khi nó được định nghĩa
function tenHam() {
    // Khối lệnh
}
//ví dụ:
function tinhTong(a, b) {
    return a + b;
}
console.log(tinhTong(5, 3));
// => Khuyến nghị: Nên gọi hàm sau khi khai báo giúp code trở nên dễ dàng đọc - hiểu
// hơn, nhất là khi chúng ta mới học JS

//====================================================================================

//Hàm biểu thức (Function expression): là một cách để định nghĩa hàm thông qua việc gán hàm
//cho một biến. Hàm này chỉ có thể được goij sau khi nó được định nghĩa

//Cú pháp:
const tenHam2 = function(thamso) {
    //Khối lệnh
};

//Ví dụ thực tế:
const tinhHieu2 = function(a, b) {
    return a - b;
}
console.log(tinhHieu2(5, 3))
//=> Lưu ý: Nếu gọi hàm trước khi định nghĩa sẽ xảy ra lỗi: Uncaught ReferenceError: Cannot access 'tinhHieu' before initialization.

//================================================================
//Hàm múi tên (Arrow function) là một cú pháp ngắn gọn được giới thiệu trong ES6, dùng để viết hàm biểu thức một cách ngắn gọn
// hơn. Hàm mũi tên đặc biệt hữu ích khi làm việc với các hàm vô danh và hàm callback.
const tenHam3 = (thamso3) => {
    // Khối lệnh
}
// Ví dụ thực tế:
const tinhTich = (a, b) => {
    return a * b;
}
console.log(tinhTich(5, 3));

// Hoặc dùng return luôn sau dấu mũi tên:
const tinhTich02 = (a, b) => a * b;
console.log(tinhTich02(4, 8));

// Hoặc rút ngắn không cần cặp ngoặc đơn:
const double = n => n * 2;
console.log(double(5));
// Lưu ý: Nếu gọi hàm trước khi định nghĩa sẽ xảy ra lỗi: Uncaught ReferenceError: Cannot access 'double' before initialization.

//=======================================================================================================
/**
 * Khi nào thì sử dụng loại hàm nào?
 *    - Hàm khai báo (Declaration function): Khi cần sử dụng được hàm trước khi khai báo, hoặc
 *      đơn giản muốn dùng cách truyền thống
 *
 *    - Hàm biểu thức (Function expression): Khi muốn chỉ gọi được hàm sau khi khai báo, hoặc khi
 *      khai báo, hoặc khi hàm được sử dụng như một giá trị (ví dụ, truyền hàm như một tham số)
 *
 *    - Hàm mũi tên (Arrow function): Khi cần một cú pháp ngắn gọn hoặc khi làm việc với this
 *      trong một ngữ cảnh nhất định (vì hàm mũi tên không có this riêng của nó).
 * */