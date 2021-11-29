// Tager fat i indholdet under form i "opretVarer.html" filen
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // Varekategori variabel der henter værdien i varekategori formen
    const varekategori = document.getElementById("varekategori").value;
    // Produkt variabel der henter værdien i produkt formen
    const produkt = document.getElementById("produkt").value;
    // Pris variabel der henter værdien i pris formen
    const pris = document.getElementById("pris").value;
    // Værdierne bliver til JSON objekter
    const varer = {
      varekategori: varekategori,
      produkt: produkt,
      pris: pris,
    };
    
    // Kalder følgende URL med post metoden 
    fetch("http://localhost:8000/varer/opretVarer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Body er i form af JSON
      body: JSON.stringify(varer),
    }) 
      .then((response) => response.json())
      .then((response) => {
        // Hvis varen bliver oprettet, følges brugeren til varer siden
        if (response) {
          location.href = "/varer.html";
        }
      })
      // Hvis ikke sker der en fejl
      .catch(() => {
        window.alert("Fejl");
      });
  });
});