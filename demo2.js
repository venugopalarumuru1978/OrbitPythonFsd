function  demofun1()
{
    console.log("Hello World");
}

function demofun2(x, y)
{
    console.log("x val " + x);
    console.log("y val " + y);
}

function  demofun3(x)
{
    console.log("X value " + x);
    let  res = x*x*x;
    return res;
}

function demofun4()
{
    let n = 10;
    console.log("N val " + n);
    return n*n;
}
//  function callings

demofun1();
demofun2(100,200);

var cval = demofun3(10);
console.log("Cube Val " + cval);

var sval = demofun4();
console.log("Sqaure Val " + sval);