console.log("inside JS");
const saveDropdown = async (event) => {
    event.preventDefault();
    console.log('test');
    const id = event.target.getAttribute('data-job-id');
    const status = document.querySelector(`#status-choice-${id}`).value;

    if (status) {
        const response = await fetch(`/api/jobs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update status');
        }
    }
};
// console.log(document.getAttribute('.saveButton'));
let saveButtonDOMs = document.querySelectorAll('.saveButton')
for (let i = 0; i < saveButtonDOMs.length; i++) {
    saveButtonDOMs[i].addEventListener('click', saveDropdown);
}    