function NameCard() {
    while (n >= 1) {
        let a = n % 10;
        sum += a;
        n = n / 10 - (a / 10);
        if(30<n&&n<60){
            CheckCard();
        }
        a = n % 10;
        b = a * 2;
        if (b > 9) {
            c = b % 10;
            d = b / 10 - (c / 10);
            b = c + d;
        }
        sum += b;
        n = n / 10 - (a / 10);
        if(30<n&&n<60){
            CheckCard();
        }
    }
    
    if (sum % 10 == 0) {    
        alert(namecard);   
    } else alert("INVALID");
}


function CheckCard() {
    if ((n == 34 || n == 37) && (len == 15)) {
        namecard = "AMEX";
    } else if ((50 < n && n < 56) && (len == 16)) {
        namecard = "MASTERCARD";
    } else if ((40<=n && n<50) && (len == 13 || len == 16)) {
        namecard = "VISA";
    } else alert("INVALID");

}

let n = prompt("Enter your number card");
let sum = 0;
let len = n.length;
Number(n);
NameCard();