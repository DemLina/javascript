function MedianRow(a,b,c){
    
    if((a<b && b<c) || (a==b)|| (b==c)|| (c<b && b<a)){
        alert(`Your median:${b}`);
    }else if ((b<a && a<c) || (c<a && a<b) || (a==b)|| (a==c)){
        alert(`Your median:${a}`);
    }else if ((a<c && c<b) || (b<c && c<a) || (a==c) || (b==c)) {
        alert(`Your median:${c}`);
    }

}
let a = prompt("Your first number",100);
let b = prompt("Your second number",100);
let c = prompt("Your third number",100);
a=Number(a);
b=Number(b);
c=Number(c);

MedianRow(a,b,c);