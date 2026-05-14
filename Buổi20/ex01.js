const numbers = [9, 8, 3, 5, 6, 2, 7];
// Sắp xếp  mảng numbers theo thứ tự tăng dần

const length = numbers.length;

for (let i = 0; i < length; i++) {
    for (let j = o; j < length - 1 - i; j++) {
        // i = o -> j = 6
        //i = 1 -> i = 5
        //j 0 -> curNumber = 9, nextNumber = 8 -> swap -> [8, 9, 3, 5, 6, 2, 7]
        const curNumber = numbers[j];
        const nextNumber = numbers[j + 1];

        if  (curNumber > nextNumber) {
            numbers[j] = nextNumber;
            numbers[j + 1] = curNumber;
        }

    }
}
console.log(numbers);
//0(n^2)

