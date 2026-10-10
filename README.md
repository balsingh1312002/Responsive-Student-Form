Responsive Student Form

A clean, modern, and responsive student registration form built using HTML, CSS, and JavaScript. The application collects student details, validates required fields, dynamically displays submitted data in a table, and automatically resets the form after successful submission.

🚀 Live Demo

🔗 Live Website: View Live Project

📂 GitHub Repository: View Source Code

Replace the example URLs above with your actual project links after deployment.
📌 Project Overview

The Responsive Student Form is designed to demonstrate essential front-end development skills, including form handling, client-side validation, DOM manipulation, responsive web design, and clean code practices.

Users can enter student information through a structured form. Once submitted, the details are displayed as a new row in a table without refreshing the page.

✨ Features
Responsive Design: Works across desktop, tablet, and mobile devices.
Student Registration Form: Collects all required student details.
Form Validation: Ensures all mandatory fields are completed.
Gender Selection: Uses radio buttons to select gender.
Dynamic Table: Displays submitted student details in new rows.
Automatic Form Reset: Clears all fields after successful submission.
No Page Refresh: Uses JavaScript event handling to process submissions.
Clean User Interface: Modern styling with proper spacing and alignment.
Semantic HTML: Uses appropriate HTML elements and labels.
Commented Code: Includes comments explaining the JavaScript logic.
📝 Form Fields

The form contains the following required fields:

Field	Input Type
First Name	Text
Last Name	Text
Email	Email
Address	Text
Pincode	Text
Gender	Radio Buttons
State	Text
Country	Text
🛠️ Technologies Used
HTML5 — Semantic structure and form elements.
CSS3 — Styling, Flexbox, and responsive media queries.
JavaScript (ES6+) — Form validation, event handling, and DOM manipulation.
Git & GitHub — Version control and source code hosting.
Netlify — Live website deployment.
📂 Project Structure
responsive-student-form/
│
├── index.html      # HTML structure and student form
├── style.css       # Styling and responsive layout
├── script.js       # Form validation and dynamic table logic
└── README.md       # Project documentation

⚙️ How It Works
The user fills in all required student details.
JavaScript handles the form submission using addEventListener().
The default form submission is prevented using event.preventDefault().
The submitted information is collected from the form fields.
A new table row is created dynamically using DOM manipulation.
The student details are displayed under their corresponding column headers.
The form is reset using JavaScript after successful submission.

Note: The submitted records are displayed dynamically in the current page session. Persistent storage or a backend database is not included unless implemented separately.

💻 Getting Started
Prerequisites

You only need a modern web browser and a code editor, such as Visual Studio Code.

Installation

1. Clone the repository

git clone https://github.com/your-username/your-repository-name.git


2. Navigate to the project folder

cd your-repository-name


3. Open the project

Open index.html directly in your browser, or use the Live Server extension in Visual Studio Code.

No additional dependencies or package installations are required.

📱 Responsive Design

The application uses CSS Flexbox and media queries to adapt to different screen sizes.

Desktop: Form fields and table are presented with comfortable spacing.
Tablet: Layout adjusts to fit medium-sized screens.
Mobile: Form fields stack vertically, inputs use the available width, and the table can be scrolled horizontally when necessary.
🧪 Testing Checklist
All mandatory form fields are included.
Required-field validation is implemented.
Gender is selected using radio buttons.
Form submission uses addEventListener().
Page refresh is prevented during submission.
New table rows are added dynamically.
Form resets after successful submission.
Responsive CSS includes Flexbox and media queries.
JavaScript logic includes explanatory comments.
The checklist describes the intended project requirements. Verify each feature in your implementation before submission.
🌐 Deployment on Netlify
Push your project code to a GitHub repository.
Sign in to Netlify.
Select Add new project and import an existing project from GitHub.
Choose your student form repository.
Configure the deployment settings. For a plain HTML, CSS, and JavaScript project, no build command is usually needed.
Set the publish directory to the project root, where index.html is located.
Click Deploy.
Open the generated live URL and test the form on desktop and mobile.
📤 Submission Links
GitHub Repository: https://github.com/your-username/your-repository-name
Live Deployed Website: https://your-project-name.netlify.app

Replace these placeholders with your actual links before submitting the project.

🎯 Learning Outcomes

This project demonstrates practical knowledge of:

HTML form creation and semantic markup.
CSS styling and responsive layouts.
JavaScript event listeners and event handling.
Client-side form validation.
DOM element creation and manipulation.
Dynamic table generation.
Code organization and documentation.
GitHub repository management and Netlify deployment.
👨‍💻 Author

Your Name

GitHub: Your GitHub Profile

⭐ If you find this project useful, consider giving the repository a star!

Built with HTML, CSS, and JavaScript.
