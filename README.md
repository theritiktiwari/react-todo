# React TODO App
This is a simple TODO App built with React. It allows users to add, delete, and update tasks.

## Features
To use the app, follow the instructions below:

- **Add a task**
  - User can add a task which will be displayed in the list
  - Task will be stored in the local storage.
  - Empty task cannot be added.

- **Complete a task**
  - User can mark a task as completed by clicking on the appropriate button.
  - Completed tasks will be hidden from the list and can be viewed by clicking on the appropriate button.
  - The time will be displayed when the task was completed.
  - User can revert the task to the incomplete state by clicking on the appropriate button.

- **Edit a task**
  - User can edit a task by clicking on the edit button.
  - The task details will be displayed in the input box.
  - User can update the task and save the changes.
  - User can cancel the changes by clicking on the cancel button.
  - Saving the task with empty details will not update the task.
  - Saving the task with the same details will not update the task.

- **Delete a task**
  - User can delete a task by clicking on the delete button.
  - User will be prompted to confirm the deletion of the task.
  - User can cancel the deletion by clicking on the cancel button.

## Installation
1. Clone the repository
```bash
git clone git@github.com:rtCamp/trainee-ritik-tiwari.git
```

Switch the branch to `react-assignment`
```bash
git checkout react-assignment
```

2. Install the dependencies
```bash
npm install
```

3. Start the app
```bash
npm run start
```

4. Open the app in your browser at `http://localhost:3000`
