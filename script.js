function openModal() {
    document.getElementById("authModal").classList.add("show");
}

function closeModal() {
    document.getElementById("authModal").classList.remove("show");
}

function toggleAuth() {
    let title = document.getElementById("modalTitle");
    let btn = document.getElementById("authBtn");

    if (title.innerText === "Sign Up") {
        title.innerText = "Sign In";
        btn.innerText = "Sign In";
    } else {
        title.innerText = "Sign Up";
        btn.innerText = "Sign Up";
    }
}

function sendMessage() {
    let input = document.getElementById("chatInput");
    let msg = input.value;

    if (!msg) return;

    let chat = document.getElementById("chatMessages");

    let div = document.createElement("div");
    div.innerText = msg;

    chat.appendChild(div);

    input.value = "";
}