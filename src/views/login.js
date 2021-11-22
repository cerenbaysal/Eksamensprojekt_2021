// Tager fat i indholdet under form i "login.html" filen
document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (user) {
      location.href = "/";
    }
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
      fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Body er i form af JSON
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          // Hvis brugeren er en oprettet bruger/gemt i databasen, følges den hen til næste side/homepage
          if (response) {
            // Gemmer oplysninger
            localStorage.setItem("user", JSON.stringify(user));
            location.href = "/";
          } else {
            window.alert("Forkerte oplysninger");
          }
        })
        .catch(() => {
          window.alert("Fejl");
        });
    });
  });
  
  