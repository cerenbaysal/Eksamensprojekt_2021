 document.getElementById("klik").addEventListener("click", async () => {
        let table = document.getElementById('vareListe');    

        let result = await fetch('http://localhost:8000/varer/returner_alle_varer', {method: 'GET'})
            .then(res => res.json())
            .catch(err => console.log(err));

        let tableHtml = `
            <tr>
                <th>Vare_kategori</th>
                <th>Produkt</th>
                <th>Pris</th>
            </tr>
        `;
        for(const products in result) {
            tableHtml += `
            <tr>
                <td>${products}</td>
                <td>${result[products]}</td>
            </tr>
        `;
        }
        table.innerHTML = tableHtml
    })