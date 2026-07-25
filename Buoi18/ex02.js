//Object
/*
* dict / hashmap
* {
*   key 1: value,
*   key 2: value
* }
* array
* */
const student = {
    name: 'tran van a',
    age: 20,
    address: 'Ha Noi',
    doHomework: function () {
        // console.log(this.name, 'do homework');
        console.log(`${this.name} is doing homework`)
    }
}



// const student = {
//     name: 'tran van a',
//     age: 20,
//     address: 'Ha Noi',
// }
// console.log(student.name)
// const newStudent = student;
// newStudent.name = 'tran van b';
// console.log(student.name)
// console.log(newStudent)
// console.log(student.name)
