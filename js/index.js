        // console.log("hello");
        // console.log("welcome to javascript");
    //   js has 2 types of comments single line and multiline
        //  console.warn("Warning");
        // console.error("Error message");
// variable ->named memory location act like a container

// let(use in short location) const(use in long location) 
// string(alpha-numeric), number, boolean
// let word="Webskitters";
// let num="-932.64";
// console.log(word, typeof(word));
// console.log(num, typeof(num));
// variable should be in uppercase
// it should not be starts with numbers
// it only use $ and _ for special character
// 
// const result=true;
// console.log(result, typeof(result));


// array ->collection of similar type of multiple data
// let day1="Monday";
// let day2="Tuesday";
// let day3="Wednesday";
// let day4="Thursday";
// let day5="Friday";

// const dayArray=["Monday","Tuesday", "Wednesday",  "Thursday", "Friday"]

// const numArr=[0, -1, -5, 5, 8]

// console.log(dayArray[2],dayArray[4]);

// document.getElementById("text").innerHTML=`
// <h2>WeekDays</h2>
// <p>${dayArray[0]}</p>
// <p>${dayArray[1]}</p>
// <p>${dayArray[2]}</p>
// <p>${dayArray[3]}</p>
// <p>${dayArray[4]}</p>
// `

// alert("message");

// let response=confirm("Are you sure?")
// document.getElementById("text").innerHTML=`<h3>${response}</h3>`

// let fullname=prompt("Enter your fullname");
// console.log(typeof(fullname));
// console.log(fullname);

// document.getElementById("text").innerHTML=`<h3>${fullname}</h3>`
// let x=prompt("Enter your age");
// let age=Number(x);
// console.log(typeof(age));
// console.log(age);

// let age=Number(prompt("Enter your age"));
// console.log(typeof(age));
// console.log(age);

// operator
// +, -, *, /, %, **
// let num1=10;
// let num2=2;

// let div=num1/num2;
// console.log(div);

// let rem=num1%num2;
// console.log(rem);

// let pow=num1**num2;
// console.log(pow);


// let num1=Number(prompt("Enter a no"));
// console.log(typeof(num1));
// console.log(num1);
// let num2=Number(prompt("Enter another no"));
// console.log(typeof(num2));
// console.log(num2);
// let add=num1+num2;
// console.log(add);
// let sub=num1-num2;
// console.log(sub);

// conditional statement ->if-else, switch

// if-else
/* if(condition)
    {
        statement;
    }
    else{
        statement;
    }
 */

    // conditional operator > < == === != <= >=

    // let num1=70;
    // let num2=30;
    // if(num1>num2)
    //     {
    //         console.log(num1, "is greater than", num2);
    //     }
    // else{
    //     console.log(num2, "is greater than", num1);
    // }

    // let num=0;
    
    // if(num>0)
    //     {
    //         console.log(num, "is positive");
    //     }
    // else if(num<0){
    //     console.log(num, "is negative");
    // }
    // else{
    //     console.log("they are equal");
    // }

    // let num=70;
    // if(num>=80){
    //     console.log("Grade A");
    // }
    // else if(num>=60){
    //     console.log("Grade B");
    // }
    // else if(num>=40){
    //     console.log("Grade C");
    // }
    // else{
    //     console.log("Fail");
    // }


    function show(){
        console.log("Hello Everyone");
        console.log("Good Evening");
        console.log("Have a Nice Day");
    }
    // show();
    // show();
    // show()

    function sum(a,b,c)
    {
        let sum_result=a+b+c;
        console.log(sum_result);
        return"done"
    }

    let msg1=sum(10,20,32)
    console.log(msg1);
    let msg2=sum(-1,-5,-8)
    console.log(msg2);