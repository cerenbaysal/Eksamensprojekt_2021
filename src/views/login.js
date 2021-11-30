document.addEventListener("DOMContentLoaded", (event) => {
    // Forblive logget ind
    // Tjekker om brugeren er defineret i local storage
    const user = localStorage.getItem("user");
    if (user) {
      location.href = "/";
    }

    // Henter indholdet under form i "login.html" filen
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      // userName variabel der henter værdien i userName formen
      const userName = document.getElementById("userName").value;
      // Password variabel der henter værdien i password formen
      const password = document.getElementById("password").value;
      // Værdierne bliver til JSON objekter
      const user = {
       userName: userName,
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
            // For at forblive logget ind/gemme information bruges en local storage funktion 
            localStorage.setItem("user", JSON.stringify(user));
            location.href = "/";
          } else {
            window.alert("Forkerte oplysninger...");
          }
        })
        .catch(() => {
          window.alert("Fejl");
        });
    });
  });
  
  