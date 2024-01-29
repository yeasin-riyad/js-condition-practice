/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


let Bangla=parseInt(prompt("Enter your Bangla Mark: "));

let English=parseInt(prompt("Enter your English Mark: "));

let average=(Bangla+English)/2;

let gpa=average>89?"Golden A+":average>79?"A+":average>69?"A":average>59?"A-":"Fail";
alert(gpa);