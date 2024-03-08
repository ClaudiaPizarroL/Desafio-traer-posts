//primero espera a que el DOM esté completamente cargado usando DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("button");
    button.addEventListener('click', fetchPosts); //agrega un event listener para el evento click
});


//Realiza la solicitud a la API
async function fetchPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts"; //especifica la URL de la API

    try {
        const response = await fetch(url); //Uso de await para esperar que la solicitud a la API de complete 
        console.log("Response: ",response); 
        if (!response.ok) {  //si la respuesta no es exitosa lanza error
            throw new Error("Error al obtener los posts");
        }
        const datos = await response.json(); //si la respuesta fue exitosa 

        verPosts(datos); //se llama los datos obtenidos 
    } catch (err) {
        console.log(err);
    }
}

function verPosts(posts) { //esta función recibe como argumento los datos de los posts obtenidos de la API.
    const listaDePosts = document.getElementById("posts"); //Obtiene la referencia al elemento HTML <ul> con el id "posts".

    posts.forEach(post => { //Itera sobre cada post en la lista de posts
        const li = document.createElement("li"); // se crea una constante "li" para cada post.
        const title = document.createElement("h3"); //se crea una constante "h3" para mostrar el título ("title" de la API).
        title.textContent = post.title; // asigna el contenido de texto del "h3" al "title" del post
        const body = document.createElement("p"); //crea una constante "p" para mostrar la descripción ("body" de la API).
        body.textContent = post.body; //asigna el contenido de texto del "p" al "body" del post
        
        //creamos los elementos HTML para mostrar la información de cada post.
        li.appendChild(title);
        li.appendChild(body);
        listaDePosts.appendChild(li);
    });
}






