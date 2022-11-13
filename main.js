const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d125e38fdmshd3d62d472692b99p12ce84jsn06599c1a1b4b',
		'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
	}
};

const main = document.getElementById('root')



  function btnLoad() {
    fetch('https://random-user.p.rapidapi.com/getuser', options)
    .then(response => response.json()).then(response => {
    //console.log(data.results);
    const results = response.results
   // console.log(results);
    fetchPeople(results)
  })
  }
	
  function fetchPeople(data) {

    data.map((item) => {
      const { cell, dob, email, gender, location, phone, picture, name } = item;
      //console.log(picture);
      const { thumbnail, large, medium } = picture;
      const { age } = dob;
      const { country, state, street, postcode, timezone, city } = location;
      const { number } = street;
      const { offset, description } = timezone;
      const { title, first, last } = name;
     // console.log(last);
      
      return main.innerHTML = (`
      <div class="container">
      <div class="img-container">
      <img src="${large}" alt="">
    </div>
    <div class="content-container">
      <h3>${ title} ${ first } <span class="span">${ last }</span></h3>
      <p>${ email }</p>
      <small>${ age }</small>
      <small>${ gender }</small>
      <p>${ cell }</p>
      <p>${ country }</p>
      <small>${ state }</small>
      <small>${ city }</small>
      <p>${ offset } ${ description }</p>
    </div>
    </div>
      `)
   
    })
  }