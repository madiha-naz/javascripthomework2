
 document.write("<BR><BR> NEGATIVE MARKING <BR>")
for(var i = -1; i >= -5 ; i--){
document.write("negative counting <br>",i ,"<br>")
};
document.write("<BR>DO WHILE LOOP DOWNWARDS COUNTING <BR><br>")
var a=10;
do{
    document.write( a, "<br>");
a--;

}while(a>=1);
document.write("WHILE SUM OF NUMBER FROM 1 TO 20")
var c=1;
 while(c<=20){
    document.write("<br>",c ,"<br>")
     c++;
 }
 document.write("<BR><BR> MARKSHEET ")
// var name= prompt("enter your name")
// document.write("name of the student:  ",name,"<br>")
// var maths= parseFloat(prompt("enter marks of maths"))
// document.write(" marks of maths     :   ",maths ,"<br>")
// var english= parseFloat(prompt("enter marks of english"))
// document.write(" marks of english  :  ",english ,"<br>")
// var physics= parseFloat(prompt("enter marks of physics"))
// document.write(" marks of physics   :  ",physics ,"<br>")
// var computer= parseFloat(prompt("enter marks of computer"))
// document.write(" marks of computer   :  ",computer ,"<br>")
// var sindhi= parseFloat(prompt("enter marks of sindhi"))
// document.write(" marks of sindhi  :  ",sindhi ,"<br>")
// var pst=  parseFloat(prompt("enter marks of pst"))
// document.write(" marks of pst    :  ",pst ,"<br>")
// var chemistry=  parseFloat(prompt("enter marks of chemistry"))
// document.write(" marks of chemistry   :  ",chemistry ,"<br>")
// var obtained= maths+english+physics+computer+sindhi+pst+chemistry;
// document.write("obtained number : ",obtained,"<br>")
// var total =700;
// document.write("total number :  ",total,"<br>")
// var percentage =obtained/total*100;
// document.write("percentage",percentage.toFixed(2))
// if(percentage >= 40){
//     document.write("pass <br><br>");
// }

// else{
//     document.write("<br>fail <BR>");
// }
document.write("<br><br>PATTERNS")
for(var a=1; a<=5; a++){
     let row = "";
    
    for(var e=1; e<=a;e++)
        row += a;
    { document.write( "<br>",row );

    }
     
    
}
document.write("<br><br>PATTERNS")
for(var f=1; f<=5; f++){
     let row = "";
    document.write("<br> *");
 for(var g=1;g<=f;g++)
    row += "*";
    document.write(row,"<br>")  ;
     
    
}
document.write("<br><br>PATTERNS")
for(var l=5; l>=1; l--){
     let row = "";
    document.write("<br> *");
 for(var m=1;m<=l;m++)
    row += "*";
    document.write(row,"<br>")  ;
     
    
}
document.write("<br><br>PATTERNS<br>")
for (var i = 1; i <= 5; i++) {
    let row = "";

    for (var a = 1; a <= i; a++) {
        row += a;
    }
     document.write(row,"<br>");
}

document.write("<br><br>CALCULATOR<br>")
var number=parseFloat(prompt("enter the number"))
document.write(number)
var operator=prompt("enter the operator \n 1.  + \n 2.  - \n 3.  %  \n 4.  *  \n 5.  / ")
document.write(operator )
var number2=parseFloat(prompt("enter the another number"))
document.write(number2)
if(operator==="+"){
    document.write("=",number+number2);
}
else if(operator==="-"){
    document.write("=",number-number2)
}
else if(operator==="%"){
    document.write("=",number%number2)
}
else if(operator==="*"){
    document.write("=",number*number2)
}
else if(operator==="/"){
    document.write("=",number/number2)
}

