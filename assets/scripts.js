//SCRIPT n.1: CONTROLLA SE I CAMPI SONO COMPILATI CORRETTAMENTE / SCRIPT n.1: CHECKING IF ALL FILEDS ARE FILLED CORRECTLY
(() => {
    
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


//SCRIPT n.2: INVIO EMAIL CON EMAILJS / SCRIPT n.2: EMAIL SENDING VIA EMAILJS SERVICE
emailjs.init("VXIiWXBq1HlTrPtN8");
console.log("EmailJS inizializzato correttamente");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita il refresh della pagina

  var form = document.getElementById("contact-form");

  // Controlla SOLO i campi obbligatori con checkValidity()
  if (!form.checkValidity()) {
      alert("Errore: Tutti i campi obbligatori (indicati da un asterisco) devono essere compilati.");
      form.classList.add("was-validated"); // Attiva la validazione visiva di Bootstrap
      return; // Blocca l'invio se manca qualcosa
  }

  // Raccogli i dati necessari per EmailJS
  var templateParams = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
      position: document.getElementById("position").value.trim() || "Non specificata",
      date: document.getElementById("date").value.trim() || "Non specificata"
  };

  console.log("Position:", templateParams.position);
  console.log("Date:", templateParams.date);

  // Invio tramite EmailJS
  emailjs.send("service_l97gk4k", "template_hc8lqs9", templateParams)
      .then(function(response) {
          alert("Messaggio inviato con successo!");
      }, function(error) {
          console.log("Errore dettagliato:", error); // Mostra l'errore nella console
          alert("Errore nell'invio! Controlla la console per maggiori dettagli.");
      });
});