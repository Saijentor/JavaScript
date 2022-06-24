var input = prompt("Введите текст в котором:\nОт 5 до 64 символов; \nЕсть хотя бы одна буква в верхнем регистре, цифра, символ @.");

function validation (input){
    let err1 = "Необходима длинна от 5 символов";
    let err2 = "Необходима длинна менее 64 символов";
    let err3 = "Должны быть буквы";
    let err4 = "Должна быть хотя бы одна буква в верхнем регистре";
    let err5 = "Должна быть хотя бы одна цифра";
    let err6 = "Должна быть хотя бы одна @";
    let arr = [err1,err2,err3,err4,err5,err6];

    if (input.length != 0){
        if (input.length > 5){
            arr.splice(arr.indexOf(err1),1);
        }if (input.length < 64 && input.length > 0){
            arr.splice(arr.indexOf(err2),1);
        }if (input.match(/[a-zA-Z]/)){
            arr.splice(arr.indexOf(err3),1);
        }if (input.match(/[A-Z]/)){
            arr.splice(arr.indexOf(err4),1);
        }if (input.match(/[0-9]/)){
            arr.splice(arr.indexOf(err5),1);
        }if (input.match(/[@]/)){
            arr.splice(arr.indexOf(err6),1);
        }if (arr.length == 0){
            alert('Строка корректна '+input)
        }else{
        alert('Не хватает:\n'+arr.join('\n'))
        }
    }else{
        alert('Строка не должна быть пустой\n'+(arr.join('\n')))
    }
}
validation(input)

//Or


var mail = prompt("Enter your email:\nEmail must contain more than 4 and less than 65 number of symbols.\nEmail must contain Upper case, Lower case, @ symbol.");

function val (mail){
    const specialChars = /[@]/;
    const UpperCase = /[A-Z]/;
    const LowerCase = /[a-z]/;
    const Number = /[0-9]/;

		var errors = '';
        if (mail.length == 0){
             errors += '\nEmail cannot be empty!'
        } if (mail.length < 5){
             errors += '\nNumber of symbols is less than 5!'
        } if (mail.length > 64){
             errors += '\nNumber of symbols is more than 64!'
        } if (specialChars.test(mail) == false){
             errors += '\n@ symbol absent!'
        } if (UpperCase.test(mail) == false){
             errors += '\nUpper case symbol absent!'
        } if (LowerCase.test(mail) == false){
            errors += '\nLower case symbol absent!'
        } if (Number.test(mail) == false){
            errors += '\nNumber absent!'
        } if (errors == ''){
		alert ('Email is valid!')
		} else{
        alert(errors);
    }
}
val (mail);
        
