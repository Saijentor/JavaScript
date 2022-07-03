// 1. Create a variable “item_1”
// 2. Assign the number 5 to the item_1 variable.
    let item_1 = 5;

// 3. Print item_1 to the console.
    console.log(item_1)

// 4. Create a variable "item_2"
// 5. Assign the number 3 to the item_2 variable.
    let item_2 = 3;

// 6. Print item_2 to the console.
    console.log(item_2)

// 7. Create variable "item_3"
// 8. Assign item_3 to the addition of item_1 and item_2.
    let item_3 = item_1 + item_2;

// 9. Print item_3 to the console.
    console.log(item_3)

// 10. Create variable "item_4"
// 11. Assign the string “Yolochka” to item_4.
    let item_4 = "Yolochka";

// 12. Print item_4 to the console.
    console.log(item_4)

// 13. Print the addition of item_3 and item_4 to the console.
    console.log(item_3 + item_4)

// 14. Print the multiplication of item_3 and item_4 to the console.
    console.log(item_3 * item_4)

// 15. Create a variable "item_5".
// 16. Assign item_5 to item_3.
    let item_5 = item_3;

// 17. Create variable item_6.
// 19. Set item_6 to 15.
    let item_6 = 15;

// 18. Create variable item_6_type.
// 20. Assign item_6_type variable the type of item_6 variable.
    let item_6_type = typeof item_6;

// 21. Print item_6 data type to console as —— “item_6 == ” item_6, “item_6_type == ” item_6_type ——.
    console.log("Item_6 ==",item_6,"|","Item_6_type ==",item_6_type)

// 22. Create variable item_7 and convert item_6 to String in it.
    let item_7 = String(item_6);

// 23. Create variable item_7_type.
// 24. Assign item_7_type variable the type of item_7 variable.
    let item_7_type = typeof item_7;

// 25. Print item_7 data type to console as —— “item_7 == ” item_7, “item_7_type == ” item_7_type ——.
    console.log("Item_7 ==",item_7,"|","Item_7_type ==",item_7_type)

// 26. Create a variable "age_1" and set it to 10.
    let age_1 = 10;

// 27. Create variable "age_2" and set it to 18.
    let age_2 = 18;

// 28. Create variable "age_3" and set it to 60.
    let age_3 = 60;

//----------------------------------------------

if (age_1 < age_2 && age_1 > 0){
    console.log("You don't have access cause your age is " + age_1 + " It's less then!")
}else if (age_1 >= age_2 && age_1 < age_3){
    console.log("Welcome !")
}else if (age_1 > age_3){
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}

//---------------With an asterisk -------------

let age = prompt("How old are you?");
function check (age){
    if (isNaN(age)){
        alert("ERROR! IT'S NOT A NUMBER");
    }else {
        if (age < 18 && age > 0){
            alert("You don't have access cause your age is " + age + " It's less then!");
        }else if (age >= 18 && age < 60){
            alert("Welcome !");
        }else if (age > 60){
            alert("Keep calm and look Culture channel");
        } else {
            alert("Technical work");
        }
    }
}
check(age) 
