const cleanName = (fullName, keyWord) => {
    let cleanedName = fullName.toLowerCase().trim();
    return cleanedName.includes(keyWord.toLowerCase());
}

console.log(cleanName('   NGUYEN Van An   ', 'An')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // Mong đợi: false