console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(imagesObj => {
            imagesObj.message.forEach(img => {
                let imageElement = document.createElement('img')
                imageElement.src = img
                let div = document.querySelector("#dog-image-container")
                div.appendChild(imageElement)
            })
        })
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(breedsObj => {
           Object.keys(breedsObj.message).forEach(breed => {
               let breedElement = document.querySelector("#dog-breeds")
               let li = document.createElement('li')
               li.innerText = breed
               breedElement.appendChild(li)
           })
        })
        let ul = document.querySelector('ul')
        ul.addEventListener('click', function(event) {
           if (event.target.tagName === "LI") {
               event.target.style.color = 'red'
           }
        })
    let select = document.querySelector("#breed-dropdown")
        select.addEventListener('change', function(event) {
            let allLIs = document.querySelectorAll("li")
            allLIs.forEach(li => {
                li.style.display = ""
                if (event.target.value !== li.innerText[0]) {
                    li.style.display = "none"
                }
            })
        })
 })
 