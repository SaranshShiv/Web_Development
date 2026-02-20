// ques 1. [85,97,44,37,76,60] find average marks of entire class in this array.

let marks= [85,97,44,37,76,60];
let total=0,count=0;
for(let i of marks) {
    total+=i;
    count++;
}
console.log(`AVERAGE SCORE IS : ${total/count}`);

//ques 2 price=[250,645,300,900,50] all have 10% offer change array to store price after offer

let price=[250,645,300,900,50];
for(let i in price) {
    price[i]*=(0.9);
}
console.log(price);

let details =["Saransh shivhare" ,21,"btech"];
details.push("cs");
console.log("details after push :"+details);
details.pop()
console.log("details after pop :"+details);
 let concat =details.concat(marks)
console.log("details after concat :"+concat);

marks.slice(2,5)

marks.splice(2,2,101);
console.log("details after splice :"+marks);

//ques 3. create array to store company . 1)remove first company from the array.       2)remove uber and add ola in its place.     3)add amazon at the end.

let companies =["Bloomberd","Microsoft","Uber","Google","IBM","Netfilix"];
console.log(companies);

companies.shift()
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

fullname="saransh SHIVHARE";


//FUNCTIONS

function Greetings() {
    console.log("Hello weelcome to learning functions");
    console.log("bonjour");
}

function sum(a,b) {
    return a+b;
}
Greetings();
const mul =(a,b) =>{
    return a*b;
}



//ques 1  create a funct. that take string as an argument and returns the number of vowels in the string.

function NoOfVowels(a){
    let vowel=0;
    let x= a.toLowerCase();
        for(let i=0;i<a.length;i++) {
            if(x[i]=="a" || x[i]=="e" || x[i]=="i" || x[i]=="o" || x[i]=="u") {
              vowel++;
            }
        }
        console.log(`NO OF VOWELS IN ${a} are ${vowel}`);
}

let countVowel =(a) => {
    let vowel=0;
    let x= a.toLowerCase();
        for(let i=0;i<a.length;i++) {
            if(x[i]=="a" || x[i]=="e" || x[i]=="i" || x[i]=="o" || x[i]=="u") {
              vowel++;
            }
        }
        console.log(`NO OF VOWELS IN ${a} are ${vowel}`);
}