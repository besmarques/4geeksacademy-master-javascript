var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
   
    delete obj2["b"];
    Object.assign (obj1, obj2);
    return obj1;
}