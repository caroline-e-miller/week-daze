const saveStatus = async (event) => {
    event.preventDefault();

    let job_id = document.querySelector('#add-new-status').getAttribute("job-id");
    console.log(`the job id is ${job_id}`);

    const statusId = event.target.getAttribute("status-id");
    console.log(`the status id is ${statusId}`);

    let notes = document.getElementById(`${statusId}-Textarea`).value;
    let date = document.getElementById(`${statusId}-date-input`).value;

    console.log(`the notes value is ${notes}`);

    if (date || notes) {
        // Send the e-mail and password to the server
        const response = await fetch(`/api/status/${statusId}`, {
          method: 'PUT',
          body: JSON.stringify({ date, notes }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace(`/jobs/${job_id}`);
        } else {
          alert('Failed update status');
        }
      }

};

document
.querySelector('tbody')
.addEventListener('click', saveStatus);
