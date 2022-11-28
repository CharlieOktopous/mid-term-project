//función fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  //convertimos la respuesta para poder interpretarla
  .then((res) => res.json())
  //mostramos la información por pantalla en los sitios correspondientes
  .then((data) => {
    //data is an array of posts

    const post = data[0]
    const post1 = data[1]
    const post2 = data[2]
    const text = post.body + post1.body + post2.body
    document.querySelector("#projectbody").innerHTML += text;
  })
  .catch((error) => console.log(error));






