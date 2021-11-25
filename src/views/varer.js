/*
// Slette bruger
// Henter indeholdet i formen i index.html filen
document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    // Henter bruger og laver om til JSON objekt
    const vare = JSON.parse(localStorage.getItem("vare"));
    // Kalder følgende URL med delete metoden
    fetch("http://localhost:8000/varer/sletVarer", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vare),
      })
        // Hvis der er respons/lykkes tages man tilbage til login siden
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            // Sletter brugeren inden i local storage  
            localStorage.removeItem("vare");
            location.href = "/opretVarer.html";
          }
        })
        .catch(() => {
          window.alert("Fejl");
        });
    });
    */