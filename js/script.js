name()

function name() {
	let name = prompt('Please enter your name!')
	document.getElementById('name').innerHTML = name
}

function form() {
	const form = document.getElementById('form')
	const nameInput = document.getElementById('inputName')
	const emailInput = document.getElementById('email')
	const suggestionInput = document.getElementById('suggestion')

	const previewName = document.getElementById('previewName')
	const previewEmail = document.getElementById('previewEmail')
	const previewSuggestion = document.getElementById('previewSuggestion')

	function updatePreview() {
		previewName.textContent = nameInput.value || '-'
		previewEmail.textContent = emailInput.value || '-'
		previewSuggestion.textContent = suggestionInput.value || '-'
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault()
		updatePreview()
		alert('Form success submitted.')
	})
}

form()
