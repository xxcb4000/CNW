
    const buttonEasy = document.getElementById("buttonEasy");
    const buttonIntermediate = document.getElementById("buttonIntermediate");
    const buttonHard = document.getElementById("buttonHard");
    const buttonDate1 = document.getElementById("buttonDate1");
    const buttonDate2 = document.getElementById("buttonDate2");
    const buttonDate3 = document.getElementById("buttonDate3");
    const buttonValidate = document.getElementById("buttonValidate");


    buttonEasy.onclick = function onclickEasy() {
        document.querySelector(".cheminvisuel1").style.display = "block";
        document.querySelector(".cheminvisuel2").style.display = "none";
        document.querySelector(".cheminvisuel3").style.display = "none";
        document.querySelectorAll(".checkA").forEach(elem => elem.style.display = "block");
        document.querySelectorAll(".checkB").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkC").forEach(elem => elem.style.display = "none");
    }
    buttonIntermediate.onclick = function onclickIntermadiate() {
        document.querySelector(".cheminvisuel1").style.display = "none";
        document.querySelector(".cheminvisuel2").style.display = "block";
        document.querySelector(".cheminvisuel3").style.display = "none";
        document.querySelectorAll(".checkA").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkB").forEach(elem => elem.style.display = "block");
        document.querySelectorAll(".checkC").forEach(elem => elem.style.display = "none");
    }
    buttonHard.onclick = function onclickHard() {
        document.querySelector(".cheminvisuel1").style.display = "none";
        document.querySelector(".cheminvisuel2").style.display = "none";
        document.querySelector(".cheminvisuel3").style.display = "block";
        document.querySelectorAll(".checkA").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkB").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".checkC").forEach(elem => elem.style.display = "block");
    }
    buttonDate1.onclick = function onclickDate1() {

        document.querySelector(".date1").classList.add("datechoosen");
        document.querySelector(".date2").classList.remove("datechoosen");
        document.querySelector(".date3").classList.remove("datechoosen");
        document.querySelector(".check1").style.display = "block";
        document.querySelector(".check2").style.display = "none";
        document.querySelector(".check3").style.display = "none";
    }
    buttonDate2.onclick = function onclickDate2() {

        document.querySelector(".date1").classList.remove("datechoosen");
        document.querySelector(".date2").classList.add("datechoosen");
        document.querySelector(".date3").classList.remove("datechoosen");
        document.querySelector(".check1").style.display = "none";
        document.querySelector(".check2").style.display = "block";
        document.querySelector(".check3").style.display = "none";
    }
    buttonDate3.onclick = function onclickDate3() {

        document.querySelector(".date1").classList.remove("datechoosen");
        document.querySelector(".date2").classList.remove("datechoosen");
        document.querySelector(".date3").classList.add("datechoosen");
        document.querySelector(".check1").style.display = "none";
        document.querySelector(".check2").style.display = "none";
        document.querySelector(".check3").style.display = "block";
        
    }
    buttonValidate.onclick = function onclickValidate() {
        window.location.href = "inscription.html";
    }
 



