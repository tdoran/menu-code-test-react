Submission for OpenTable Front-End Test
========================

Thanks for checking out my submission for the OpenTable Tech Test!

To access the application, please visit: https://nifty-stonebraker-40cf80.netlify.com/

## To-do:

- **Test implementation**:
    - There are currently no tests written for the app (explained below). This is really not a good situation to be in, and shouldn't be deployed in this state. Tests should be written for both components and util function. If Redux is implemented, tests for selectors should also be written. E2E tests should ideally alos be written.
- **UI update**:
    - The UI is basic and needs development.
- **Major refactor**:
    - **Modularisation** of components. The entire app is essentially contained within one component at the moment. This is not sustainable or scalable, and does not allow for reuse of components.
    - **Util function**s - there is a lot of logic being written on the fly to check the various criteria to order. This should really be re-written into **pure utility functions**, that can be **discreetly tested**.
- Improve **user feedback**: 
    - Regarding submission of order (currently using `alert()`), and current stage of order (currently simply displaying text `Order pending` / `Order complete`)

## My approach

### Packages and tools used
 A key decision was what packages to use in for the app. For example: 
 - CSS-in-JS for styling?
 - Tools beyond React for state management?
 - Which testing frameworks?

I opted to use **styled-components** for ease of code-reading and for reusability of components.

I decided not to use state-management tools like **Redux** for state management. I thought its implementation, and the  file structure would add more unneccessary complexity than it would add value to a project of this size. However, it would certainly be something worth looking at implementing in the future for a more scalable project, assuming this was to be integrated into a larger app.


I opted for **Jest** and **react-testing-library** for testing. However, I ran into issues running Jest with the current babel configuration, and as such, the project in its current state does not have tests. This is certainly something that needs rectifying, and would be high priority in my next steps, working on this app. My decision to put tests to one side, and focus on creating a functioning app was time-based: I could see that the issues I was running into could end up swallowing valuable time that could be spent designing the app. My plan was to come back to add utility tests at minimum, but I regretfully ran out of time. **Working on actual production code, merging and deploying something without tests is not something I would ever normally do**. 

**Eslint** was also used to highlight errors and for some styling consistency. However, I am not currently satisifed with the setup, and this would benefit from further fine-tuning and integration with something like **Prettier**

## UI Design

At this satge, the visual design app itself is very bare-bones. The buttons are largely unstyled, and there is minimal visual structure and colour. 


## Progress

Rules:

- [x] Each person must have at least two courses, one of which must be a main. 
- [x] Each diner cannot have more than one of the same course.
- [x] There is only one piece of cheesecake left.
- [x] Pierre the snobby waiter will not let you have prawn cocktail and salmon fillet in the same meal.


## Acceptance criteria

- [x] The total bill amount is displayed when at least one dish has been selected.
- [x] An error message is displayed when I try to select an invalid menu combination.




