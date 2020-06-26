let form = document.getElementById('cartoon-form')
let ul = document.getElementById('cartoons-list')
let baseURL = "http://localhost:3000/cartoons"

fetch(baseURL)
  .then(response => response.json())
  .then(showCartoons)

form.addEventListener('submit', submitHandler)

function showCartoons(cartoons){
  cartoons.forEach(createLi)
}

function createLi(cartoon){
  let li = document.createElement('li')
  let h2 = document.createElement('h2')
  let img = document.createElement('img')

  h2.textContent = cartoon.name
  img.src = cartoon.image_url

  li.append(h2,img)
  ul.appendChild(li)
}

function submitHandler(event){
  event.preventDefault()
  
  let formData = new FormData(form)
  let name = formData.get('name')
  let imageUrl = formData.get('image_url')

let h2 = document.createElement('h2')
let img = document.createElement('img')

  h2.textContent = name
  img.src = imageUrl

  document.body.append(h2, img)

  fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cartoon: {
          name: name ,
          image_url: imageUrl 
        }
      })
  })
}
  