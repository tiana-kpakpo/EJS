let user = (new URLSearchParams(window.location.search)).get('username');

if (!user) {
    window.location.href = '/login';
}

window.addEventListener('load', async () => {
    console.log('home.js is running')

    async function getMeals() {
        const url = 'http://localhost:9898/api/v1/getMeals';

        try {
            const result = await fetch(url);
            const response = await result.json();
            const { meal } = response
            console.log(meal)

            const menuList = document.querySelector('.content')
            meal.forEach(meal => {
                const menuDiv = document.createElement('div')
                menuDiv.className = 'meal';
                menuDiv.innerHTML = `
                <div class= 'card'>
                <img src="${meal.image}" alt="image" class="meal_img">
                <div class="meal_price">$${meal.price}</div>
            <div class="meal_title">${meal.name}</div>
            <div class="meal_description">${meal.description}</div>
            </div>
            `
            menuList.appendChild(menuDiv);


            })

        } catch (error) {
            console.error('error fetching meals:', error)
        }

    }

    getMeals();

});


const btn = document.querySelector('.menu')
const order = document.querySelector('.right')
btn = document.addEventListener('click', () => {
    console.log('meal selected')
    
    //placing order

    let meal_id = btn.id;
    console.log(meal_id)

    const newOrder = fetch('http://localhost:9898/api/v1/createOrder', {
        method: 'POST',
        headers: {
            "content-type" : "application/json "
        },
        body: JSON.stringify({
            meal_id: +meal_id,
            price: +priceVal
        })

    }) 
newOrder();
})
