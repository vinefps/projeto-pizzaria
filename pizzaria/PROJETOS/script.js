let pizzaTotalArea = document.querySelector('.all-pizzas');
let pizzaEachArea = document.querySelector('.each-pizza');
let modalArea = document.querySelector('.modal-area');
let closeModal = document.querySelector('.close-modal');
let key = '';
let qtItem = 1;
var carrinhoLista = []


pizzaJson.map((item, index) =>{
    let pizzaItem = pizzaEachArea.cloneNode(true);
    pizzaTotalArea.append(pizzaItem)
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-img img').src = item.img
    pizzaItem.querySelector('.pizza-name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-price').innerHTML = item.price.toFixed(2)
    pizzaItem.querySelector('.pizza-desc').innerHTML = item.description
    
    

    pizzaItem.querySelector('.more').addEventListener('click', ()=>{
        modalArea.classList.remove('hidden')
        key = pizzaItem.getAttribute('data-key')

        
        document.querySelector('.pizza-name-modal').innerHTML = 'NOME: ' + pizzaJson[key].name;
        document.querySelector('.pizza-price-modal').innerHTML = 'PREÇO: ' + pizzaJson[key].price;
        document.querySelector('.pizza-desc-modal').innerHTML = 'DESC: ' + pizzaJson[key].description;
        document.querySelector('.qt-item').innerHTML = qtItem;
        document.querySelector('.pizza-img-modal img').src = pizzaJson[key].img

    })
    pizzaItem.querySelector('.pizza-img').addEventListener('click', ()=>{
        modalArea.classList.remove('hidden')
        
    })
    
    closeModal.addEventListener('click', () =>{ 
        modalArea.classList.add('hidden')
    })
   
});





document.querySelector('.qt-menos').addEventListener('click', () =>{
    if(qtItem > 0){
        qtItem--;
     document.querySelector('.qt-item').innerHTML = qtItem;
    }
})

document.querySelector('.qt-mais').addEventListener('click', () =>{
    qtItem++;
    document.querySelector('.qt-item').innerHTML = qtItem;
});




document.querySelector('.more-modal').addEventListener('click', () =>{
    

    let ide = pizzaJson[key].id

    let keyCart = carrinhoLista.findIndex((item)=>{
        return item.id = ide
    })
    console.log(keyCart)
    if(keyCart > -1){
        carrinhoLista[keyCart].qt += qtItem
    }else{
        carrinhoLista.push({
            id: pizzaJson[key].id,
            preco: pizzaJson[key].price,
            qt: qtItem,
            ide
        })
    }  
});







pizzaEachArea.style.display = 'none';
console.log(carrinhoLista)

