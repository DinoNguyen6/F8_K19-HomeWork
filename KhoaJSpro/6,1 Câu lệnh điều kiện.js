function determineStudentCategory(diem, cm) {
    switch (true) {
        case (diem >= 90 && cm >= 0.5):
            return "Xuất sắc";
        case (diem >= 75 && cm >= 0.7):
            return "Giỏi";
        case (diem >= 60 && cm >= 0.6):
            return "Khá";
        case (diem < 60 || cm < 0.4):
            return "Trung bình";
        case cm < 0.5:
            return "Cần cải thiện";
    }
}
console.log(determineStudentCategory(92, 0.85)); // Xuất sắc
console.log(determineStudentCategory(77, 0.7));  // Giỏi
console.log(determineStudentCategory(65, 0.6));  // Khá
console.log(determineStudentCategory(88, 0.3));  // Trung bình
console.log(determineStudentCategory(70, 0.4));  // Cần cải thiện


