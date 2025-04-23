# Requirements

## Home Page

### Section 1: Home Page Introduction
- **1.1**: The home page must display the heading text: “Eat Well. Save Money. Reduce Waste.”
- **1.2**: The home page must include a short paragraph explaining the app’s mission to help users discover and reserve surplus meals from local restaurants.
- **1.3**: The home page must include a button labeled “Explore Now.”
- **1.4**: If the user is logged in, clicking the “Explore Now” button must redirect users to the Featured Restaurants section.
- **1.5**: If the user is not logged in, clicking the “Explore Now” button must have a popup describing the user must sign in to view other pages.
- **1.6**: The popup must have a button directing the user to sign in.
- **1.7**: The popup must have an “X” option to close the popup as well.

### Section 2: Featured Restaurants
- **2.1**: The home page must display at least three featured restaurants at once.
- **2.2**: Each featured restaurant must display a restaurant name, meal title, price, and a short description.
- **2.3**: Stretch goal: each featured restaurant card must include a button or arrow to view more restaurant options.
- **2.4**: Clicking on a featured restaurant must redirect the user to the individual restaurant’s detail page.

### Section 3: Our Mission
- **3.1**: The home page must display a section titled “Our Mission.”
- **3.2**: The mission section must include a paragraph describing the app’s goal to make surplus food accessible and reduce food waste.
- **3.3**: The mission section must include at least one image related to fresh food or sustainability.

### Section 4: About Us
- **4.1**: The home page must display a section titled “About Us.”
- **4.2**: The About Us section must describe the organization's origin, purpose, and how the platform works.
- **4.3**: The About Us section must include at least one image, such as a landmark (e.g., the Seattle Space Needle).

### Section 5: Partner Logos
- **5.1**: The home page must display a section titled “Meet the Partners Making It Possible.”
- **5.2**: The partner section must display logos from at least two distinct partners.
- **5.3**: Each partner logo must be visually distinct.

---

## Restaurant Pages

### Section 1: Restaurant Page Display
- **1.1**: When the user navigates to the restaurant page, the system must display a list of restaurant cards.
- **1.2**: Each restaurant card displayed must indicate the level of food surplus the restaurant has.
- **1.3**: The restaurant list must be scrollable so that additional restaurant cards become visible as the user scrolls.
- **1.4**: A banner section must be displayed below the navigation bar on the restaurant page.
- **1.5**: The banner section must display a title.
- **1.6**: The banner section must display a subtitle.
- **1.7**: The banner section must display a small description.

### Section 2: Restaurant Section
- **2.1**: Each restaurant card must display the restaurant name.
- **2.2**: Each restaurant card must display the price of the food available.
- **2.3**: Each restaurant card must display the dietary restrictions that the surprise box has (for example, vegetarian or gluten-free).
- **2.4**: Each restaurant card must display the type of cuisine offered (for example, Italian or Asian).
- **2.5**: Each restaurant card must display a general image representing the restaurant's food.

### Section 3: Restaurant Filter Functionality
- **3.1**: The restaurant page must display filter options on the restaurant display section.
- **3.2**: The filter options must allow the user to filter by dietary restriction (e.g. Vegan, Vegetarian, Gluten-Free, Nut-Free).
- **3.3**: The filter options must allow the user to filter by price range ($, $$, $$$).
- **3.4**: The filter options must allow the user to filter by cuisine type (e.g. Asian, Mexican, American).
- **3.5**: The system must update the restaurant display section when the user clicks the submit button to apply filters.
- **3.6**: The system must update the restaurant display section when the user clicks the clear button to remove filters.
- **3.7**: The system must retain the selected filters until the user explicitly clears them.
- **3.8**: Users must be able to select multiple filters simultaneously across different categories.
- **3.9**: Filters must use checkboxes with dropdowns.
- **3.10**: Clicking the Submit button is required to update results; no real-time filtering on click.
- **3.11**: If no restaurants match the selected filters, the system must display a "No results" message.

### Section 4: Restaurant Pop-Up Information
- **4.1**: When the user clicks on a restaurant card, the system must open a pop-up window displaying detailed information about the selected restaurant.
- **4.2**: The restaurant pop-up must display the restaurant name.
- **4.3**: The restaurant pop-up must display a short description of the restaurant.
- **4.4**: The restaurant pop-up must display the restaurant address.
- **4.5**: The restaurant pop-up must display the cuisine type of the restaurant.
- **4.6**: The restaurant pop-up must display the dietary options available for the surprise box.
- **4.7**: The restaurant pop-up must display the estimated pickup time for the food order.
- **4.8**: The restaurant pop-up must display a primary image representing the restaurant at the top of the pop-up.
- **4.9**: After the user clicks the “Order Now” button in the restaurant pop-up, the system must first display an order confirmation prompt asking the user to confirm or cancel the order.
- **4.10**: The order confirmation prompt must include a warning confirmation message.
- **4.11**: The order confirmation prompt must include two buttons: "Confirm" and "Cancel."
- **4.12**: The order confirmation prompt must include a confirmation message.
- **4.13**: The restaurant pop-up must include an “X” button that enables the user to close the pop-up.

### Section 5: Order Confirmation
- **5.1**: After the user clicks the “Order Now” button in the restaurant pop-up, the system must display an order confirmation pop-up.
- **5.2**: The order confirmation pop-up must display the restaurant name associated with the placed order.
- **5.3**: The order confirmation pop-up must display the confirmed pickup time for the order.
- **5.4**: The order confirmation pop-up must display a message confirming that the order was successfully placed.
- **5.5**: The order confirmation pop-up must provide a button labeled “View Restaurants” that the user can click to navigate back to the restaurant page.

---

## My Orders

### Section 1: My Orders Page
- **1.1**: After the user clicks the “My Orders” button on the Navigation bar, it must take them to the My Orders page.
- **1.2**: All their current and past orders must be shown on the page with information about the order status as well as order total and savings.
- **1.3**: For orders that haven’t been picked up yet, there must be additional information like pickup time, dietary notes, and location.
- **1.4**: Orders that haven’t been picked up yet must also have a cancel button.
- **1.5**: The cancel button must redirect the user to the order cancellation page.
- **1.6**: The page must also include a button to the metroflex website to direct users to it in case they need transportation help.
- **1.7**: The orders that have been picked up must have a button labeled “View Restaurants” that the user can click to navigate back to the restaurant page.

### Section 2: Order Cancellation Page
- **2.1**: The order cancellation page must have a small pop-up window.
- **2.2**: The pop-up window must have text as well as two smaller buttons labeled “Confirm” and “Cancel.”
- **2.3**: The cancel button must take the user back to the My Orders page.
- **2.4**: The confirm button must take the user to the successful or unsuccessful cancel page.

### Section 3: Successful Cancel Page
- **3.1**: The successful cancel page must have a small pop-up window with a message and a “View Order” button.
- **3.2**: The “View Order” button must take the user back to the My Orders page.

### Section 4: Unsuccessful Cancel Page
- **4.1**: The unsuccessful cancel page must have a small pop-up window with a message and a “View Order” button.
- **4.2**: The “View Order” button must take the user back to the My Orders page.

---

## Map Pages

### Section: Map Page Display
- **1.1**: The map must display highlighted service areas in color.
- **1.2**: The map must have restaurant location pins within highlighted areas.
- **1.3**: Users must be able to zoom in and out of the map.
- **1.4**: Users must be able to move the map showing area to the desired part.
- **1.5**: The location pins must be clickable.
- **1.6**: After clicking, there must be a small popup above the location pin.
- **1.7**: The popup must display the restaurant name.
- **1.8**: The popup must disappear when the user clicks the “X.”
- **1.9**: When a user clicks on the popup, the user must be redirected to the individual restaurant detail page.

---

## Sign-Up/Login Page

### Section: Sign-Up/Login Page Interface
- **1.1**: The sign-up page must display the heading text.
- **1.2**: The sign-up page must display a subtitle instructing users what to do.
- **1.3**: The sign-up page must include a Firebase authentication email UI.

### Section: Sign-Up/Login Page Functionality
- **2.1**: Users must be able to enter an email and password in the FirebaseUI form.
- **2.2**: Users must be able to confirm their password during sign-up.
- **2.3**: The Firebase UI must validate that the "Confirm Password" field matches the "Password" field.
- **2.4**: The Firebase UI must validate that the email input contains a valid email format (e.g., name@example.com).
- **2.5**: The Firebase UI must not allow submission if required fields are empty.
- **2.6**: Upon successful sign-in, a confirmation message such as "You are now signed in" must appear.
- **2.7**: Upon successful sign-up, users must receive a confirmation message (e.g., "Account created successfully").
- **2.8**: After successful sign-up or login, users must be redirected to the Home Page.
- **2.9**: The sign-up page must include a button labeled “Go to Homepage” that redirects users to the Home Page if already signed in.

---

## Navigation Bar

- **1.1**: The navigation bar must include a website brand name.
- **1.2**: The navigation bar must be visible on every page where navigation is required.
- **1.3**: The navigation bar must include a link labeled "Home" that navigates the user to the Home page.
- **1.4**: If the user is logged in, the navigation bar must include a link labeled "Map" that navigates the user to the Map page.
- **1.5**: If the user is logged in, the navigation bar must include a link labeled "Restaurants" that navigates the user to the Restaurant Page.
- **1.6**: If the user is logged in, the navigation bar must include a link labeled "My Orders" that navigates the user to the My Orders page.
- **1.7**: If the user is not logged in, the navigation links to anything other than Home must result in a popup describing that the user must sign in to view other pages.
- **1.8**: The popup must have a button directing the user to sign in.
- **1.9**: The popup must have an “X” option to close the popup as well.
- **1.10**: The navigation bar must include a Sign-in button if the user is not logged in.
- **1.11**: After clicking the sign-in button, the user must be redirected to the authentication Firebase UI.
- **1.12**: The navigation bar must include a Sign-out button if the user is logged in.
- **1.13**: After clicking the sign-out button, there must be a popup indicating that the user has successfully logged out, with a button that redirects the user to the Homepage.

---

## Footer

- **1.1**: The footer must be visible on every page of the application.
- **1.2**: The footer must display the company name.
- **1.3**: The footer must display the company contact information.
- **1.4**: The footer must include a "Need Help?" section.
- **1.5**: The footer must display a link labeled "Contact Us."
- **1.6**: Stretch goal: when clicked, this should navigate users to their email portal.
- **1.7**: The footer must display relevant social media links.
- **1.8**: The footer must display copyright information.

---

## Non-Functional Requirements

- All text must have acceptable contrast ratios as tested by WebAIM contrast checker.
- The application must be navigable with screen readers.
