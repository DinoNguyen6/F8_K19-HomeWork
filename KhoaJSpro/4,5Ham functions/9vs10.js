let  person = {};

if (typeof person === "object" &&
    person !== null &&
    !Array.isArray(person)) {
    console.log("person is an object");
} else {
    console.log("not an object");
}


// Tóm tắt
// Mô tả vấn đề: Trong JavaScript, typeof cho null, object, và array đều trả về "object"; và typeof cho number và NaN đều trả về "number" gây khó khăn trong việc phân biệt chúng.
//
// Các kiểu dữ liệu:
//
// String: Chuỗi ký tự, kiểm tra bằng typeof.
// Number: Số, kiểm tra bằng typeof, cần loại trừ NaN.
// BigInt: Số nguyên lớn, kiểm tra bằng typeof.
// Boolean: Giá trị true hoặc false, kiểm tra bằng typeof.
// Null: “Không có gì”, phải so sánh trực tiếp với null do typeof trả về "object".
// Undefined: Biến chưa được gán giá trị, kiểm tra bằng typeof.
// Symbol: Định danh duy nhất, xác nhận bằng typeof.
// Object: Cặp khóa và giá trị, cần kiểm tra không phải null và không phải Array.
// Array: Danh sách giá trị, dùng Array.isArray() hoặc instanceof Array để kiểm tra.
// Function: Thực hiện tác vụ và giúp tái sử dụng code, kiểm tra bằng typeof.
// 4 trường hợp cần ghi nhớ cách kiểm tra:
//
// Number: Cần loại trừ NaN.
// Null: So sánh trực tiếp với null.
// Object: Nhớ loại trừ Array và Null.
// Array: Sử dụng Array.isArray() hoặc instanceof Array.