//Bài tập 1:

const student = {
    name: 'hoang',
    parent: {
        name: 'bo hoang'
    }
}

const mentor = { ...student }

mentor.name = 'bang'
mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)


/**
 * Câu hỏi:
 *
 * 1. student.name có bị đổi không?
 *      - student.name không bị thay đổi
 *
 * 2. student.parent.name có bị đổi không?
 *    - student.parent.name bị thay đổi
 * 3. Giải thích vì sao?
 *    - student.name không bị thay đổi, vì biến mentor được gán với object student bằng toán tử {...student} -> shallow copy -> tham chiếu đến địa chỉ ô nhớ khác -> nên khi object mentor thay đổi giá trị của
 *      thuộc tính (mentor.name = "bang") -> thì các thuộc tính của object student (student.name) không bị thay đổi.
 *
 *    - student.parent.name có bị thay đổi vì object mentor được thực hiện shallow copy từ object student. Bên trong student có một object parent -> nên khi thực hiện shallow copy -> object parent vẫn tham
 *      chiếu đến cùng một địa chỉ ô nhớ -> cho nên khi thay đổi mentor.parent.name -> student.parent.name bị thay đổi theo.
 *
 */


//======================================================================================================================

//Bài tập 2:

// const student = {
//     name: 'hoang',
//     parent: {
//         name: 'bo hoang'
//     }
// }
//
// const mentor = JSON.parse(JSON.stringify(student))
//
// mentor.parent.name = 'bo bang'
//
// console.log(student)
// console.log(mentor)


/**
 * Câu hỏi:
 *
 *  1. student.parent.name có bị ảnh hưởng không?
 *      - student.parent.name không bị ảnh hưởng
 *
 *  2. Vì sao cách này khác spread (const mentor = { ...student })
 *      - Cách này khác với spread vì JSON.parse(JSON.stringify(student)) tạo ra một bản sao sâu (deep copy) của
 *        object student. Khi sử dụng JSON.stringify, toàn bộ cấu trúc của object student được chuyển đổi thành một
 *        chuỗi JSON, và sau đó JSON.parse sẽ tạo ra một object mới hoàn toàn độc lập với object gốc. Do đó, khi thay
 *        đổi mentor.parent.name, student.parent.name không bị ảnh hưởng vì chúng là hai object hoàn toàn riêng biệt trong bộ nhớ.
 *
 */

//======================================================================================================================

//Bài tập 3:

const students = [
    { name: 'a' },
    { name: 'b' }
]

const newStudents = [...students]

newStudents[0].name = 'z'

console.log(students)
console.log(newStudents)


/**
 * Câu hỏi:
 *
 * 1. Mảng có bị thay đổi không?
 *     - Mảng students có bị thay đổi. Vì khi sử dụng spread operator để tạo ra newStudents, chúng ta chỉ tạo ra một
 *     bản sao nông (shallow copy) của mảng students. Điều này có nghĩa là newStudents và students vẫn tham chiếu đến
 *     cùng một địa chỉ ô nhớ chứa các đối tượng bên trong mảng. Do đó, khi chúng ta thay đổi thuộc tính name của phần
 *     tử đầu tiên trong newStudents, nó cũng ảnh hưởng đến phần tử tương ứng trong students vì cả hai đều tham chiếu
 *     đến cùng một đối tượng.
 *
 * 2. Phần tử bên trong có bị không?
 *    - Phần tử bên trong mảng students có bị thay đổi. Vì cả newStudents và students đều tham chiếu đến cùng một đối
 *    tượng trong bộ nhớ. Khi chúng ta thay đổi thuộc tính name của phần tử đầu tiên trong newStudents, nó cũng thay đổi
 *    thuộc tính name của phần tử tương ứng trong students.
 *
 */

//====================================================================================================================

//Bài tập 4:

const user = {
    name: 'hoang',
    address: {
        city: 'HN',
        location: {
            lat: 123
        }
    }
}

const newUser = { ...user }

newUser.address.location.lat = 999

console.log(user.address.location.lat)

/**
 * Câu hỏi: Kết quả là bao nhiêu? Vì sao?
 *   - Kết quả là 999. Vì khi sử dụng spread operator để tạo ra newUser, chúng ta chỉ tạo ra một bản sao nông
 *   (shallow copy) của object user. Điều này có nghĩa là newUser và user vẫn tham chiếu đến cùng một địa chỉ ô nhớ
 *   chứa đối tượng. Do đó, khi chúng ta thay đổi thuộc tính lat của location trong newUser, nó cũng ảnh hưởng
 *   đến thuộc tính lat của location trong user vì cả hai đều tham chiếu đến cùng một đối tượng.
 */