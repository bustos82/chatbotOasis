document.addEventListener("DOMContentLoaded", function () {
    // Crear el botón flotante del chat
    let chatButton = document.createElement("div");
    chatButton.innerHTML = "💬";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.background = "#854fff";
    chatButton.style.color = "#ffffff";
    chatButton.style.fontSize = "30px";
    chatButton.style.width = "50px";
    chatButton.style.height = "50px";
    chatButton.style.borderRadius = "50%";
    chatButton.style.display = "flex";
    chatButton.style.alignItems = "center";
    chatButton.style.justifyContent = "center";
    chatButton.style.cursor = "pointer";
    chatButton.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    document.body.appendChild(chatButton);

    // Crear el contenedor del chat
    let chatContainer = document.createElement("iframe");
    chatContainer.src = "https://n8n.innovaevolution.com/webhook/82cc0d6c-25b6-4792-ab04-e3163d0cabe2/chat";
    chatContainer.style.position = "fixed";
    chatContainer.style.bottom = "80px";
    chatContainer.style.right = "20px";
    chatContainer.style.width = "350px";
    chatContainer.style.height = "500px";
    chatContainer.style.border = "none";
    chatContainer.style.display = "none";
    document.body.appendChild(chatContainer);

    // Mostrar/ocultar el chat al hacer clic en el botón
    chatButton.addEventListener("click", function () {
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
    });
});
