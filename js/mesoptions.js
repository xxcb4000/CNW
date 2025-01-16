
    const buttonEasy = document.getElementById("buttonEasy");
    const buttonIntermediate = document.getElementById("buttonIntermediate");
    const buttonHard = document.getElementById("buttonHard");
    const buttonDate1 = document.getElementById("buttonDate1");
    const buttonDate2 = document.getElementById("buttonDate2");
    const buttonDate3 = document.getElementById("buttonDate3");
    const buttonValidate = document.getElementById("buttonValidate");
    let date1 = document.querySelector(".date1 .checkA").innerHTML;
    let date2 = document.querySelector(".date2 .checkA").innerHTML;
    let date3 = document.querySelector(".date3 .checkA").innerHTML;
    document.getElementById("dateChoisie").innerHTML = date1;



    buttonEasy.onclick = function onclickEasy() {

        document.querySelectorAll(".checkA").forEach(elem => elem.style.display = "block");
        document.querySelectorAll(".checkB").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkC").forEach(elem => elem.style.display = "none");
        date1 = document.querySelector(".date1 .checkA").innerHTML;
        date2 = document.querySelector(".date2 .checkA").innerHTML;
        date3 = document.querySelector(".date3 .checkA").innerHTML;
    }
    buttonIntermediate.onclick = function onclickIntermadiate() {

        document.querySelectorAll(".checkA").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkB").forEach(elem => elem.style.display = "block");
        document.querySelectorAll(".checkC").forEach(elem => elem.style.display = "none");
        date1 = document.querySelector(".date1 .checkB").innerHTML;
        date2 = document.querySelector(".date2 .checkB").innerHTML;
        date3 = document.querySelector(".date3 .checkB").innerHTML;
    }
    buttonHard.onclick = function onclickHard() {

        document.querySelectorAll(".checkA").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkB").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkC").forEach(elem => elem.style.display = "block");
        date1 = document.querySelector(".date1 .checkC").innerHTML;
        date2 = document.querySelector(".date2 .checkC").innerHTML;
        date3 = document.querySelector(".date3 .checkC").innerHTML;
    }
    buttonDate1.onclick = function onclickDate1() {

        document.querySelector(".date1").classList.add("datechoosen");
        document.querySelector(".date2").classList.remove("datechoosen");
        document.querySelector(".date3").classList.remove("datechoosen");
        document.querySelector(".check1").style.display = "block";
        document.querySelector(".check2").style.display = "none";
        document.getElementById("dateChoisie").innerHTML = date1;


    }
    buttonDate2.onclick = function onclickDate2() {

        document.querySelector(".date1").classList.remove("datechoosen");
        document.querySelector(".date2").classList.add("datechoosen");
        document.querySelector(".date3").classList.remove("datechoosen");
        document.querySelector(".check1").style.display = "none";
        document.querySelector(".check2").style.display = "block";
        document.querySelector(".check3").style.display = "none";
        document.getElementById("dateChoisie").innerHTML = date2;

    }
    buttonDate3.onclick = function onclickDate3() {

        document.querySelector(".date1").classList.remove("datechoosen");
        document.querySelector(".date2").classList.remove("datechoosen");
        document.querySelector(".date3").classList.add("datechoosen");
        document.querySelector(".check1").style.display = "none";
        document.querySelector(".check2").style.display = "none";
        document.querySelector(".check3").style.display = "block";
        document.getElementById("dateChoisie").innerHTML = date3;
    }

    buttonValidate.onclick = function onclickValidate() {
        window.location.href = "formulaire.html";
    }
 



