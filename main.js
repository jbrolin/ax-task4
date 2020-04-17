// task4

const run4 = () => {
  const inputString="Programming"; //document.getElementById("inputString").value;
  
  const tempArray=inputString.split("");
  
  let charObj = {};

  for (index = 0; index < tempArray.length; index++) {  
    charObj[tempArray[index]]= !charObj[tempArray[index]] ? 1 : Number(charObj[tempArray[index]])+1;
  }

  // filter object if <=1

  //let newObj = charObj.filter(it => it > 1 );
  let newObj = charObj.reduce((acc) => {
    return acc;
  }, {});

  console.log(charObj);

  document.getElementById("outputResult").innerHTML = "output1";

}
