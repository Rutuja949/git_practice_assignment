let n = 20;
let flag = 0;


for(let i = 2; i<n; i++){
  flag =1;

  for(let j =2; j<i/2; j++){
    if(i%j==0){
      flag =0;
      break;
    }
  }

  if(flag){
    console.log(i);
  }

}

