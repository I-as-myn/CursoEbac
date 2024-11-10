document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/I-as-myn')
    .then(function(resposta){
        if (!resposta.ok) {
            throw new Error('Usuário não encontrado');
        }
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        following.innerText = json.following;
        followers.innerText = json.followers;
        repos.innerHTML = json.public_repos;
        link.href = json.html_url;
    })
    .catch(function(erro) {
        loading.innerText = 'Erro ao carregar dados. Tente novamente mais tarde.';
        console.error(erro);
    })
})