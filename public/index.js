const phoneEndpoint = "/phone";
// document.getElementById('add').addEventListener('click', function (e) {
//     e.preventDefault();
//     const phone = {
//         id: this.form.id.value,
//         name: this.form.name.value,
//         km: this.form.km.value
//     };

//     fetch(phoneEndpoint, {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' }, // this line is important, if this content-type is not set it wont work
//         body: JSON.stringify(phone)
//     }).then(responseData => {
//         console.log(responseData);

//     }).catch(err => {
//         alert('not inserted')
//     });
// })

fetch(phoneEndpoint)
  .then(phoneData => {
    console.log(phoneData);
    phoneData.json().then(phoneTableView);
  })
  .catch(err => {
    console.log(err);
  });

function phoneTableView(phones) {
  let html = "";
  for (let i = 0; i < phones.length; i++) {
    html += `<tr id=${phones[i].id} class="phone">
            <td>${phones[i].age}</td>
            <td>${phones[i].id}</td>
            <td>${phones[i].name}</td>
            <td>${phones[i].carrier}</td>
            <td><img src=${phones[i].imageUrl} alt=${phones[i].imageUrl}></td>
            <td>${phones[i].id}</td>
        </tr>`;
  }
  document.getElementById("phones").innerHTML = html;
  const phoneList = document.getElementsByClassName("phone");
  
  const phonesArray = [...phoneList];
  console.log(phonesArray)
  phonesArray.forEach(phone => phone.addEventListener("click", function(e) {
    
      console.log(e.target.parentNode.id);
    }
  ))
}

const phoneList = document.getElementsByClassName("phone");
const phones = document.getElementById("phones");
phones.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("phone")) {
    console.log("clicked");
  }
});
// for (const phone of phoneList) {
//     console.log(phone)
//     // button.addEventListener('click', function(event) {
//     //   ...
//     // })
//   }
// // console.log(phoneList);
// // for(let i = 0; i < phoneList.length; i++){
// //     console.log(phoneList[i]);
// // }

const getMoreInfo = () => {
  console.log("clicked");
};
