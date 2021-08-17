//1//
// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
// function printLong(first,last){
//     if(first.length>last.length){
//         return first;
//     }
//     return last;
//     }
// let result=printLong(firstName,lastName);
// console.log(result);
//2//
// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
// function printA(first){
//     if(first.indexOf("a")>-1){
//         return true
//     }
//     return false
// }
// let result=printA(firstName)
// console.log(result);
// function printApi(last){
//     if(last.indexOf("api")>-1){
//         return true
//     }
//     return false
// }
// let result1=printApi(lastName)
// console.log(result1);
//3//
// let fullName=prompt("enter full name");
// function printLengthString(string){
//     console.log(string.length);
// }
// let result=printLengthString(fullName);
// let fullName=prompt("enter full name");
// function printSpaceString(string){
//     if(string.indexOf(" ")>-1){
//     return true
//     }
//     return false
// }
// let result=printSpaceString(fullName);
// console.log(result);
// let fullName=prompt("enter full name");
// function printFirstHalfName(first){
//   return first.substring(0,first.indexOf(" "))  
// }
// let result=printFirstHalfName(fullName);
// console.log(result);
// function printSecondHalfName(last){
//    return last.substring(last.indexOf(" ")+1)
// }
// let result1=printSecondHalfName(fullName);
// console.log(result1);
//4//
// let str=prompt("enter string");
// function printLong(string){
//     if(string.length>5){
//         return ("long");
//     }
//     return ("short");
//     }
// let result=printLong(str);
// console.log(result);
//5//
// let state=prompt("enter country");
// function printLong(string){
//     if(string.length<3){
//         return ("yes");
//     }
//     return ("no");
//     }
// let result=printLong(state);
// console.log(result);
//6//
// let str=prompt("enter string");
// let char=prompt("enter char")
// function printStrChar(string,character){
//     if(string.length>6){
//         return string
//     }
//     return string.indexOf(character)
//     }
// let result=printStrChar(str);
// console.log(result);
//7//
// let str=prompt("enter string");
// let char=prompt("enter char");
// function getstringChar(string,character){
//     if(string.indexOf(character)>-1){
//     return string.indexOf(character)
//     }
//     return string    
// }
// let result=getstringChar(str,char);
// console.log(result);
//8//
// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
//9//
// let firstName=prompt("enter a name");
// let lastName=prompt("enter last name");
// function getFirstName(first){
//     return first.substring(0,1);
// }
// let result=getFirstName(firstName);
// console.log(`${result}. ${lastName.toUpperCase()}`);
// let lastName1=prompt("enter last name 1");
// let lastName2=prompt("enter last name 2");
// function printLongLastName(last1,last2){
//     if(last1.length>last2.length){
//         console.log(last2.toLowerCase()); 
//         return last1
//     }
//     console.log(last1.toLowerCase()); 
//     return last2      
//     }  
// let result=printLongLastName(lastName1,lastName2);
// console.log(result);
//10//
// let firstName=prompt("enter first name");
// let char=prompt("enter char");
// function getNameChar(name,character){
//     if(name.indexOf(character)>-1){
//         return name
//     }
//     return ("not exist")
// }
// let result=getNameChar(firstName,char);
// console.log(result);