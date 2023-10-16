const btn = document.querySelector('.submit');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    
   let url = '/home?username=tiana';
   let url2 = 'http://localhost:9898/home?username=tiana';
   console.log(url)
   window.location.href = url;
   

});
