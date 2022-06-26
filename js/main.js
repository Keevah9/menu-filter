let menuItems = [
    {
      id: 1,
      title: 'toast',
      category: 'breakfast',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 2,
      title: 'potato',
      category: 'lunch',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 3,
      title: 'buttermilk pancakes',
      category: 'dinner',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 4,
      title: 'butter rice',
      category: 'breakfast',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 5,
      title: 'pancakes',
      category: 'lunch',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 6,
      title: 'salad',
      category: 'dinner',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 7,
      title: 'beans',
      category: 'lunch',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 8,
      title: 'fruits',
      category: 'breakfast',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi, nesciunt amet voluptatibus totam ducimus?' 
    },
    {
      id: 9,
      title: 'sphag',
      category: 'lunch',
      price: 15.99,
      img: './images/pexels-photo-1279330.webp',
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
    })
    // joins the items together
    displayMenu = displayMenu.join('')
    // add to the mainContainer section HTML
    mainContainer.innerHTML = displayMenu
}


