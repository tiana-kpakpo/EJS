// const btn = document.querySelector('.submit');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const usernameInput = document.querySelector("#username-input")
//     const username = usernameInput.value;

//     const encodedUsername = encodeURIComponent(username);
    
//    let url = `/home?username= ${encodedUsername}`;
//    let url2 = 'http://localhost:9898/home?username= ${encodedUsername}';
//    console.log(url)
//    window.location.href = url;
   

// });

document.querySelector('.submit').addEventListener('click', loginUser);

async function loginUser(e) {
    e.preventDefault();
  
    const username = document.getElementById('username-input').value;
    const email = document.getElementById('email-input').value;
  
    console.log(username);
    console.log(email);
  
    if (!username || !email) {
      const errorMessage = document.querySelector('#error-message');
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Please fill all fields';
      setTimeout(() => {
        errorMessage.style.display = 'none';
        
      }, 2000);
      return;
    }

    
  
    try {
      const response = await fetch('http://localhost:9898/api/v1/loginUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:  username,
          email: email
        })
      });
  
      // Handle HTTP errors
      if (!response.ok) {
        const responseData = await response.json();
        const errorMessage = document.querySelector('#error-message');
        errorMessage.style.display = 'block';
        errorMessage.textContent = responseData.message;
  
        setTimeout(() => {
          errorMessage.style.display = 'none';
        }, 2000);
  
        return;
      }
  
      // Redirect to the next page with the username
      window.location.href = `/home?username=${username}`;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  


        