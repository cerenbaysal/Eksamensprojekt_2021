
// Updater profil
function updateUser() {
    var olduserName = localStorage.getItem('user');
    olduserName = JSON.parse(olduserName);

var userName = document.getElementById("newuserName").value;
var password = document.getElementById("newPassword").value;

// 
const updateUser = {userName: userName, password: password, olduserName: olduserName.userName};
const Update = {userName: userName, password: password};

fetch('http://localhost:8000/users/update', {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateUser),
})
.then((response) => response.json())
.then((response) => {
    if (response) {
        localStorage.setItem('user', JSON.stringify(Update))
    }
})
.catch(() => {
    window.alert('Fejl!')
});
};