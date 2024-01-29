/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let profession=prompt("Enter Your Profession: children,student,senior citizen,general public ").toLocaleLowerCase();
if (profession==="children"){
    let age=parseInt(prompt("Enter Your Age: "));
    if(age<10){
        alert("Your Ticket Is Free...");
    }else{
        alert("Sorry.You Have to Full pay..")
    }
}else if(profession==="students"){

    alert("You will get a 50% discount..")
}else if(profession==="senior citizen"){
    let age=parseInt(prompt("Enter Your Age: "));
    if(age>=60){
        alert("Gets 15% Discount...")
    }else{
        alert("sorry.Have to full pay......")
    }
}else{
    alert("Regular Ticket fare 800 taka...")
}

alert(6!=6)