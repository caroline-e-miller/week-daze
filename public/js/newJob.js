const addNewJob = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#job-title-input').value.trim();
    const company = document.querySelector('#company-input').value.trim();
    const status = document.querySelector('#status-input').value.trim();
    const job_added = document.querySelector('#date2-input').value.trim();
    if (title && company && status) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/jobs/', {
          method: 'POST',
          body: JSON.stringify({ title, company, status, job_added }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to add new job');
        }
      }
}

document
.querySelector('.btn-form-submit')
.addEventListener('click', addNewJob);