function And(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let otpt = document.getElementById("otpt");

    if(a == "0" && b == "0"){
        otpt.value = "0";
    } 
    if(a == "0" && b == "1"){
        otpt.value = "0";
    } 
    if(a == "1" && b == "0"){
        otpt.value = "0";
    } 
    if(a == "1" && b == "1"){
        otpt.value = "1";
    }
}
let a = document.getElementById("a");
let b = document.getElementById("b");

a.onkeyup = () => {
    if(a.value == '1' | a.value == '0'){
        return;
    }   else{
        document.getElementById("a").value = "";
        // document.getElementById("b").value = "";
    }
}
b.onkeyup = () => {
    if(b.value == '1' | b.value == '0'){
        return;
    }   else{
        // document.getElementById("a").value = "";
        document.getElementById("b").value = "";
    }
}

//Or

function Or(){
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let otpt1 = document.getElementById("otpto");

    if(c == "0" && d == "0"){
        otpt1.value = "0";
    } 
    if(c == "0" && d == "1"){
        otpt1.value = "1";
    } 
    if(c == "1" && d == "0"){
        otpt1.value = "1";
    } 
    if(c == "1" && d == "1"){
        otpt1.value = "1";
    }
}
let c = document.getElementById("c");
let d = document.getElementById("d");

c.onkeyup = () => {
    if(c.value == '1' | c.value == '0'){
        return;
    }   else{
        document.getElementById("c").value = "";
        // document.getElementById("b").value = "";
    }
}
d.onkeyup = () => {
    if(d.value == '1' | d.value == '0'){
        return;
    }   else{
        // document.getElementById("a").value = "";
        document.getElementById("d").value = "";
    }
}

// Not

function Not(){
    let e = document.getElementById("e").value;
    let otptt = document.getElementById("otptt");

    if(e == "0"){
        otptt.value = "1";
    } 
    if(e == "1"){
        otptt.value = "0";
    } 
}
let e = document.getElementById("e");

e.onkeyup = () => {
    if(e.value == '1' | e.value == '0'){
        return;
    }   else{
        document.getElementById("e").value = "";
        // document.getElementById("b").value = "";
    }
}