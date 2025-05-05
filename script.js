function val()
{
let phone = document.getElementById("num").value;
let numlength = phone.length;
let num;
let firstnums = phone.substr(0,2);
let lastnums = phone.substr(1,9);
if(numlength<9)
      {
        document.getElementById("msg").innerHTML= "invalid..check the number";
      }
else if(numlength==9)
     {
        num= "94"+phone;
        document.getElementById("msg").innerHTML= num;
     } 
     
     else if(numlength==9)    {
           num= "94"+phone;
           document.getElementById("msg").innerHTML= num;
        }
   else if(numlength==10)
     {
        num= "94"+lastnums;
        document.getElementById("msg").innerHTML= num;  
     }
    else if(numlength>11)
    {
        document.getElementById("msg").innerHTML= "invalid..check the number"; 
    }

    else if(numlength==11&& firstnums!=94)
         {
            document.getElementById("msg").innerHTML= "invalid..check the number";   
         }
    
         else if(numlength==11&& firstnums==94)
            {
                num= phone;
               document.getElementById("msg").innerHTML= num;   
            }
    else{
        document.getElementById("msg").innerHTML= "invalid..check the number";  
    }
}