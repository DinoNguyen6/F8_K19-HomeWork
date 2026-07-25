// find - > tim kiem phan tu theo 1 dieu kien nao day
// const students = [
//     {id: 3, name: 'test 001', age: 30},
//     {id: 2, name: 'test 002', age: 20}
// ]
// Tim hv co tuoi = 30
// find -> tim kiem mot phan tu theo 1 dkien
// ko tim thay -> undefined
// const student = students.find((student, index) => student.age > 15)
//
// console.log(student)



// filter: lọc lấy ra nhiều phần tử
// const students3 = [
//     {id: 3, name: 'test 002', age: 30},
//     {id: 2, name: 'test 003', age: 20}
//
// ]
// for (const student of students3) {
//     student.isComfirmed = true;
// }console.log(students3)

//====================================
// const studens = [
//     {id: 3, name: 'test 001', age: 20, score: 8},
//     {id: 2, name: 'test 002', age: 30, score: 6},
//     {id: 4, name: 'test 003', age: 50, score: 9},
// ]
// // 1. Lọc nhóm >= 7 và gắn rank 'very good'
// const veryGoodStudents = students
//     .filter(s => s.score >= 7)
//     .map(s => ({ ...s, rank: 'very good' }));
//
// // 2. Lọc nhóm < 7 và gắn rank 'good'
// const goodStudents = students
//     .filter(s => s.score < 7)
//     .map(s => ({ ...s, rank: 'good' }));
//
// // 3. Gộp 2 danh sách lại thành kết quả cuối cùng
// const result = [...veryGoodStudents, ...goodStudents];
//
// console.log(result);


//==================================================================
// const sortedCompanies = [
//     {id: 3, name: 'fpt'},
//     {id: 5, name: 'viettel'},
//     {id: 6, name: 'f8'},
//     {id: 8, name: 'vnpt'},
// ];
//
// const employees = [
//     {id: 1, name: 'tran van a', companyId: 3 },
//     {id: 3, name: 'tran van b', companyId: 3 },
//     {id: 4, name: 'tran van c', companyId: 5 },
//     {id: 6, name: 'tran van d', companyId: 8 },
//     {id: 8, name: 'tran van e', companyId: 8 },
// ];
//
// // Bước 1: Tạo Map để tra cứu nhanh theo ID công ty
// const companyMap = sortedCompanies.reduce((map, company) => {
//     map[company.id] = company.name;
//     return map;
// }, {});
// // companyMap lúc này có dạng: { 3: 'fpt', 5: 'viettel', 6: 'f8', 8: 'vnpt' }
//
// // Bước 2: Dùng .map() để tạo mảng mới theo yêu cầu cấu trúc {id, name, companyName}
// const employeesWithCompanyNameC1 = employees.map(emp => ({
//     id: emp.id,
//     name: emp.name,
//     companyName: companyMap[emp.companyId] || 'Unknown' // Tránh lỗi nếu không tìm thấy công ty
// }));
//
// console.log("--- Kết quả Cách 1 (Hash Join) ---");
// console.log(employeesWithCompanyNameC1);
const a = 1;
console.log(1 + 3 - 3  - 3 + 2 + 2)
