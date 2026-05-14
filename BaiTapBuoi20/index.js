// Bài 1:
const numbers = [9, 8, 3, 5, 6, 2, 7, 9];

function findSecondLargest(arr) {

    // -Infinity nhỏ hơn mọi số
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const number of arr) {

        if (number > max) {
            secondMax = max;
            max = number;
        }

        else if (number > secondMax && number !== max) {
            secondMax = number;
        }
    }

    return secondMax;
}

console.log('Số lớn thứ hai trong mảng là:', findSecondLargest(numbers));

//=========================================================================================

// Bài 2:
const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

// gộp hai mảng lại thành một mảng duy nhất.
const mergedArray = [...classA, ...classB];

console.log('Mảng sau khi gộp:', mergedArray);  // [15, 2, 8, 10, 8, 11, 2, 5, 9]

// Loại bỏ phần tử trùng lặp bằng Map
const uniqueMap = new Map();

for (const id of mergedArray) {
    uniqueMap.set(id, true);
}

const uniqueArray = [];

for (const key of uniqueMap.keys()) {
    uniqueArray.push(key);
}

console.log('Mảng không trùng:', uniqueArray);   // [15, 2, 8, 10, 11, 5, 9]

// Quick Sort
function quickSort(arr) {

    // Điều kiện dừng
    if (arr.length <= 1) return arr;

    // Chọn pivot
    const pivot = arr[arr.length - 1];

    const left = [];
    const right = [];

    // Chia mảng
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Đệ quy
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}

const sortedArray = quickSort(uniqueArray);

console.log('Mảng sau khi sắp xếp:', sortedArray); // [2, 5, 8, 9, 10, 11, 15]