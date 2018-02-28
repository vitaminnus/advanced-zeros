module.exports = function getZerosCount(number, base) {  
  let chisla = [];
  let result = [];
  for (let x=2, base2=base; base2 > 1; x++) {
    let count = 0;
    while (base2 % x === 0) {
      count++;
      base2 = base2 / x;
    }
    if (count) {
      chisla.push([x,count]);
    }
  }  
  chisla.forEach(chislo => {
    let counter = 0;
    for (let del=chislo[0]; del<number; del=del*chislo[0]) {
    dels = Math.floor(number/del);
    counter = counter + dels;    
    }
    result.push(Math.floor(counter / chislo[1]));
  })
  
  return Math.min(...result);  
}