function addToBackOfNew(arr, element) {
    var array = 0;

    arr.push(element);
    array = arr;
    return array;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]