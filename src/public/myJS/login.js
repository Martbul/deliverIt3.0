const form = document.getElementById('loginForm')
form.addEventListener('submit', onLogIn);

async function onLogIn(e){
    e.preventDefault();
     const formData = new FormData(form);

     const email = formData.get('email');
     const password = formData.get('password');

     await login(email, password)
}
/*
async function login(email, password){
    try {
        const result = await fetch('sql111.infinityfree.com',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        if(!result.ok){
            throw new Error(result.message)
        }
        const user = await result.json()
        sessionStorage.setItem('user', JSON.stringify(user))
    }catch(err){
        alert(err.message)
    }
}
*/