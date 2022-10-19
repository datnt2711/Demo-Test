var form = document.querySelector('#form');
var btnSubmit = document.querySelector('#btn-submit');
var productName = document.querySelector('#product-name');
var description = document.querySelector('#description');
var categories = document.querySelector('#categories');


// xu ly loi
function errorInput(input, mess){ 
    var next = input.nextElementSibling;
    next.classList.add('red');
    next.innerHTML = mess;
}

// success
function successInput(input) {
    var next = input.nextElementSibling;
    next.classList.remove('red');
    next.innerHTML = '';
}

//check input value
function checkInputValue(listInput){
    listInput.forEach((input) => {
        if(input.value === '' ) {
            errorInput(input, 'Truong du lieu bat buoc')
        }else{
            successInput(input)
        }
    })
}

//fetch
function createProduct(data) {
    return fetch('http://localhost:3001/product', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
        return res.json();
    })
        
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputValue([productName, description])
    var name = productName.value;
    var category = categories.value;
    var des = description.value;
    var data = {
        name: name,
        categories: category,
        description: des
    }
    
    createProduct(data).then((data) => {
        location.href = 'index.html';
    })

    
})