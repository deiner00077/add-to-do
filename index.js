let container = document.querySelector(".formato");
container.innerHTML = `
<div class="formato">
<form action="">
    <label for="data">type a new to-do:</label>
    <input class="ToDo" type="text" id="data" name="data">
    <input class="add" type="submit" value="add">
    <div class="clear">
                    <ul></ul>
                </div>
</form>
</div>`
let clear1 = document.querySelector(".clear");
container.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
    let paragraf = document.createElement("p");
    paragraf.innerText = event.target.data.value
    clear1.append(paragraf)
    let boton = document.createElement("button");
    boton.innerText = "clear";
    clear1.append(boton)
    boton.addEventListener("click", (event) => {
        boton.remove();
        paragraf.remove();

    });
});


let clear = document.querySelector("article button");
clear.addEventListener("click", (event) => {

    clear1.remove();
    ToDo = " ";



    // // let tareas = document.querySelectorAll(".formato");
    // for (let container of tareas) {
    //         tarea.remove();
    // }       
    // if (paragraf) {
    //     boton.remove();
    //     paragraf.remove();
    // }

});

// promesa y api
// container.addEventListener("button", () => {
//    paragraf.remove();
// });
