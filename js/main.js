let menuItems = [
    {
      id: 1,
      title: 'pancakes',
      category: 'breakfast',
      price: 15.99,
      img: './images/pamcakes.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 2,
      title: 'pasta',
      category: 'lunch',
      price: 15.99,
      img: './images/pasta.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 3,
      title: 'fruits salad',
      category: 'breakfast',
      price: 15.99,
      img: './images/fruitssalad.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 4,
      title: 'rice',
      category: 'dinner',
      price: 15.99,
      img: './images/rice.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 5,
      title: 'burger chips',
      category: 'lunch',
      price: 15.99,
      img: './images/burgerchips.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 6,
      title: 'stake',
      category: 'dinner',
      price: 15.99,
      img: './images/stake.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 7,
      title: 'pizza',
      category: 'lunch',
      price: 15.99,
      img: './images/pizza.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 8,
      title: 'salads',
      category: 'breakfast',
      price: 15.99,
      img: './images/snacks.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 9,
      title: 'toast',
      category: 'dinner',
      price: 15.99,
      img: './images/toast.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 8,
      title: 'chips',
      category: 'breakfast',
      price: 15.99,
      img: './images/chips.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    }
]

const mainContainer = document.querySelector('.menuItems')
const filterBtns = document.querySelectorAll('.btn')

// displays items on dom
window.addEventListener('DOMContentLoaded', _ =>{
    displayMenuItems(menuItems)
})

// filters buttons
Array.from(filterBtns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{

        // gets the current btn with specific dataset name
        const category = e.currentTarget.dataset.btn
        // filters the array based on category btn-name into a new array
        const menuCategory = menuItems.filter((singleMenu)=>
        {
            if(singleMenu.category === category){
                return singleMenu
            }
            
        })
        // checks for 'all' data-btn 
        if(category === 'all'){
                displayMenuItems(menuItems)
            }else{
                displayMenuItems(menuCategory)
            }
    })
})

// maps through the array
function displayMenuItems (menu){

    let displayMenu = menu.map((item) =>{
        return `
            <div class="items">
                <div class= "gen">
                    <img src=${item.img} alt="${item.title}">
                
                
                    <div class="contentText">
                        <h3>${item.title}<span class="price">$${item.price}</span></h3>
                        <div class="lines"></div>
                        <p>${item.desc}
                        </p>
                    </div>
                </div>    
            </div>
        `
        
        // let divContainer = document.createElement('div')
        // let divGen = document.createElement('div')
        // let divContent = document.createElement('div')
        // let divLine = document.createElement('div')
        // let image = document.createElement('img')
        // let divHeader = document.createElement('h3')
        // let divSpan = document.createElement('span')
        // let divPara = document.createElement('p')
        // let attriOne = image.setAttribute('src', `${item.img}`)
        // let atrriItem = divContainer.setAttribute('class', 'items' )
        // let attriGen = divGen.setAttribute('class', 'gen')
        // let attriContent = divContent.setAttribute('class', 'contentText')
        // let attriLine = divLine.setAttribute('class', 'lines')
        // let attriSpan = divSpan.setAttribute('class', 'price')
        // let testContent = document.createTextNode(`${item.desc}`)
        // let spanHead = document.createTextNode(`$${item.price}`)

        // let testContentHead = document.createTextNode(`${item.title}`)
        // console.log(image);
        // divPara.appendChild(testContent)
        // divHeader.appendChild(testContentHead)
        // divSpan.appendChild(spanHead)
        // divHeader.appendChild(divSpan)
        // divContent.appendChild(divHeader)
        // divContent.appendChild(divLine)
        // divContent.appendChild(divPara)
        // divGen.appendChild(image)
        // divGen.appendChild(divContent)
        // divContainer.appendChild(divGen)
        // mainContainer.appendChild(divContainer)
        // console.log(divSpan)
        
    })
    // joins the items together
    displayMenu = displayMenu.join('')
    // add to the mainContainer section HTML
    mainContainer.innerHTML = displayMenu
}


