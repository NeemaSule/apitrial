# Student Management API

## Project Description
This project implements a simple API to manage student and subject that a particular student undertaking a certain programme has to study throughout the years untill he or she graduates.
The API has two Endpoints(pecific URL (or route) on a server that an API provides to access certain resources or perform specific actions.).
Endpoint 1:
* `/students`:  Returns a JSON response containing a minimum of 10 students, with each student's name and enrolled program clearly listed.

Endpoint 2:
* `/subjects`: Returns a JSON response listing all subjects associated with the Software Engineering program, spanning from Year 1 through Year 4. The response clearly indicates the academic year for each subject.


## Setup Instructions

1.  **Install Node.js:** Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
2.  **Install XAMPP:** Download and install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/). Ensure MySQL is installed and running.
3.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)NeemaSule/apitrial.git
    ```
4.  **Navigate to the project directory:**
    ```bash
    cd apitrials
    ```
5.  **Install dependencies:**
    ```bash
    npm install
    ```
6.  **Configure the database:**
    * Create a database named `apitrial` in MySQL using phpMyAdmin or the MySQL command line.
    * Update the MySQL connection details in `trial.js` with your MySQL username (e.g., 'root'), password (e.g., ''), host (e.g., 'localhost'), and database name ('apitrial').
7.  **Import the SQL data (Optional):**
    * You can use the provided SQL insert statements (or create your own) to populate the `students` and `subjects` tables.
8.  **Start the server:**
    ```bash
    node trial.js
    ```

    ## Neccessary Configurations
    ### XAMPP
1.  *Open XAMPP Control Panel
2.  *Click Start on Apache and MySQL Module to start the service.
3.  *Make sure the services are running.

    ### Node.js
1.  *Open Command Promt or terminal and type 'nmp install'
2.  *Type 'npm install express' to install express.js
2.  *THen type 'npm init -y' to inializze Node.js
3.  *After writing the command 'node trial.js'. For my case trial.js is my file name, you can write your file name you created.
4.  *Make sure server is running.

## API Endpoints

### `/students`

* **Method:** GET
* **Description:** Returns a JSON array of student objects.
* **Response:**
    ```json
    [
        {
            "id": 1,
            "first_name": "Anna",
            "sur_name": "samm",
            "enrolled_program": "Software Engineering"
        },
        {
            "id": 2,
            "first_name": "Leah",
            "sur_name": "John",
            "enrolled_program": "Software Engineering"
        },
        // ... more students
    ]
    ```

### `/subjects`

* **Method:** GET
* **Description:** Returns a JSON array of subjects for the Software Engineering program.
* **Response:**
    ```json
    [
        {"id":1,
        "name":"Introduction to IT",
        "academic_year":1
        },
        {"id":2,
        "name":"Introduction to Programming",
        "academic_year":1
        }
        // ... more subjects
    ]
    ```

    ## Technologies Used

* Node.js
* Express.js
* MySQL
* Git
* GitHub

## Author

Neema Suleiman
