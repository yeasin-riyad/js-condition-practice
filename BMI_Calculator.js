let weight=Number(prompt("Enter your Weight kg: "));

let height=parseFloat(prompt("Enter your Height meter: "));

let BMI_Cal=weight/(height*height);

// - BMI < 18.5, you are underweight.
// - BMI >= 18.5 and BMI <=24.9, you are normal.
// - BMI >=25 and BMI <= 29.9, you are overweight.
// - Otherwise, you are obese.


let BMI=BMI_Cal<18.5?"you are underweight.":BMI_Cal>=18.5 && BMI_Cal<=24.9?"YOu are Normal":BMI_Cal>=25 && BMI_Cal<=29.9?"You are Overweight":"Yor are Ok......";

alert(BMI)

