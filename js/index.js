document.getElementById("selectBox").addEventListener("click", getBreed)
document.querySelector('button').addEventListener('click', getFetch)
let url = ''

function getBreed() {
  let dog = document.getElementById("selectBox").value
  document.getElementById('dogName').innerHTML = dog
  url = `https://dog.ceo/api/breed/${dog}/images/random`
}


function getFetch() {
  fetch(url)
      .then(res => res.json())
      .then(data => {
        document.querySelector('#dog').href = data["message"]
        document.querySelector('img').src = data["message"]
      })
      .catch(err => {
        console.log(`error ${err}`)
    });

}