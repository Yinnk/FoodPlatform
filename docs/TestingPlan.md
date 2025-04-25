# Testing Plan

## 1. Types of Testing

### 1.1 Unit Testing
- **Purpose**: Verify individual functions or components in isolation to ensure they work correctly.  
- **Automated/Manual**: Automated  
- **Tools**: Jest or other relevant testing frameworks for JavaScript/React.  
- **Scope**: Focuses on small code units (e.g., functions, methods).  
- **Examples**:  
  - Testing the functionality of the "Order Now" button to ensure it triggers the correct pop-up. (Requirement 4.9, **Section: Restaurant Pop-Up Information**)  
  - Verifying that the "Clear" button resets all filters on the Restaurant Page. (Requirement 3.6, **Section: Restaurant Filter Functionality**)  

### 1.2 Integration Testing
- **Purpose**: Ensure that different modules or services interact as expected.  
- **Automated/Manual**: Automated  
- **Tools**: Cypress, Supertest, or similar tools for API testing.  
- **Scope**: Test how multiple components work together (e.g., interaction between UI and database, or between different pages).  
- **Examples**:  
  - Testing the interaction between the Restaurant Page filters and the restaurant display section to ensure only matching restaurants are shown. (Requirement 3.5, **Section: Restaurant Filter Functionality**)  
  - Verifying that clicking the "Sign-Out" button updates the navigation bar to remove links for logged-in users. (Requirement 1.13, **Section: Navigation Bar**)  

### 1.3 Acceptance Testing
- **Purpose**: Verify that the app meets business requirements and works as expected from the user's perspective.  
- **Automated/Manual**: Combination of automated and manual testing  
- **Tools**: Cypress, Selenium for automated testing; manual testing by the QA team.  
- **Scope**: Ensure all functional requirements are met (e.g., navigation between pages, sign-in process, order placement).  
- **Examples**:  
  - Verifying that clicking the "Explore Now" button on the Home Page redirects logged-in users to the Featured Restaurants section. (Requirement 1.4, **Section: Home Page Introduction**)  
  - Ensuring that the "Order Confirmation" pop-up displays the restaurant name, pickup time, and success message after placing an order. (Requirements 5.2, 5.3, 5.4, **Section: Order Confirmation**)  

---

## 2. Testing Process

### 2.1 Who Will Test?
- **Unit Tests**: Developers  
- **Integration Tests**: Developers  
- **Acceptance Tests**: QA team (manual testing); QA team will also handle automated acceptance testing if needed.  
- **Performance and Load Tests**: QA team/DevOps team  

### 2.2 When Will Tests Be Executed?
#### Unit and Integration Tests:
- Before each pull request (PR) is merged into the main branch.  
- Automated tests will run through the CI/CD pipeline in GitHub Actions.  
- **Examples**:  
  - Unit tests for the "Sign-In" button to ensure it redirects to the Firebase authentication UI. (Requirement 1.11, **Section: Navigation Bar**)  
  - Integration tests for the Restaurant Page filters to ensure they dynamically update the restaurant display section. (Requirement 3.5, **Section: Restaurant Filter Functionality**)  

#### Acceptance Tests:
- After each milestone is completed and before code is deployed to production.  
- Manual acceptance testing will be performed after each feature is merged into the main branch.  
- **Examples**:  
  - Verifying that the "My Orders" page displays current and past orders with relevant details. (Requirement 1.2, **Section: My Orders Page**)  
  - Ensuring that the "Cancel" button on the order cancellation page redirects to the successful cancel page. (Requirement 3.1, **Section: Successful Cancel Page**) 
  
---

## 3. Test Environments

### 3.1 Location of Code Under Test
- Code will be tested on the development environment (local machines) for unit tests.  
- Code will also be tested on staging and production environments for acceptance, performance, and load tests.  
- The staging environment will closely mirror the production environment.  
- **Examples**:  
  - Testing the navigation bar functionality in the staging environment to ensure links for logged-in users are displayed correctly. (Requirements 1.4, 1.5, 1.6, **Section: Navigation Bar**)  
  - Verifying that the "Order Now" button works as expected in the production environment. (Requirement 4.9, **Section: Restaurant Pop-Up Information**)  

---

## 4. Failure Protocol

### 4.1 How to Report a Bug
**Tester Responsibility**:  
- If a test fails, the tester must gather relevant details (steps to reproduce, logs, screenshots, etc.) and report the issue.  
- The tester will open an issue in GitHub Issues or a similar issue tracker.  
- The issue should include:  
  - A clear title  
  - A detailed description  
  - A priority level (Critical, Major, Minor)  
  - Relevant attachments (e.g., logs, screenshots, videos)  
- **Examples**:  
  - Reporting a bug where the "Order Confirmation" pop-up does not display the restaurant name. (Requirement 5.2, **Section: Order Confirmation**)  
  - Reporting a bug where the "Clear" button on the Restaurant Page filters does not reset the filters. (Requirement 3.6, **Section: Restaurant Filter Functionality**)  

### 4.2 Bug Triage
- **Project Manager/Team Lead** will review the bug report and assign a priority:  
  - **Critical**: Blocks a core feature of the app.  
    - Example: The "Sign-In" button does not redirect to the Firebase authentication UI. (Requirement 1.11, **Section: Navigation Bar**)  
  - **Major**: Impacts a significant feature but has workarounds.  
    - Example: The "Order Now" button does not trigger the order confirmation prompt. (Requirement 4.9, **Section: Restaurant Pop-Up Information**)  
  - **Minor**: Cosmetic or low-impact issue.  
    - Example: The "No results" message is not displayed when no restaurants match the selected filters. (Requirement 3.11, **Section: Restaurant Filter Functionality**)  
- **Developer Assignment**: The issue will be assigned to the relevant developer for resolution.  

### 4.3 Fixing the Bug
- The assigned developer will reproduce the issue locally and work on the fix.  
- Once fixed, the developer will submit a pull request with the changes.  
- The changes will go through unit testing and integration testing again to verify that the bug is resolved and no new issues are introduced.  
- **Examples**:  
  - Fixing a bug where the "Cancel" button on the order cancellation page does not redirect to the successful cancel page. (Requirement 3.1, **Section: Successful Cancel Page**)  
  - Fixing a bug where the "Explore Now" button does not redirect logged-in users to the Featured Restaurants section. (Requirement 1.4, **Section: Home Page Introduction**)  

### 4.4 Re-testing
- The tester will verify the fix by rerunning the failed tests to confirm the issue is resolved.  
- The issue will be marked as closed once verified.  
- **Examples**:  
  - Re-testing the "Order Confirmation" pop-up to ensure it displays the restaurant name, pickup time, and success message. (Requirements 5.2, 5.3, 5.4, **Section: Order Confirmation**)  
  - Re-testing the Restaurant Page filters to ensure they dynamically update the restaurant display section. (Requirement 3.5, **Section: Restaurant Filter Functionality**)  

  ---

# Acceptance Testing Script

## **Restaurant Page Feature**

### Context: User is not logged in

1. Visit the Restaurant Page.  
   - Expect to not see any restaurant cards displayed. (Requirement 1.1, **Section: Restaurant Page Display**)  
   - Expect to see a popup prompting the user to sign in to view the Restaurant Page. (Requirement 1.7, **Section: Navigation Bar**)  

2. Attempt to apply filters on the Restaurant Page.  
   - Expect the filter options to be disabled or inaccessible. (Requirement 3.1, **Section: Restaurant Filter Functionality**)  

3. Attempt to click the "Explore Now" button on the Home Page.  
   - Expect a popup prompting the user to sign in. (Requirement 1.5, **Section: Home Page Introduction**)  

---

### Context: User is logged in

1. Visit the Restaurant Page.  
   - Expect to see a list of restaurant cards displayed. (Requirement 1.1, **Section: Restaurant Page Display**)  
   - Each restaurant card must display the restaurant name, price, dietary restrictions, cuisine type, and a general image. (Requirements 2.1, 2.2, 2.3, 2.4, 2.5, **Section: Restaurant Section**)  

2. Apply filters on the Restaurant Page.  
   - Select a dietary restriction (e.g., Vegan), a price range (e.g., $$), and a cuisine type (e.g., Asian).  
   - Click the "Submit" button.  
   - Expect the restaurant display section to update and show only restaurants matching the selected filters. (Requirement 3.5, **Section: Restaurant Filter Functionality**)  
   - Clear the filters by clicking the "Clear" button.  
   - Expect the restaurant display section to reset and show all restaurants. (Requirement 3.6, **Section: Restaurant Filter Functionality**)  

3. Click on a restaurant card.  
   - Expect a pop-up to appear displaying detailed information about the selected restaurant, including:  
     - Restaurant name (Requirement 4.2, **Section: Restaurant Pop-Up Information**)  
     - Short description (Requirement 4.3, **Section: Restaurant Pop-Up Information**)  
     - Address (Requirement 4.4, **Section: Restaurant Pop-Up Information**)  
     - Cuisine type (Requirement 4.5, **Section: Restaurant Pop-Up Information**)  
     - Dietary options (Requirement 4.6, **Section: Restaurant Pop-Up Information**)  
     - Pickup time (Requirement 4.7, **Section: Restaurant Pop-Up Information**)  
     - A primary image (Requirement 4.8, **Section: Restaurant Pop-Up Information**)  

4. Place an order from the restaurant pop-up.  
   - Click the "Order Now" button.  
   - Expect an order confirmation prompt with a warning message and two buttons: "Confirm" and "Cancel." (Requirements 4.9, 4.10, 4.11, **Section: Restaurant Pop-Up Information**)  
   - Click "Confirm."  
   - Expect an order confirmation pop-up displaying the restaurant name, confirmed pickup time, and a success message. (Requirements 5.2, 5.3, 5.4, **Section: Order Confirmation**)  

5. Log out from the navigation bar.  
   - Expect to be redirected to the Home Page.  
   - Expect to not see the "Restaurants" link in the navigation bar. (Requirements 1.7, 1.13, **Section: Navigation Bar**)  

---

## **Order Now Feature**

### Context: User is not logged in

1. Visit the Restaurant Page.  
   - Expect to not see the "Order Now" button on any restaurant card. (Requirement 4.9, **Section: Restaurant Pop-Up Information**)  
   - Expect to see a popup prompting the user to sign in if they attempt to interact with restaurant cards. (Requirement 1.7, **Section: Navigation Bar**)  

2. Attempt to click on a restaurant card.  
   - Expect a popup prompting the user to sign in to view restaurant details. (Requirement 1.7, **Section: Navigation Bar**)  

---

### Context: User is logged in

1. Visit the Restaurant Page.  
   - Expect to see the "Order Now" button on each restaurant card. (Requirement 4.9, **Section: Restaurant Pop-Up Information**)  

2. Click on a restaurant card.  
   - Expect a pop-up to appear displaying detailed information about the restaurant. (Requirements 4.2–4.8, **Section: Restaurant Pop-Up Information**)  

3. Click the "Order Now" button in the restaurant pop-up.  
   - Expect an order confirmation prompt with a warning message and two buttons: "Confirm" and "Cancel." (Requirements 4.9, 4.10, 4.11, **Section: Restaurant Pop-Up Information**)  

4. Click "Confirm."  
   - Expect an order confirmation pop-up displaying:  
     - The restaurant name (Requirement 5.2, **Section: Order Confirmation**)  
     - The confirmed pickup time (Requirement 5.3, **Section: Order Confirmation**)  
     - A success message confirming the order was placed (Requirement 5.4, **Section: Order Confirmation**)  

5. Click the "Cancel" button in the order confirmation prompt.  
   - Expect the prompt to close and return to the restaurant pop-up. (Requirement 4.11, **Section: Restaurant Pop-Up Information**)  

---

## **Filters Feature**

### Context: User is not logged in

1. Visit the Restaurant Page.  
   - Expect the filter options to be disabled or inaccessible. (Requirement 3.1, **Section: Restaurant Filter Functionality**)  

2. Attempt to apply filters.  
   - Expect no changes to the restaurant display section. (Requirement 3.1, **Section: Restaurant Filter Functionality**)  

---

### Context: User is logged in

1. Visit the Restaurant Page.  
   - Expect to see filter options for dietary restrictions, price range, and cuisine type. (Requirements 3.2, 3.3, 3.4, **Section: Restaurant Filter Functionality**)  

2. Apply a filter for dietary restrictions (e.g., Vegan).  
   - Click the "Submit" button.  
   - Expect the restaurant display section to update and show only restaurants matching the selected filter. (Requirement 3.5, **Section: Restaurant Filter Functionality**)  

3. Apply multiple filters simultaneously (e.g., Vegan and $$).  
   - Click the "Submit" button.  
   - Expect the restaurant display section to update and show only restaurants matching all selected filters. (Requirement 3.8, **Section: Restaurant Filter Functionality**)  

4. Clear the filters by clicking the "Clear" button.  
   - Expect the restaurant display section to reset and show all restaurants. (Requirement 3.6, **Section: Restaurant Filter Functionality**)  

5. Apply filters that result in no matches.  
   - Expect the system to display a "No results" message. (Requirement 3.11, **Section: Restaurant Filter Functionality**)  

---

## **My Orders Feature**

### Context: User is not logged in

1. Click the "My Orders" link in the navigation bar.  
   - Expect a popup prompting the user to sign in to view their orders. (Requirement 1.7, **Section: Navigation Bar**)  

---

### Context: User is logged in

1. Click the "My Orders" link in the navigation bar.  
   - Expect to see a list of current and past orders. (Requirement 1.2, **Section: My Orders Page**)  

2. For orders that haven’t been picked up yet:  
   - Expect to see additional information like pickup time, dietary notes, and location. (Requirement 1.3, **Section: My Orders Page**)  
   - Expect to see a "Cancel" button for each order. (Requirement 1.4, **Section: My Orders Page**)  

3. Click the "Cancel" button for an order.  
   - Expect to be redirected to the order cancellation page. (Requirement 1.5, **Section: My Orders Page**)  

4. On the order cancellation page:  
   - Expect a pop-up window with a confirmation message and two buttons: "Confirm" and "Cancel." (Requirements 2.2, 2.3, **Section: Order Cancellation Page**)  

5. Click "Confirm."  
   - Expect to be redirected to the successful cancel page. (Requirement 3.1, **Section: Successful Cancel Page**)  

6. On the successful cancel page:  
   - Expect a pop-up window with a success message and a "View Orders" button. (Requirement 3.1, **Section: Successful Cancel Page**)  

7. For past orders:  
   - Expect to see a "View Restaurants" button that redirects the user to the Restaurant Page. (Requirement 1.7, **Section: My Orders Page**)  

---

## **Navigation Bar Feature**

### Context: User is not logged in

1. Observe the navigation bar.  
   - Expect to see a "Sign-In" button. (Requirement 1.10, **Section: Navigation Bar**)  
   - Expect to not see links for "Map," "Restaurants," or "My Orders." (Requirements 1.4, 1.5, 1.6, **Section: Navigation Bar**)  

2. Click the "Sign-In" button.  
   - Expect to be redirected to the Firebase authentication UI. (Requirement 1.11, **Section: Navigation Bar**)  

---

### Context: User is logged in

1. Observe the navigation bar.  
   - Expect to see links for "Map," "Restaurants," and "My Orders." (Requirements 1.4, 1.5, 1.6, **Section: Navigation Bar**)  

2. Click the "Sign-Out" button.  
   - Expect a popup indicating the user has successfully logged out. (Requirement 1.13, **Section: Navigation Bar**)  
   - Expect to be redirected to the Home Page. (Requirement 1.13, **Section: Navigation Bar**)  