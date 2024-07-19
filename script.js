const inputValue = document.getElementById('input-value')
const maruti = document.getElementById('MARUTI-AREA')
const honda = document.getElementById('HONDA-AREA')
const toyota = document.getElementById('TOYOTA-AREA')
const mahindra = document.getElementById('MAHINDRA-AREA')


function add() {
    var company = document.getElementById('company').value
    var carName = inputValue.value

    if (carName !== "") {
        if (company === "maruti") {
            let li = document.createElement('li')
            li.classList.add('list')
            let span = document.createElement('span')
            span.innerText = carName
            maruti.appendChild(li)
            inputValue.value = ""
            document.getElementById('company').value = ''
            inputValue.focus()
            li.append(span)

            let dltBtn = document.createElement('i')
            dltBtn.classList.add("bi", "bi-trash3-fill")
            li.append(dltBtn)
            dltBtn.onclick = () => {
                maruti.removeChild(li)
            }

            let edtBtn = document.createElement('i')
            edtBtn.classList.add("bi", "bi-pencil-fill")
            li.append(edtBtn)
            edtBtn.onclick = () => {
                let updateText = prompt('Edit Car Name')
                if (updateText !== "") {
                    span.innerText = updateText
                } else {
                    alert('No Update')
                }
            }
        } else if (company === "honda") {
            let li = document.createElement('li')
            li.classList.add('list')
            let span = document.createElement('span')
            span.innerText = carName
            honda.appendChild(li)
            inputValue.value = ""
            document.getElementById('company').value = ''
            inputValue.focus()
            li.append(span)

            let dltBtn = document.createElement('i')
            dltBtn.classList.add("bi", "bi-trash3-fill")
            li.append(dltBtn)
            dltBtn.onclick = () => {
                honda.removeChild(li)
            }

            let edtBtn = document.createElement('i')
            edtBtn.classList.add("bi", "bi-pencil-fill")
            li.append(edtBtn)
            edtBtn.onclick = () => {
                let updateText = prompt('Edit Car Name')
                if (updateText !== "") {
                    span.innerText = updateText
                } else {
                    alert('No Update')
                }
            }
        } else if (company === "toyota") {
            let li = document.createElement('li')
            li.classList.add('list')
            let span = document.createElement('span')
            span.innerText = carName
            toyota.appendChild(li)
            inputValue.value = ""
            document.getElementById('company').value = ''
            inputValue.focus()
            li.append(span)

            let dltBtn = document.createElement('i')
            dltBtn.classList.add("bi", "bi-trash3-fill")
            li.append(dltBtn)
            dltBtn.onclick = () => {
                toyota.removeChild(li)
            }

            let edtBtn = document.createElement('i')
            edtBtn.classList.add("bi", "bi-pencil-fill")
            li.append(edtBtn)
            edtBtn.onclick = () => {
                let updateText = prompt('Edit Car Name')
                if (updateText !== "") {
                    span.innerText = updateText
                } else {
                    alert('No Update')
                }
            }
        } else if (company === "mahindra") {
            let li = document.createElement('li')
            li.classList.add('list')
            let span = document.createElement('span')
            span.innerText = carName
            mahindra.appendChild(li)
            inputValue.value = ""
            document.getElementById('company').value = ''
            inputValue.focus()
            li.append(span)

            let dltBtn = document.createElement('i')
            dltBtn.classList.add("bi", "bi-trash3-fill")
            li.append(dltBtn)
            dltBtn.onclick = () => {
                mahindra.removeChild(li)
            }

            let edtBtn = document.createElement('i')
            edtBtn.classList.add("bi", "bi-pencil-fill")
            li.append(edtBtn)
            edtBtn.onclick = () => {
                let updateText = prompt('Edit Car Name')
                if (updateText !== "") {
                    span.innerText = updateText
                } else {
                    alert('No Update')
                }
            }
        } else {
            alert('choose company')
        }
    } else {
        alert('Please enter car Name')
    }

}
