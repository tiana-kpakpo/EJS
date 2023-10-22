let user = (new URLSearchParams(window.location.search)).get('username');

if (!user) {
    window.location.href = '/login';
}

window.addEventListener('load', async (event) => {
    console.log('home.js is running')

    async function getMeals() {

        try{

            const result = await fetch('http://localhost:9898/api/v1/getMeals');
            const response = await result.json();
            const { meal } = response
            console.log(meal)

            const menuList = document.querySelector('.content')
            meal.forEach(meal => {
                const menuDiv = document.createElement('div')
                menuDiv.className = 'meal';
                menuDiv.innerHTML = `
                <div class= 'card'  id="${meal.id}" data-meal.id="${meal.id}">
                <img src="${meal.image}" alt="image" class="meal_img">
                <div class= tPrice>
                <div class="meal_title">${meal.name}</div>
                <div class="meal_price">$${meal.price}</div></div>
            <div class="meal_description">${meal.description}</div>
            <button type = "button" class= "orderBtn" > order </button>
            </div>
            `
            menuList.appendChild(menuDiv);

        })

        }catch(error) {
            console.error('error', error)
        }

    }
        
getMeals();


//placing an order

document.querySelector('.content').addEventListener('click', async (e) => {
    if (e.target.classList.contains('orderBtn')) {
        e.preventDefault();
        console.log('order now')

        let meal_id = e.target.closest('.card').getAttribute('data-meal.id');
        console.log(meal_id)

        if (meal_id) {
            alert('Select a meal');
            return;
        }

        const params = new URLSearchParams(window.location.search);
        customer = params.get('username')

        try{
            const newOrder = await fetch ('http://localhost:9898/api/v1/createOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    meal_id,
                    username: customer,
                })
            })

            if (newOrder.status === 200){
                const orderData = await newOrder.json();
                console.log('Order created:', orderData);
                console.log(orderData.data)
            } else{
                console.error('Order not created');
            }

        }catch(err){
            console.error('error', err)
        }


    }
})





})
