let firstName="SARANSH";
let lastName="SHIVHARE";

let age=21;

const student = {
    name: "SARANSH SHIVHARE",
    age: 21,
    course: "btech",
    branch: "cs",
    semester: 5,
    phoneNo: 9264922635
}
//alert("HELLO "+student.name+" WELCOME TO JAVASCRIPT LEARNING , WISH YOU A GREAT FUTURE AHEAD!");

 let number= prompt("ENTER A NUMBER: ");
if(number%5==0) {
    alert("THE NUMBER IS DIVISIBLE BY 5");
}else{
    console.log("THE NUMBER IS NOT DIVISIBLE BY 5");
}

 let marks= prompt("ENTER YOUR MARKS: ");
if(marks>=90&&marks<=100){
    console.log("YOUR GRADE IS A+");
}else if(marks>=70&&marks<90){
    console.log("YOUR GRADE IS B");
}else if(marks>=60&&marks<70){
    console.log("YOUR GRADE IS C");
}else if(marks>=50&&marks<60){
    console.log("YOUR GRADE IS D");
}else if(marks>=0&&marks<50){
    console.log("YOUR GRADE IS F");
    };
