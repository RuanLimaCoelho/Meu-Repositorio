const links_social_media = {
  github: 'RuanLimaCoelho',
  instagram: 'Ruan_br15',
  facebook: ' ',
  twitter: ''
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}
changeSocialMedia()

function getinfosprofileGitHub() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_photo.src = data.avatar_url
      user_login.textContent = data.login
    })
}
getinfosprofileGitHub()
