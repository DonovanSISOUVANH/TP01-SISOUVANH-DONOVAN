const name = document.getElementById('name')
const mdp = document.getElementById('mdp')
const prenom = document.getElementById('prenom')
const adresse = document.getElementById('adresse')
const cp = document.getElementById('cp')
const ville = document.getElementById('ville')
const tel = document.getElementById('tel')
const email = document.getElementById('mail')
const monsieur = document.getElementById('monsieur')
const madame= document.getElementById('madame')
const login =document.getElementById('login')
const form =document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages =[]
    if (mdp.value.lenght <=6){
        messages.push('Le mot de passe doit faire plus de 6 caractères')
    }
    if (messages.length > 0){
        e.preventDefault()
        errerElement.innerText = messages.join(', ')
    }
})