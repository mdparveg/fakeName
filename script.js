const button = document.getElementById("button");
button.addEventListener("click", details);

function details() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => getAll(data));
}
details();

function getAll(data) {
  console.log(data);
  const details = data.results[0];
  const name = details.name;
  const fullName = `${name.title} ${name.first} ${name.last}`
  const gender = `${details.gender}`;
  const img = `${details.picture.large}`;
  const date = (details.dob.date);
  const nDate = date.slice(0, date.length - 14);



  const street = `${details.location.street.number}-${details.location.street.name} `;

  document.getElementById("name").innerText = fullName;
  document.getElementById("gender").innerText = gender;
  document.getElementById('img').setAttribute('src', img);
  document.getElementById('dob').innerText = nDate;
  document.getElementById('age').innerText = details.dob.age;
  document.getElementById('phone').innerText = details.phone;
  document.getElementById('cell').innerText = details.cell;
  document.getElementById('email').innerText = details.email;
  document.getElementById('country').innerText = details.location.country;
  document.getElementById('street').innerText = street;
  document.getElementById('psCode').innerText = details.location.postcode;

}