// task4

const run4 = () => {
  const inputString=document.getElementById("inputString").value;
  
  const tempArray=inputString.split("");
  
  let charObj = {};

  for (index = 0; index < tempArray.length; index++) {  
    charObj[tempArray[index]]= !charObj[tempArray[index]] ? 1 : Number(charObj[tempArray[index]])+1;
  }

  // remove non duplicates
  for (const [key, value] of Object.entries(charObj)) {
    if (Number(value) === 1) {
      delete charObj[key];
    }
  }
  console.log(charObj);
  document.getElementById("outputResult").innerHTML = JSON.stringify(charObj);

}
