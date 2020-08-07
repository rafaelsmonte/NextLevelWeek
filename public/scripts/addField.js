document.querySelector('#add-time').addEventListener('click', cloneField)


function cloneField() {
    const newField = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newField.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = "";

    })

    document.querySelector('#schedule-items').appendChild(newField)




}