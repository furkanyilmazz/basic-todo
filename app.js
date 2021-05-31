//Yeni oluştur
//     <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

//newLink.id = "clear-todos";
//newLink.className = "btn btn-danger";
//newLink.href = "https://www.customedian.com";
//newLink.target = "_blank";
//newLink.textContent = "Customedian"

const text = document.createTextNode("Customedian")
//cardBody.appendChild(text)

console.log(newLink);

