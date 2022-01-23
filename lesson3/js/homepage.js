   
    
   //getting year throught querySelector 
    var date=new Date();
    var year=date.getUTCFullYear();
    document.querySelector('#copyrightyear').innerHTML=year;
   
   


   // Seting variables to show the last update time. 
   var lastedt = new Date(document.lastModified);
   var month=lastedt.getMonth()+1;
   var day=lastedt.getDate();
   var lyear=lastedt.getFullYear();
   var h=lastedt.getHours();
   var m=lastedt.getUTCMinutes();
   var s=lastedt.getSeconds();
   // formating data to show 0 before numbers < 10.
   if (month<10) month='0'+month;
   if (day<10) day='0'+day;
   if (h<10) h='0'+h;
   if (m<10) m='0'+m;
   if (s<10) s='0'+s; 
   document.getElementById('lastupdate').innerHTML=month+"/"+day+"/"+year+" "+h+":"+m+":"+s;

    
