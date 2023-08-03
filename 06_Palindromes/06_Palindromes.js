function isValidDate(date){
    if(maxDaysInMonth(date)){
        let split = date.split("/");
        if ((parseInt(split[2])>999) && (parseInt(split[2])<=9999)){
            return true;
        }
    }
    return false
}

function maxDaysInMonth(date){
    if (date.includes("/")){
        let split = date.split("/");
        if(split[1]>"0" && split[1]<"13"){
            if (split[1] === "02"){
                return (parseInt(split[0])<30);
            }else if ((split[1] === "01") || (split[1] === "03") || (split[1] === "05") || (split[1] === "07") || (split[1] === "08")  || (split[1] === "10") || (split[1] === "12")){
                return (parseInt(split[0])<32);
            }else{
                return (parseInt(split[0])<31);
            }
        }
    }
    return false
}

function isPalindrome(str){
    for (let i=0; i<=str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return "Ce n'est pas un palindrome";
        }
    }
    return "C'est un palindrome";
}

function isDatePalindrome(date){
    if(isValidDate(date)){
        let noSlashDate = date.replace('/','');
        return isPalindrome(noSlashDate)
    }
    return false
}

function getNextPalindromes(x){
    let today = new Date();
    let y = today.getFullYear();
    let count = 0;

    for (y; count<x; y++){
        let splitYear = y.toString().split("");
        let m = `${splitYear[1]}${splitYear[0]}`;
        let d = `${splitYear[3]}${splitYear[2]}`;
        let newToday = `${d}/${m}/${y}`;
        if (isDatePalindrome(newToday)){
            console.log(newToday);
            count++;
        }
    }
}


//console.log(isPalindrome('particcitrap'))
//console.log(isDatePalindrome('21/01/1012'))
// 12/07/2023

getNextPalindromes(8)