/*
* Dinh nghia ham
* (code trong than ham se chua duoc thuc thi
*
* function showGreeting (title, message) {
*   console.log(title);
*   console.log(message);
* }
*/
//=======================================================
// Tra ve gia tri (Return value)

function sum(a, b) {
    // console.log(a + b); // in ra ket qua nhung khong tra ve gia tri
    return a + b; // tra ve gia tri cua phep tinh a + b
}

const result = sum(10, 20);
console.log(result);


//=================================================================
function tinhDiemTB(diemToan = 0, diemLy = 0, diemHoa = 0) {
    return(diemToan + diemLy + diemHoa) / 3;
}
// Sinh vien 1
const diemToan1 = 8;
const diemLy1 = 7;
const diemHoa1 = 6;
const diemTB1 = tinhDiemTB(diemToan1, diemLy1, diemHoa1);
console.log("Diem TB SV 1: ", diemTB1);

// Sinh vien 3
const diemToan2 = 9;
const diemLy2 = 8;
const diemHoa2 = 7;
const diemTB2 = tinhDiemTB(diemToan2, diemLy2, diemHoa2);
console.log("Diem TB SV 2: ", diemTB2);

// Sinh vien 3
const diemToan3 = 7;
const diemLy3 = 6;
const diemHoa3 = 5;
const diemTB3 = tinhDiemTB(diemToan3, diemLy3);
console.log("Diem TB SV 3: ", diemTB3);

//=================================================
/*
* Goi ham
* (code trong than ham se duoc thuc thi khi ham duoc goi)
*
* showGreeting('Hello', 'Welcome to KhoaJS Pro!');
* */

/*
* Ham co tham so (Parameters)
* showGreeting("Hello"
*
 */
// Tham so mac dinh (Default parameters)
function showGreeting(title = 'Default Title', message = 'Default message') {
    console.log(title);
    console.log(message);
}

// showGreeting();
showGreeting('Hello', 'Welcome to KhoaJS Pro!');

