# Interview reports app

React SPA for tracking informations about companies, candidates and job interviews.
Local web server was used as an [API](https://github.com/nenadbugaric/interviews-reports-api-mock/).

App has:
 ### Login Page  
 for getting accessToken 
 ![login page](./public/images/login.png)

 ### Main Page
 contains:
- Header which has two navigation buttons (Candidates and Reports) and Logout button
- Sticky Footer
- List of Candidates (landing page)
- Candidates appear in cards layout. Each card contains name, avatar and email

![main page](./public/images/candidates.png)

- Candidates can be filtered by Candidate name

![candidate reports page](./public/images/search-candidates.png)

### Candidate Reports Page
by clicking on the candidate card, user is guided to this page, which contains all details about candidate:
- Name
- Avatar 
- Email 
- Education
- Date of Birth
- List of all reports related to the selected candidate is shown, including: company, interview date and status

![candidate reports page](./public/images/single-candidate.png)

- click on eye icon opens modal with report details

![candidate modal](./public/images/candidate-modal.png)


## Administrative Panel – Bonus Project Extension

- Responsive administrative panel which is responsible for creating/modifying/deleting Interview Reports
- Administrative Panel consists of:

### 1. Report list 
- Reports are rendered in a list
![list of reports](./public/images/reports.png)
- Each Report can be viewed in more detail or deleted
![report details](./public/images/reports-modal.png)
- List of reports can be filtered by candidate or company name
![search reports by company name](./public/images/search-reports.png)

### 2. Submit Report Page
- Submitting a Report is done through a “Wizard” which is constructed from three steps
- Wizard is open when user clicks on a "plus" icon on reports page
#### Step 1: Select a Candidate
-	Candidates appear in a list
-	List of Candidates can be filtered by Candidate Name
-	When user click on candidate it’s selected
-	After Candidate is selected “Next” button become enabled and user can click on it
-	When user click on “Next” button next section “Select Company” should be presented

![wizard 1st step](./public/images/wizard-1st-step.png)
![wizard 1st step select candidate](./public/images/wizard-1st-step-select-candidate.png)

#### Step 2: Select a Company

-	Companies appear in a list
-	List of Companies can be filtered by Company Name
- After Company is selected “Next” button become enabled and user can click on it
-	When user click on “Next” button next section “Fill Report Details” is presented

![wizard 2nd step](.public/images/wizard-2nd-step.png)
![wizard 2nd step select company](.public/images/wizard-2nd-step-select-company.png)

#### Step 3: Fill Report Details
-	User can enter all Report fields:
-	Date
-	Phase: cv, hr, tech, final
-	Status: passed, declined
-	Notes
-	All input fields are required
-	Phase must be one of: cv, hr, tech, final
-	Status must be one of: passed, declined 
-	Date can not be in the future
-	Date input is provided via date-picker component
- When the user clicks “Submit”, a request with all data for creating a report is sent
-	After successfully created report user is redirected to the reports page

![wizard 3rd step](.public/images/wizard-3rd-step.png)
![wizard 3rd step fill](.public/images/wizard-3rd-step-fill.png)
![report is added](.public/images/report-is-added.png)
