const phoneEndpoint = "/phone";
// add phone - post not working
document.getElementById('add').addEventListener('click', function (e) {
  e.preventDefault();
  const phone = {
    age: this.form.age.value,
    id: this.form.id.value,
    name: this.form.name.value,
    carrier: this.form.carrier.value,
    imageUrl: this.form.imageUrl.value,
    phoneDescription: this.form.phone - description.value
  };

  fetch(phoneEndpoint, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' }, // this line is important, if this content-type is not set it wont work
    body: JSON.stringify(phone)
  }).then(responseData => {
    console.log(responseData);

  }).catch(err => {
    alert('not inserted')
  });
})
// get all phones - works
fetch(phoneEndpoint)
  .then(phoneData => {
    phoneData.json().then(phoneTableView);
  })
  .catch(err => {
    console.log(err);
  });
// creates phone table view
const phoneTableView = (phones) => {
  let html = "";
  for (let i = 0; i < phones.length; i++) {
    html += `<tr id=${phones[i].id} class="phone">
            <td>${phones[i].age}</td>
            <td>${phones[i].id}</td>
            <td>${phones[i].name}</td>
            <td>${phones[i].carrier}</td>
            <td><img src=${phones[i].imageUrl} alt=${phones[i].imageUrl}></td>
            <td>${phones[i].id}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>`;
  }

  document.getElementById("phones").innerHTML = html;
  const phoneList = document.getElementsByClassName("phone");

  const phonesArray = [...phoneList];
  phonesArray.forEach(phone => phone.addEventListener("click", function (e) {
    getMoreInfo(e.target.parentNode.id);

  }
  ))
}


// get one phone
const getMoreInfo = (id) => {
  fetch(`phone/${id}`)
    .then(response => response.json())
    .then((phoneData) => displayMoreInfo(phoneData))
    .catch((err) => console.log(err))

}
// display data recieved from getMoreInfo
const displayMoreInfo = (phoneData) => {
  document.getElementById(phoneData.id).after(phoneData.additionalFeatures)


}
