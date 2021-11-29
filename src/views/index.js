document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    // Hvis brugeren ikke findes, følges man til login siden
    if (!user) {
      location.href = "/login.html";
    }

    // Logge ud
    document.getElementById("logoutUser").addEventListener("submit", (event) => {
      event.preventDefault();
  
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
  
  document.getElementById("update").addEventListener("submit", (event) => {
    alert("hej")
    event.preventDefault();
alert("hej")
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
    function myFunction() {
      let message = document.getElementById("updateEmail2").value
      let message2 = document.getElementById("updatePassword2").value
      alert("Din email er " + message + " og " + message2 );

    }
/*
// Opdater profil
let getUserCredentials = document.getElementById('getUserCredentials')
let userCredentialsDiv = document.getElementById('userCredentials')

getUserCredentials.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('http://localhost:8000/users/update', {
    method: "GET",
    headers: {
      'Content-Type': "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {
    userCredentialsDiv.innerHTML = ""
    user.forEach(element => {
      userCredentialsDiv.innerHTML += '<p> Email: ' +element.email + 'Password: ' + element.password + '</p>'
    });
  })
  .catch((error) => {
    console.log('Error:', error)
  })
})

let updateSubmit = document.getElementById('updateSubmit')

updateSubmit.addEventListener('click', (e) => {
  e.preventDefault();
console.log("test")
console.log( document.getElementById('updateEmail').value);
  let email1 = document.getElementById('updateEmail').value;
  let uniqe = document.getElementById('updatePassword').value;

  let updatedProfile = {
    email: email1,
    password: uniqe
  }
  fetch('http://localhost:8000/users/update', {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(updatedProfile)
}). then(response => response.json())
.then(user => {
  console.log(user)
  alert('Succes:' + user.msg)
})
.catch((error) => {
  console.log('Error:', error)
})
})
*/