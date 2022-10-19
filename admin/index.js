var tbody = document.querySelector('#tbody');

var url = 'http://localhost:3001/product';

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        var result = data.map((product) => {
            return `
            <tr>
                <td>${product.name}</td>
                <td>${product.categories}</td>
                <td><img src="${product.image}" alt="" width="100"></td>
                <td>${product.description}</td>
                <td>
                <button>Sua</button>
                <button>Xoa</button>        
                </td>
            </tr>
            `
        }).join('');

        tbody.innerHTML = result;
})




