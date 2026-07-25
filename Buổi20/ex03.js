function quickSort(arr) {

    // nếu mảng <= 1 phần tử
    // thì không cần sort nữa
    if (arr.length <= 1) {
        return arr
    }

    // chọn pivot
    const pivot = arr[arr.length - 1]

    const left = []
    const right = []

    // duyệt mảng
    for (let i = 0; i < arr.length - 1; i++) {

        // nhỏ hơn pivot
        if (arr[i] < pivot) {
            left.push(arr[i])
        }

        // lớn hơn hoặc bằng pivot
        else {
            right.push(arr[i])
        }
    }

    // đệ quy
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ]
}

const numbers = [9, 8, 3, 5, 6, 2, 7]

console.log(quickSort(numbers))