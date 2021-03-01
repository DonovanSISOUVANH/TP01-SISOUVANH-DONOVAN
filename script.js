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
const lettreChiffre = /[a-zA-Z0-9][a-zA-Z0-9]/
const carac = /!@$£%^&*()/

form.addEventListener('submit',(e) => {
    let messages =[]
    if (mdp.match(lettreChiffre && mdp.length > 6)){
    }
    else {
        messages.push('Le mot de passe n\'est pas assez complexe')
    }
    if (messages.length > 0){
        e.preventDefault()
        errerElement.innerText = messages.join(', ')
    }
})