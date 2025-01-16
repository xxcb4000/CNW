const boutonFormulaire = document.getElementById('buttonValidate');


boutonFormulaire.onclick = function onclickFormulaire() {
    let formData = {
        prenom : document.getElementById('prénom').value,
        nom : document.getElementById('nom').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
        coche : document.getElementById('news').value,
    };

    emailjs.send("service_zwug8sj", "template_zgkhkp6", formData)
    .then(() => {
        alert("Formulaire envoyé avec succès !");

    });




}
