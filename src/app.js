import text from './text.js'

const h1 = document.createElement("h1")
h1.textContent = text
const app = document.getElementById("app")
app.appendChild(h1)
