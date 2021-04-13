const displayNewJobForm = async (event) => {
    event.preventDefault();
    console.log("Add job button pushed")

    document.querySelector(".newjob-form").setAttribute("style", "visibility: visible");
    document.querySelector("#new-job-button").setAttribute("style", "visibility: hidden");

    document
    .querySelector('.btn-form-submit')
    .addEventListener('click', addNewJob);
}

const addNewJob = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#job-title-input').value.trim();
    const company = document.querySelector('#company-input').value.trim();
  
    if (title && company) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/jobs', {
          method: 'POST',
          body: JSON.stringify({ title, company }),
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
.querySelector('#new-job-button')
.addEventListener('click', displayNewJobForm);