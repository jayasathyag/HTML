console.log("Welcome to Javascript");//string
console.log("123445678");//number/integer
console.log("56.789");//number/decimal
console.log("true");//boolean
console.log([14, 27, 45, 67, 89, 101]);//Array  
console.log({fname:'jaya', lname:'sathya', age:40, eye:'black'});//JSON
console.table({fname:'jaya', lname:'sathya', age:40, eye:'black'});//JSON
console.error("Custom Sample error");//Error message
console.warn("Custom Sample error");//warning message
//console.clear();//clear message

/*console.time('Timer')
for(i=0;i<10;i++)
{
    console.log(i)
}
console.timeEnd('Timer')*/


const avg = 75;
const grade = avg>=90? "Grade A" :avg>=80? "Grade B" :avg>=70? "Grade C" : "Grade D";
console.log("Grade:", grade);

//Ternary or conditional chain ?:
const age = 16;
const vote = age>=18? "Yes" :"No";
console.log("Eligible to Vote:", vote);

//switch case
let num=4;
switch(num){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;   
   case 3:
        console.log("Three");
        break;
    default:
        console.log("Invalid Number");
        break;     
}

//while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//do while
let table = 2; limit = 10; i=1;
do
{
    console.log(table +"X" +i +" ="+(table*i));
    i++;
}
while(i<=limit);

//for loop
let arr=[];
for(let i=0; i<=100; i++)
{
    arr.push(i);
}
console.log(arr)

//to print even numbers in an array
let arry=[];
for(let i=0; i<=100; i+=2)
{
    arry.push(i);
}
console.log(arry)

//two dimensional array
let nums=[];
for (let i=0; i<3;i++)
{
    nums.push([]);
    for (let j=0; j<3; j++)
    {
        nums[i].push(j)
    }
}
console.table(nums);
console.log(nums);

//for of loop
let names = ['sathya', 'naren', 'vihaan','navien']
for(let Name of names){
    console.log(Name)
}

//for in loop
let person ={
    name:"sathya",
    age:40,
    mobile:9886788990,
    city:"Bangalore"
};
for(let prop in person){
    console.log(prop+ ":" + person[prop]);
    console.log(person.name);
}

//Object.keys()
let arr_keys = Object.keys(person);
console.table(arr_keys);

//Object.values
let arr_values = Object.values(person);
console.table(arr_values);

//break statements
for(let i=0;i<=10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}

//continue statements
for(let i=0;i<=10;i++)
{    
    if(i==5){
        continue;
    }
    console.log(i);
}

//skip even numbers
for(let i=0;i<=10;i++)
{    
    if(i%2==0){
        continue;
    }
    console.log(i);
}




