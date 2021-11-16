function convertDoubleSpaceToSingle(str) {
   return str.replace(/  +/g, " ");
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"