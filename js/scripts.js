function downcase(input) {
  var punctuation = [" ", ",", ".", "?", "!", "'", "\""];
  input = input.toLowerCase().split("");
  for (i=0; i<input.length;) {
    if (punctuation.includes(input[i])) {
      input.splice(i, 1);
    } else {
      i++;
    }
  }
  return input;
}

var columns = 0;
function findCol(inputArray) {
  columns = Math.ceil(Math.sqrt(inputArray.length));
  return columns;
}

function fillOut(inputArray){
  var toFill = (findCol(inputArray))*(findCol(inputArray)) - inputArray.length;
  for (i = 0; i < toFill; i++){
    inputArray.push("");
  }
  return inputArray;
}

function makeSquare(inputArray){
  var outputArray = [];
  for(i=0; inputArray.length>0; i++){
    outputArray[i]=inputArray.splice(0, columns);
  }
  return outputArray;
}

function makeSentence(inputArray){
  var response = "";
  for(i=0; i<columns; i++){
    for(j=0; j<columns; j++){
      response = response + inputArray[j][i];
    }
  }
  return response;
}


$(document).ready(function() {
     $("#salad").prepend("<h1>This is a header</h1>");
});
