//challenge 1
// let weightMark=78;
// let heightMark=1.69;
// let weightJohn=92;
// let heightJohn=1.95;

// let bmiMark=weightMark/(heightMark**2);
// let bmiJohn=weightJohn/(heightJohn**2);

// let markHigherBMI=bmiMark>bmiJohn;
// // console.log(markHigherBMI);
//challenge 2
// if(markHigherBMI)
// {
//     console.log(`Mark's BMI ("${Math.round(bmiMark)}") is higher than john(${bmiJohn})`);
// }
// else{
//     console.log(`John's BMI (${bmiJohn}) is higher than mark(${bmiMark})`)
// }

//Challenge3

// const ds1=96;
// const ds2=108;
// const ds3=89;

// const ks1=88;
// const ks2=91;
// const ks3=110;

// let dsAvg=(ds1+ds2+ds3)/3;
// let ksAvg=(ks1+ks2+ks3)/3;

// if(dsAvg>ksAvg){
//     console.log("Dolphins Win");
// }
// else if(ksAvg>dsAvg){
//     console.log("Koalas win")
// }
// else{
//     console.log("it's a Tie")
// }

//challenge 4
const billValue=275;
(billValue>=50 && billValue<=300)?(console.log(`The bill was ${billValue}, the tip was ${billValue*0.15}, and the total value ${billValue+(billValue*0.15)}`)):(billValue <50)?(console.log(`The bill is ${billValue}`)):(billValue>300)?(console.log(`The bill was ${billValue}, the tip was ${billValue*0.2}, and the total value ${billValue+(billValue*0.2)}`)):(console.log(`The bill is ${billValue}`))