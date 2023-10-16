let user = URLSearchParams.get('username');

if(!user){
    window.location.href = '/login';
}