alert("Usted está por visualizar el CV de Sofía Saldeña-Frontend Academy");
const $form = document.querySelector("#form")
const $buttonMailto = document.querySelector("#mymail")
$form.addEventListener('submit', handleSubmit)
function handleSubmit(Event) {
    Event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', "mailto:sofiasaldena@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}")
    ,$buttonMailto.click()
}