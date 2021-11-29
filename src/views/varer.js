
// Slette vare
// Henter indeholdet i formen i varer.html filen
document.getElementById("delete2").addEventListener("submit", (event) => {
    event.preventDefault();

    // Henter varen og laver om til JSON objekt
    const vare = JSON.parse(localStorage.getItem("vare"));
    // Kalder følgende URL med delete metoden
    fetch("http://localhost:8000/varer/sletVarer", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vare),
      })
        // Hvis der er respons/lykkes tages man tilbage til opret varer siden
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            // Sletter varen inden i local storage  
            .removeItem("vare");
            location.href = "/index.html";
          }
        })
        .catch(() => {
          window.alert("Fejl");
        });
    });
  