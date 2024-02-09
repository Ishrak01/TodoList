# TodoList

This is a simple Todo List application built using React. The application allows users to add, delete, and mark tasks as complete or incomplete. The state of the tasks is maintained locally using the browser's localStorage.

# Features

Add Task: Users can add new tasks by entering a task description and selecting a priority level (low, medium, or high).
Delete Task: Users can delete tasks individually by clicking the "Delete" button.
Complete/Incomplete Task: Users can mark tasks as complete or incomplete by clicking the "Complete" button.
Priority Indicator: Tasks are displayed with a color-coded priority indicator based on their priority level.

# Local Storage

The application utilizes localStorage to persist the tasks between browser sessions. The tasks are loaded from localStorage on component mount, and any changes to the tasks are automatically saved to localStorage.

# Components

Todo Component: The main component that holds the state for tasks and renders the Todo List UI.
State variables:
tasks: An array of task objects.
newTask: The description of the new task.
newPriority: The priority level of the new task (low, medium, high).
Functions:
addTask: Adds a new task to the list.
deleteTask: Deletes a task from the list.
toggleTaskStatus: Toggles the completion status of a task.
Effect Hooks:
useEffect to load tasks from localStorage on component mount.
useEffect to save tasks to localStorage whenever the tasks state changes.

# installation

Clone the repository: git clone [repository-url]
Navigate to the project directory: cd [project-directory]
Install dependencies: npx create-next-app@latest
Run the application: npm run dev
