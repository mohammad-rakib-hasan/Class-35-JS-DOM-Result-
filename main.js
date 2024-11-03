function grade ()
{
    let marks = document.getElementById('marks').value;

    if (parseFloat(marks) >=80){
        document.getElementById('result').innerHTML = "The Grade is = A+  " + "= Passed";
    }

   else if (parseFloat(marks) >=70){
        document.getElementById('result').innerHTML = "The Grade is = A " + "= Passed";
    }

   else if (parseFloat(marks) >=60){
        document.getElementById('result').innerHTML = "The Grade is = A-  " + "= Passed";
    }

    else if (parseFloat(marks) >=50){
        document.getElementById('result').innerHTML = "The Grade is = B " + "= Passed";
    }

    else if (parseFloat(marks) >=40){
        document.getElementById('result').innerHTML = "The Grade is = C " + "= Passed";
    }

    else if (parseFloat(marks) >=33){
        document.getElementById('result').innerHTML = "The Grade is = D " + "= Passed";
    }

    else {
        document.getElementById('result').innerHTML = "The Grade is = F " + "= Failed";
    }
}