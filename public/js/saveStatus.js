const saveStatus = async (event) => {
    event.preventDefault();

    const statusId = event.target.getAttribute("status-id");
    console.log(`the status id is ${statusId}`);

    let notes = document.getElementById(`${statusId}-Textarea`).value;
    let date = document.getElementById(`${statusId}-date-input`).value;

    console.log(`the date value is ${date}`);

    if (date || notes) {
        // Send the e-mail and password to the server
        const response = await fetch(`/api/status/${statusId}`, {
          method: 'PUT',
          body: JSON.stringify({ date, notes }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace(`/jobs/${statusId}`);
        } else {
          alert('Failed update status');
        }
      }

}

document
.querySelector('#save')
.addEventListener('click', saveStatus);