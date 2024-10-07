
<h1>Pomodoro Timer Application</h1>
<p>This project is a Pomodoro Timer application built using Node.js, Express.js, MongoDB, and EJS templates. It allows users to manage their tasks using the Pomodoro technique, where tasks can be created, updated, deleted, and tracked through a timer system. The application also handles task status changes and breaks between work periods.</p>

<h2>Features</h2>
<h3>User Side:</h3>
<ul>
    <li>Create, update, and delete tasks.</li>
    <li>Start and stop the Pomodoro timer for the current task.</li>
    <li>View the current task, pending tasks, and completed tasks.</li>
</ul>

<h3>Pomodoro Timer Functionality:</h3>
<ul>
    <li>Move tasks between different sections: `Current`, `Pending`, and `Completed`.</li>
    <li>Timer only starts when a task is present in the `Current Task` section.</li>
    <li>Tasks in `Current Task` are restricted, no new tasks can be added while one is active.</li>
    <li>Automatic break period of 5 minutes after task completion.</li>
    <li>Tasks automatically move to `Completed` after the Pomodoro session and break.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/Digvijayjakhaniya/Pomodoro-timer-ExpressJs.git </code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd Pomodoro-timer-ExpressJs</code></pre>
    </li>
    <li>Install the necessary dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Create a `.env` file:
        <pre>Add `PORT` and `DATABASE_URL` in the .env file.</pre>
    </li>
</ol>

<h2>Usage</h2>
<p>To start the application, run:</p>
<pre><code>npm start</code></pre>
<p>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:8000</a> (if PORT = 8000) to use the Pomodoro Timer application.</p>

<h2>Project Structure</h2>
<pre><code>
Pomodoro-Timer/
│
├── controllers/
│   └── timerControllers.js
|
├── Db/
│   └── connection.js
│
├── models/
│   └── timerModel.js
│
├── routes/
│   └── web.js
│
├── public/
│   ├── CSS/
│   │   ├── style.css
│   │   ├── bootstrap.css
│   │   └── bootstrap.min.css
│   │
|   ├── Images/
|   |
│   └── JS/
│       ├── timer.js
│       ├── bootstrap.js
│       └── jquery.js
│
├── views/
│   ├── includes/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
|   ├── tasks/
│   │   ├── create.ejs
│   │   └── edit.ejs
│   |
|   └── index.ejs
│
├── index.js
├── package-lock.json
├── package.json
└── README.md
  </code></pre>

<h2>Endpoints</h2>
<h3>User Endpoints:</h3>
<ul>
    <li><code>GET /</code> - View all tasks (current, pending, and completed).</li>
    <li><code>GET /tasks/create</code> - Add a new task.</li>
    <li><code>POST /update/:id</code> - Update an existing task.</li>
    <li><code>DELETE /delete/:id</code> - Delete a task.</li>
    <li><code>GET /select/:id</code> - Select task for start timer</li>
   <li><code>POST /update-task-status</code> - Automatically update task status to Completed.</li>
</ul>

<h2>Dependencies</h2>
<ul>
    <li><code>express</code> - Fast, unopinionated, minimalist web framework for Node.js.</li>
    <li><code>mongoose</code> - MongoDB object modeling tool designed to work in an asynchronous environment.</li>
    <li><code>ejs</code> - Embedded JavaScript templating.</li>
</ul>

<br><br><hr>
<footer class="card-footer bg-white pt-2">
    <p>© 2024 Made with 🤍 by <a href="https://digvijay.rf.gd" target="_blank" class="link-danger page-link alert-link d-inline">Digvijay Jakhaniya</a></p>
</footer>
