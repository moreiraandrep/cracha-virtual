const userSocialMedia = {
  github: 'moreiraandrep',
  youtube: 'c/RocketSeat',
  facebook: 'andre.moreiradev',
  instagram: 'andre_moreirap',
  twitter: 'andre_moreirap'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const URL_BASE = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(URL_BASE)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userAvatar.src = data.avatar_url
      userLogin.href = data.html_url
      userLogin.children[1].textContent = data.login
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
