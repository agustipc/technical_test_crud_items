# React / NextJS Single page Application

This is a [Next.js](https://nextjs.org/) project for a technical test with the following objective and requiremnts:

## Objective: 
Build a simple single page application using React or NextJS. This application should allow users to add items to a list, display the list, remove items from it and display a detail.

## Requirements:
1. Create Item Input
Provide some inputs where users can add the data of a new item.
Include a button to submit the data.
2. Display Items
Display a list of items on the page.
Each item in the list should be displayed as a separate element, e.g., within an `<li>` tag.
3. Remove Item
Each item in the list, include a button labeled "Remove" or use an icon.
Clicking the button should remove the item from the list.
4. Display detail Item
Each item in the list, include a button labeled "More info" or use an icon.
Clicking the button should display the selected item detail.
5. Optional: Use of Hooks
Candidates should use React Hooks for state management.





# 🚀 Getting Started

## Install dependencies
```bash
npm install
```

or use other package managers
```bash
yarn install
bun install
pnpm install
```

## Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:3000`.  |
| ⚙️  | `build`          | Build your production site to `./dist/`.      |
| ⚙️  | `preview`        | Preview your build locally, before deploying. |


## Desition Making

- The initial idea was to use actions and the "zod" library for the form handling and validation, but the requirements of the task specified the use of React Hooks, so I decided to use the "useForm" custom hook to manage the state of the form and the validation.

- For the validation of errors, I decided to use "null" when no error is present and a string when there is an error for the clarity of the state making it easier to understand that no error is present when the value is null.

- On the list item I decided to make it full clickable instead of only the button to make it more user-friendly.

- Use of a context to manage the state of the items and the selected item. With that, I have an easy way to update and access the state of the items and the selected item.

- Add accessibility to the form by using: 
  - `aria-label` to input fields to provide accessible descriptions
  - `aria-labelledby` to link the form with the title of the form
  - `aria-describedby` to link the error message with the input
  - `role="alert"` to the error message to make it clear that it is an error message for the screen reader
  - `htmlFor` to link the label with the input
  - `aria-live="assertive"` to ensure error messages are announced immediately
  -  Grouped related fields using `fieldset` and `legend` for better structure and accessibility
  - Adding `role="list"` to the `<ul>` to ensure it is recognized as a list by screen readers.
  - Adding `role="listitem"` to each `<li>` to ensure each item is recognized as a list item by screen readers.
  - Adding `aria-expanded` to each `<li>` to indicate whether the item is expanded or collapsed.
  - Adding `tabIndex={0}` and `onKeyPress` to each `<li>` to make list items navigable and selectable via the keyboard.
 

## Things to improve

As there is no much time to work on this project, there are some things that could be improved:

- Check if we want another type of input for the description
- Review code to identify reusable patterns and extract them to components for example the form input.
- Add a confirmation modal
- Use of localStorage or a database to store the items
- Internationalization