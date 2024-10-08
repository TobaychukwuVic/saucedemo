
 Running Automated Tests Locally with Cypress

Prerequisites:

- Node.js (version 14 or higher) installed on your machine
- npm (version 6 or higher) installed on your machine
- Cypress (version 10 or higher) installed as a dev dependency in your project

Step-by-Step Instructions:

1. Clone the repository:

bash
git clone (https://github.com/TobaychukwuVic/saucedemo)

2. Navigate to the project directory:

bash
cd saucedemo

3. Install dependencies:

bash
npm install

4. Run Cypress:

bash
npx cypress open

This will open the Cypress Test Runner.

5. Run a specific test file:

bash
npx cypress run --spec "cypress/e2e/sorting.spec.js"

6. Run all tests:

bash
npx cypress run

This will run all tests in the cypress/e2e directory.
 
