

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function countriesLoop() {
for (let i = 0; i<data.length; i++) {
    console.log(data[i].cca3)
}
}