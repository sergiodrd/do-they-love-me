function find_out() {
    const text = document.querySelector("h2")
    text.innerText = "no they don't love you sorry"
    const button = document.querySelector("button")
    button.innerText = "retry?"
    button.onclick = () => {
        text.innerText = "you cant get any other response. it's like, not coded in. they just don't love u bro"
        button.remove()
    }
}
