"strict mode"
//challenge1

const ds1=85;
const ds2=54;
const ds3=41;

const ks1=23;
const ks2=34;
const ks3=27;

const calcAverage=(s1,s2,s3)=>{
    return (s1+s2+s3)/3;
}

const avgDolphins=calcAverage(ds1,ds2,ds3);
const avgKoalas=calcAverage(ks1,ks2,ks3);

console.log(avgDolphins,avgKoalas);

checkWinner(avgDolphins,avgKoalas);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins/2 >= avgKoalas){
        console.log(`Dolphins Win`);
    }else if(avgKoalas/2 >= avgDolphins){
        console.log(`Koalas Win`);
    }
}



