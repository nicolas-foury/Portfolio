console.log('Le script est chargé');
 
const bouton = document.querySelector('#theme');
console.log(bouton);

bouton.addEventListener('click', function () {
  document.body.classList.toggle('sombre');
  if (document.body.classList.contains('sombre')) {
    bouton.textContent = 'Mode clair';
  } else {
    bouton.textContent = 'Mode sombre';
  }
});