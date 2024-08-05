let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")
let op3 = document.getElementById("op3")
let op4 = document.getElementById("op4")
let next = document.getElementById("next")
let qnum = document.getElementById("qnum")
let que = document.getElementById("que")
let con = document.getElementById("container")
let scorebox = document.getElementById("scorebox")
let yscore = document.getElementById("yscore")
let x = parseInt(qnum.innerHTML)
let score = 0
let i = 1
let p = 0
//functions
function nextq() {
    if (x == 6) {
        con.style.display = "none"
        yscore.innerHTML = score
        scorebox.classList.add("scorebox_effect")
        scorebox.classList.remove("wh")
        scorebox.style.display = "inline-block"
    }
    if (x <= 4) {
        x = x + 1
        qnum.innerHTML = x
        console.log("question number " + x)
        op1.disabled = false;
        op2.disabled = false;
        op3.disabled = false;
        op4.disabled = false;
        next.style.visibility = "hidden"
        while (i <= 4) {
            p = "op" + i
            console.log(p)
            document.getElementById(p).style.backgroundColor = "#F0F8FF"
            document.getElementById(p).style.borderColor = "#D2F6FF"
            i++
        }
        i = 1
    }
    if (x == 2) {
        que.innerHTML = "Q. Which country has world's largest population?"
        op1.innerHTML = "China"
        op2.innerHTML = "Russia"
        op3.innerHTML = "India"
        op4.innerHTML = "South Africa"
    }
    if (x == 3) {
        que.innerHTML = "Q. When is India Gonna get Bullet train?"
        op1.innerHTML = "2025"
        op2.innerHTML = "2026"
        op3.innerHTML = "2028"
        op4.innerHTML = "2030"
    }
    if (x == 4) {
        que.innerHTML = "Q. Darjeeling is located in which state?"
        op1.innerHTML = "Asaam"
        op2.innerHTML = "Sikkim"
        op3.innerHTML = "Mizoram"
        op4.innerHTML = "West Bengal"
    }
    if (x == 5) {
        que.innerHTML = "Q. How Many States are there in India?"
        op1.innerHTML = "28 States"
        op2.innerHTML = "29 States"
        op3.innerHTML = "27 States"
        op4.innerHTML = "30 States"
        next.innerHTML = "Get Score"
    }
}

function check(n) {
    if (x == 1) {
        if (n == 2) {
            op2.style.backgroundColor = "#D3EEDA"
            op2.style.borderColor = "#D3EEDA"
            op2.style.transition3 = "300ms ease"
            score++
            console.log("Score " + score)
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
        else {
            console.log(n)
            op2.style.backgroundColor = "#D3EEDA"
            op2.style.borderColor = "#D3EEDA"
            op2.style.transition3 = "300ms ease"
            let idnum = "op" + n
            let selected_id = document.getElementById(idnum)
            selected_id.style.backgroundColor = "#F7D7DA"
            selected_id.style.borderColor = "#F7D7DA"
            selected_id.style.transition3 = "300ms ease"
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
    } else if (x == 2) {
        if (n == 3) {
            op3.style.backgroundColor = "#D3EEDA"
            op3.style.borderColor = "#D3EEDA"
            op3.style.transition3 = "300ms ease"
            score++
            console.log("Score " + score)
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
        else {
            console.log(n)
            op3.style.backgroundColor = "#D3EEDA"
            op3.style.borderColor = "#D3EEDA"
            op3.style.transition3 = "300ms ease"
            let idnum = "op" + n
            let selected_id = document.getElementById(idnum)
            selected_id.style.backgroundColor = "#F7D7DA"
            selected_id.style.borderColor = "#F7D7DA"
            selected_id.style.transition3 = "300ms ease"
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
    } else if (x == 3) {
        if (n == 2) {
            op2.style.backgroundColor = "#D3EEDA"
            op2.style.borderColor = "#D3EEDA"
            op2.style.transition3 = "300ms ease"
            score++
            console.log("Score " + score)
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
        else {
            console.log(n)
            op2.style.backgroundColor = "#D3EEDA"
            op2.style.borderColor = "#D3EEDA"
            op2.style.transition3 = "300ms ease"
            let idnum = "op" + n
            let selected_id = document.getElementById(idnum)
            selected_id.style.backgroundColor = "#F7D7DA"
            selected_id.style.borderColor = "#F7D7DA"
            selected_id.style.transition3 = "300ms ease"
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
    } else if (x == 4) {
        if (n == 4) {
            op4.style.backgroundColor = "#D3EEDA"
            op4.style.borderColor = "#D3EEDA"
            op4.style.transition3 = "300ms ease"
            score++
            console.log("Score " + score)
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
        else {
            console.log(n)
            op4.style.backgroundColor = "#D3EEDA"
            op4.style.borderColor = "#D3EEDA"
            op4.style.transition3 = "300ms ease"
            let idnum = "op" + n
            let selected_id = document.getElementById(idnum)
            selected_id.style.backgroundColor = "#F7D7DA"
            selected_id.style.borderColor = "#F7D7DA"
            selected_id.style.transition3 = "300ms ease"
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
        }
    } else if (x == 5) {
        if (n == 1) {
            op1.style.backgroundColor = "#D3EEDA"
            op1.style.borderColor = "#D3EEDA"
            op1.style.transition3 = "300ms ease"
            score++
            console.log("Score " + score)
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
            x++
        }
        else {
            console.log(n)
            op1.style.backgroundColor = "#D3EEDA"
            op1.style.borderColor = "#D3EEDA"
            op1.style.transition3 = "300ms ease"
            let idnum = "op" + n
            let selected_id = document.getElementById(idnum)
            selected_id.style.backgroundColor = "#F7D7DA"
            selected_id.style.borderColor = "#F7D7DA"
            selected_id.style.transition3 = "300ms ease"
            op1.disabled = true;
            op2.disabled = true;
            op3.disabled = true;
            op4.disabled = true;
            next.style.visibility = "visible"
            x++
        }
    }
}