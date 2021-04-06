# Job Status Tracker


## Description
This application serves as a one-stop shop to track where you are with the job search. We will be implementing mySQL with a job process database of a user table and a table of job leads.


## User Story
GIVEN I am a user
WHEN I provide my email and password
THEN I am shown my dashboard of job statuses

GIVEN I am a user
WHEN I view my dashboard
THEN I am shown my list of jobs and graphical data

GIVEN I am a user
WHEN I click on add job
THEN I can add what company, what position, which link you applied, and with who I applied

GIVEN I am a user
WHEN I click on a job
THEN I can update that specific job status

GIVEN I am a user
WHEN I am viewing my specific job page
THEN I update statuses, dates, and add notes for each step


* future development:

GIVEN I am a user
WHEN I click on profile
THEN I am able to enter my job description

GIVEN I am a user
WHEN I login
THEN I can see new jobs posted on glassdoor

GIVEN I am a user
WHEN I apply to jobs
THEN that company's rating, salary expectation

GIVEN I am a user
WHEN I want to compare jobs
THEN I select the jobs to compare and see the comparison


## Wireframe
Login:
![Job Status Login](./assets/images/Login.png)

Dashboard:
![Job Status Dashboard](./assets/images/Dashboard.png)

Specific Job:
![Job Status Specific Job](./assets/images/Specific_Job.png)


## APIs to Be Used
* Moment API for status updates
* ChartJS


## Rough Breakdown of Tasks
* Caroline Miller - put/post/get/delete routes, authentication
* Payton Whinnery - initial file structure, login (home route login)
* Rachel Amos - chartjs, modals (add/remove job)
* Jackie Hodges - dashboard (not yet applied, applied online, rejected, interview, offer, accepted), handlebars specific job page

