Trustana Front-end Engineer Assignment
======================================

Assignment Description
----------------------

As a Front-end Engineer at Trustana, you'll be spending a lot of time building UI. Take a look at the following webpage (under Design mockup) and think about how to build it in code. Extra points will be given for clean code, attention to detail, responsiveness, and reusable components.

We have a list of items which needs to be displayed to the user. The list of items are to be grouped by their category and displayed in tabs, each tab will display items from one category.

-   Clicking on each tab will show the respective items in each category.
-   The first tab is always selected by default on load.
-   The list of items will be hardcoded based on content in the Figma mockup.
-   Hardcoded data in the webpage will then be replaced with data loaded from a GraphQL API endpoint.
-   The items are to be displayed in a grid layout and wraps to the next row when space runs out.
-   Each item will contain an item name & item image.

### Technical requirements:

-   You should use the following tools to complete this assignment:
    -   ✅ ReactJS
    -   ✅ CSS (any flavour you prefer)
    -   ✅ Typescript
-   You're not allowed to use:
    -   ❌ Any ReactJS framework (eg. NextJS, GatsbyJS)
    -   ❌ Any UI framework for the Tabs component (eg. React Bootstrap, Material UI)
-   You may use:
    -   ❓ A CSS framework
    -   ❓ Google, however, do not copy code without understanding as you'll be asked to explain them during the presentation.
-   The webpage needs to be mobile responsive (minimum 375px width).
-   Supported browsers:
    -   Google Chrome (latest version)
    -   Safari (latest version)
    -   Firefox (latest version)

### Design mockup:

1.  To access the design mockup, you'll need to have a Figma account. Sign up for one here: [www.figma.com](https://www.figma.com/) 
2.  There is no need to request for access to the design mockup, however, if you have problems accessing it, do reach out to us.
3.  After you're logged in to Figma, you'll be able to see the design specifications as well as export the image assets.
4.  Figma Link: <https://www.figma.com/file/O4bnaYHQrnryIaak9zvpkW/Front-End-Assignment>

<img width="600" alt="image" src="https://user-images.githubusercontent.com/7578460/147054394-77fbddf7-548b-403c-8446-47bcde3b0533.png">

### Submission Instructions:

1.  Click on the `Use this template` button at the top of this page to create a new repository based on this one.
2.  Ensure that your repository is set as public.
3.  When you start on a task, create a branch for each of them (eg. task-1, task-2).
4.  Commit your code regularly to this repository as if you were working on an actual project.
5.  Once the assignment is complete, send us a link to the Github repository.

Task 1 - User Interface
-----------------------

1.  Create your ReactJS project.
2.  Build the webpage as shown in the Figma mockup.
3.  Create a mock data object based on the content in the Figma mockup.
    1. There are no items in the second and third tabs.
5.  ⚠️ Note: You're not allowed to use any JS libraries or CSS frameworks for the Tabs component, meaning the styling and logic should be written from scratch.
6.  Tabs logic:
    1.  Clicking on each tab will show the respective items in each category.
    2.  The first tab is always selected by default on load.
7.  The webpage is meant to be displayed on a desktop/laptop computer (minimum 1280px width).

Task 2 - Mobile Responsive
--------------------------

1.  Adapt the webpage created in Task 1 for devices with smaller screen sizes such as tablets and smartphones.
2.  The webpage needs to be displayed without any layout issues on screen sizes as small as 375px width.

Task 3 - GraphQL
----------------

1.  Hardcoded data in the webpage will be replaced with data loaded from a GraphQL API endpoint.
    1.  We want to display a list of past Space X launches.
    2.  The list of past Space X launches will be categorised based on the launch site name.
2.  Data will be retrieved via the SpaceX Land GraphQL API: <https://github.com/spacexland/api> 
3.  There will be 3 tabs, each containing past launches from the following launch sites:
    1.  CCAFS SLC 40
    2.  VAFB SLC 4E
    3.  KSC LC 39A
4.  Each item will contain the following information:
    1.  A photo of the launch (if available)
    2.  The launch mission name
    3.  Date & time of the launch
    4.  The name of the rocket used
5.  Each tab will contain up to 10 items, there is no need to display the remaining items.

Bonus Tasks
-----------

These tasks are completely optional, however, you may attempt them as a challenge 🤓

1.  Implement pagination to display more than 10 items per category.
2.  Implement sorting to sort the items displayed.
3.  Save the application state so that when the user visits the page again, it remembers which tab/page/sort they are on.

