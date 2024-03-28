function showMobileMenu() {

  var mobileLinks = document.querySelector('.mobile_links')

  if (mobileLinks.style.display == 'none') {
    mobileLinks.style.display = 'flex'
  }
  else {
    mobileLinks.style.display = 'none'
  }
}

function show(type) {
  if (type == 'skills') {
    reset()
    document.querySelector('#skills_text').innerText = '⮞ Habilidades'
    document.querySelector('#skills_text').classList.add("highlighted-text", "bold")
    document.querySelector('.skills_content').style.display = 'flex'
  }
  if (type == 'studying') {
    reset()
    document.querySelector('#studying_text').innerText = '⮞ Cursando'
    document.querySelector('#studying_text').classList.add("highlighted-text", "bold")
    document.querySelector('.studying_content').style.display = 'flex'
  }
  if (type == 'academic') {
    reset()
    document.querySelector('#academic_text').innerText = '⮞ Acadêmico'
    document.querySelector('#academic_text').classList.add("highlighted-text", "bold")
    document.querySelector('.academic_content').style.display = 'flex'
  }
  if (type == 'language') {
    reset()
    document.querySelector('#language_text').innerText = '⮞ Idiomas'
    document.querySelector('#language_text').classList.add("highlighted-text", "bold")
    document.querySelector('.language_content').style.display = 'flex'
  }
}

function reset() {
  document.querySelector('#skills_text').innerText = 'Habilidades'
  document.querySelector('#studying_text').innerText = 'Cursando'
  document.querySelector('#academic_text').innerText = 'Acadêmico'
  document.querySelector('#language_text').innerText = 'Idiomas'

  document.querySelector('#skills_text').classList.remove("highlighted-text", "bold")
  document.querySelector('#studying_text').classList.remove("highlighted-text", "bold")
  document.querySelector('#academic_text').classList.remove("highlighted-text", "bold")
  document.querySelector('#language_text').classList.remove("highlighted-text", "bold")

  document.querySelector('.skills_content').style.display = 'none'
  document.querySelector('.studying_content').style.display = 'none'
  document.querySelector('.academic_content').style.display = 'none'
  document.querySelector('.language_content').style.display = 'none'
}