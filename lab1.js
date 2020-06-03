
function RealNumb(){
    let a = ( x/(Math.pow(x,3)+(0.1/(Math.pow(x,3)+(0.01/(Math.pow(x,3)+0.001))))));
    alert(a);
}
let x = prompt("Enter the current number",'');
RealNumb();