# Django React To-Do App

A simple To-Do application built with Django on the backend and React-Vite on the frontend. This app allows users to manage their tasks, add new to-dos, mark tasks as completed, and delete tasks.

## Features

- Add new tasks with a title, description, and completion status.
- Mark tasks as completed.
- Delete tasks from the to-do list.
- User-friendly interface with a clean and responsive design.
- Integration of Django for backend logic and React-Vite for dynamic frontend updates.

## Technologies Used

- **Django:** A high-level Python web framework used for the backend.
- **Django Rest Framework:** A powerful and flexible toolkit for building Web APIs with Django.
- **React-Vite:** A JavaScript library for building user interfaces.
- **React Hooks:** Used for state management in functional components.
- **Fetch API:** Used for making asynchronous requests to the Django backend.
- **Bootstrap:** Frontend framework for responsive design and styling.

## Getting Started

### Prerequisites

- [Python](https://www.python.org/) (3.6 or higher)
- [Node.js](https://nodejs.org/) (for npm)
- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Wandati/django-react-todo-app.git
   cd django-react-todo-app
   ```

2. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Migrate the database:

   ```bash
   python manage.py migrate
   ```

4. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

5. Run the development server:

   ```bash
   python manage.py runserver
   ```

   This will start the Django development server on `http://localhost:8000`.

6. In a separate terminal, navigate to the `vite-project` directory and start the React app:

   ```bash
   cd vite-project
   npm run dev
   ```

   This will start the React development server on `http://localhost:5173`.

7. Open your web browser and go to `http://localhost:5173` to view the app.

## Usage

- Open the app in your browser.
- Add new tasks by entering a title, description, and completion status.
- Mark tasks as completed by clicking the checkbox.
- Delete tasks by clicking the delete button next to each task.

## License

Copyright (c) Marvin Wandati
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments

- This project was created as part of a learning experience for Django and React development.
- Inspired by various to-do applications and tutorials available online.
