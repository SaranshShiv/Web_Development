Fullname= "saransh shivhare";

const student = {
    name: "SARANSH SHIVHARE",
    age: 21,
    course: "btech",
    branch: "cs",
    semester: 5,
    phoneNo: 9264922635
}
// FOR IN LOOP
for(let key in student) {
    console.log("key is "+key+" and value is "+student[key]);
}

// FOR OF LOOP
for(let val of Fullname) {
    console.log(val);
}



//question 1. print all even no. 1 to 100;

for(let i=1;i<+100;i++) {
    if(i%2==0) {
        console.log(i);
    }
}

//ques 2.  create a game where we start with any random , ask the user to keep guessing the game number until you get it correct.

let number=69;
let n;
prompt("GAME : guess the correct number.")
while(n!=69) {
   n= prompt("oops wrong guess try again:");
}
alert("HORRAYYY!!! RIGHT ANSWER...!!");

// ques 3. prompt the user to enter full name generate a username as @fullname and ending with the length of their full name.

let name= prompt("ENTER YOUR FULL NAME : ");
console.log(`USERNAME IS : @${name}${name.length} `);

