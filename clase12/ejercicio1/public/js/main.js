let socket = io.connect()

socket.on('messages', function (data) {
    console.log(data)
    renderizar(data)
});

function renderizar(data) {
    let html = data.map(function (elem, index) {
        return (`<div>
        <strong>${elem.author}</strong>
        <em>${elem.text}</em>
        </div>
        `)
    }).join(" ");
    document.getElementById('messages').innerHTML = html
}

function addMessage(e) {
    let mensaje = {
        author: document.getElementById('author').value,
        text: document.getElementById('text').value
    }

    socket.emit("newMessage", mensaje)

    document.getElementById('author').value = ""
    document.getElementById('text').value = ""

    return false;
}