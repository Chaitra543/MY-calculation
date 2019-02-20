function myfunction(){
     grade1 = document.getElementById("grade1").value;
     grade2 = document.getElementById("grade2").value;
     grade3 = document.getElementById("grade3").value;
     totalgrade = (parseInt(grade1+grade2+grade3)/3);
     alert(document.getElementById("result").innerHTML = totalgrade);
    

}