const btn = document.querySelector('.submit');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const usernameInput = document.querySelector("#username-input")
    const username = usernameInput.value;

    const encodedUsername = encodeURIComponent(username);
    
   let url = `/home?username= ${encodedUsername}`;
   let url2 = 'http://localhost:9898/home?username= ${encodedUsername}';
   console.log(url)
   window.location.href = url;
   

});



