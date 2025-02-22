function primefinder(x)
{
    let b=0;
    let c=0;
    for(i=2;i<x;i++)
    {
        b=x%i;
        if(b==0)
        {
            c++;
        }
    }
    return c;
}
function prime(){
    let a=document.getElementById("input").value;
    m=primefinder(a)
    if(m==0)
    {
        document.getElementById("output").innerHTML=a+"is prime";
        document.getElementById("reason").innerHTML="since "+a+" is having only 1 and "+a+" as factors";
    }
    else
    {
        document.getElementById("output").innerHTML=a+"is not prime";
        document.getElementById("reason").innerHTML="since"+a+" is having more factors other than 1 and "+a;
    }
}
function reset(){
    
}