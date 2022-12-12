const currentDate = new Date();
console.log(currentDate);

const birthDate = new Date(2001, 9, 4);
console.log(birthDate);

const isLate = currentDate > birthDate;
console.log(isLate);

const day = birthDate.getDay();
console.log(day);

const month = birthDate.getMonth() + 1;
console.log(month);

const year = birthDate.getFullYear();
console.log(year);
