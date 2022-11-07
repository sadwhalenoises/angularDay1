function leapYear(num: number){
    if((0 == num % 4) && (0 != num % 100) || (0 == num % 400)){
        console.log(num + " is a leap year!");
    }else {
        console.log(num + " is not a leap year!")
    }
}


leapYear(2024);
leapYear(2022);