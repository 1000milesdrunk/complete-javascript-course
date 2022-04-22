"strict mode"
//challenge1

// const ds1=85;
// const ds2=54;
// const ds3=41;

// const ks1=23;
// const ks2=34;
// const ks3=27;

// const calcAverage=(s1,s2,s3)=>{
//     return (s1+s2+s3)/3;
// }

// const avgDolphins=calcAverage(ds1,ds2,ds3);
// const avgKoalas=calcAverage(ks1,ks2,ks3);

// console.log(avgDolphins,avgKoalas);

// checkWinner(avgDolphins,avgKoalas);

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins/2 >= avgKoalas){
//         console.log(`Dolphins Win`);
//     }else if(avgKoalas/2 >= avgDolphins){
//         console.log(`Koalas Win`);
//     }
// }

//challenge2
// const tip=function(billValue)
// {
//     if(billValue>=50 && billValue<=300)
//     {
//         return billValue*0.15;
//     }
//     else if(billValue>300)
//     { 
//         return billValue*0.2;
//     }
//     else{
//         return 0;
//     }
// }

// const bills=[125,555,44];
// console.log(bills);
// const tips=[tip(bills[0]),tip(bills[1]),tip(bills[2])];
// console.log(tips);
// const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(total);

//short Challenge
// const jonas={
//     firstName:'Jonas',
//     friends:["Micheal","Jon","Jack"]
// };

// console.log(`${jonas.firstName} has ${(jonas.friends).length} friends and his best friend is ${(jonas.friends[0])}`);

//short Challenge
// const jonas={
//     fname:'Jonas',
//     lname:'Smith',
//     birthYear: 1991,
//     job:'teacher',
//     driversLicense:true,
//     friends:['Ace','Sabo','Luffy'],
//     calcAge: function(){
//         this.age=2021-this.birthYear;
//         return this.age;
//     },
//     getSummary: function(){
//        return `${this.fname} is a ${this.job} who is ${this.calcAge()} and ${this.driversLicense? 'has':"doesn't have"} a drivers license`
//     }
// }

// console.log(jonas.getSummary());

//Challenge 3
const markDetails={
    fullName:"Mark",
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
const johnDetails={
    fullName:"Mark",
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}

console.log(markDetails.calcBMI()>johnDetails.calcBMI()?`Mark's BMI(${Math.floor(markDetails.calcBMI())}) is higher than John's (${Math.floor(johnDetails.calcBMI())})`:`John's BMI(${Math.floor(johnDetails.calcBMI())} is higher than Mark's (${Math.floor(markDetails.calcBMI())})`)
