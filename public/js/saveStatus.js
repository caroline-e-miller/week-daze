const saveStatus = async (event) => {
    event.preventDefault();

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
          document.location.replace(`/jobs/${statusId}`);
        } else {
          alert('Failed update status');
        }
      }

};

const addStatus = async (event) => {
    event.preventDefault();

    const job_id = event.target.getAttribute("job-id");
    console.log(`the job id is ${job_id}`);

    let status = document.getElementById(`status-input`).value;
    let date = document.getElementById(`date-input`).value;
    let notes = document.getElementById(`notes-input`).value;

    console.log(`Status is ${status}, date is ${date}, and note is ${notes}`);
    console.log(`the notes value is ${notes}`);

    if (status) {
        // Send the e-mail and password to the server
        const response = await fetch(`/api/status/`, {
          method: 'POST',
          body: JSON.stringify({ status, date, notes, job_id }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace(`/jobs/${job_id}`);
        } else {
          alert('Failed to create new status');
        }
      }

};

document
.querySelector('#save')
.addEventListener('click', saveStatus);

document
.querySelector('#add-new-status')
.addEventListener('click', addStatus );