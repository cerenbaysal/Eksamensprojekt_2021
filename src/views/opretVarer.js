// Tager fat i indholdet under form i "createAccount.html" filen
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // Email variabel der henter værdien i email formen
    const varekategori = document.getElementById("varekategori").value;
    // Password variabel der henter værdien i password formen
    const produkt = document.getElementById("produkt").value;
    // Password variabel der henter værdien i password formen
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
        // Hvis brugeren bliver oprettet, følges brugeren til login siden
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
// Slette bruger
// Henter indeholdet i formen i index.html filen
document.getElementById("delete").addEventListener("submit", (event) => {
  event.preventDefault();

  // Henter bruger og laver om til JSON objekt
  const user = JSON.parse(localStorage.getItem("user"));
  // Kalder følgende URL med delete metoden
  fetch("http://localhost:8000/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      // Hvis der er respons/lykkes tages man tilbage til login siden
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          // Sletter brugeren inden i local storage  
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Fejl");
      });
  });
