// Tager fat i indholdet under form i "createAccount.html" filen
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      // Email variabel der henter værdien i email formen
      const email = document.getElementById("email").value;
      // Password variabel der henter værdien i password formen
      const password = document.getElementById("password").value;
      // Værdierne bliver til JSON objekter
      const user = {
        email: email,
        password: password,
      };
      
      // Kalder følgende URL med post metoden 
      fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Body er i form af JSON
        body: JSON.stringify(user),
      }) // 
        .then((response) => response.json())
        .then((response) => {
          // Hvis brugeren bliver oprettet, følges brugeren til login siden
          if (response) {
            location.href = "/login.html";
          }
        })
        // Hvis ikke sker der en fejl
        .catch(() => {
          window.alert("Fejl");
        });
    });
  });
  