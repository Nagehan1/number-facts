

const url = "https://www.randomuser.me/api?results=5"

const main = document.getElementById("main");

fetch(url)
    .then((response) => {
	if (response.status >= 200 && response.status <= 299) {
	    return response.json();
	} else {
	    throw new Error(
		`Encountered something unexpected: ${response.status} ${response.statusText}`
	    );
	}
    })
    .then (data => processData(data.results) )
    .catch((error) => {
	// Handle the error
	console.log(error);
    });

function processData(users) {
    console.log(users[0]);
    const user = users[0];
    const name = user.name;
    //main.innerText = users[0].email;
    const title = `<h2> ${name.title} ${name.first} ${name.last}</h2>`
    const img = `<img src="${user.picture.large}"/>`
    main.innerHTML = title + img;
}