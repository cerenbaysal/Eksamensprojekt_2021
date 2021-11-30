document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    // Hvis brugeren ikke findes, følges man til login siden
    if (!user) {
      location.href = "/login.html";
    }

    // Logge ud
    document.getElementById("logoutUser").addEventListener("submit", (event) => {
      event.preventDefault();
      // Hvis brugeren findes i localstorage, fjernes brugeren og videresendes til login siden 
      if (user) {
        localStorage.removeItem("user");
        location.href = "/login.html";
      };
    });

// Slette profil
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
  });
  
 