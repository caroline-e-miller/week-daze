const addStatus = async (event) => {
    event.preventDefault();

    let job_id = event.target.getAttribute("job-id");
    console.log(`the job id is ${job_id}`);

    let status = document.getElementById(`status-input`).value;
    let date = document.getElementById(`date-input`).value;
    let notes = document.getElementById(`notes-input`).value;

    console.log(`Status is ${status}, date is ${date}, and note is ${notes}, and the job_id is ${job_id}`);

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
.querySelector('#add-new-status')
.addEventListener('click', addStatus );