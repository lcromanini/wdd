const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'

fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets']
    prophets.forEach(element => {
        let card = document.createElement('section')
        let h2 = document.createElement('h2')
        let birthDate = document.createElement('span')
        let birthPlace = document.createElement('span')
        let image = document.createElement('img')

        h2.textContent = `${element.name} ${element.lastname}`;
        birthDate.textContent = `Date of Birth: ${element.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${element.birthplace}`;
        image.setAttribute('src', element.imageurl)

        card.appendChild(h2)
        card.appendChild(birthDate)
        card.appendChild(birthPlace)
        card.appendChild(image)

        document.querySelector('div.cards').appendChild(card)
    });
  })