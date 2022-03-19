function uniteUnique(arr) {
  let myarr = [...arguments]
  let res = [];
  for (let i = 0; i < myarr.length; i++) {
    for (let j = 0; j < myarr[i].length; j++) {
      if(!res.includes(myarr[i][j])){
        res.push(myarr[i][j])
      }
      
    }
    
  }
  console.log(res);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));