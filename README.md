# Cubicle-SoftUni-Workshop

The Cubicle Project is a web application developed for SoftUni, allowing users to create and manage Rubik cubes along with accessories. It uses Express.js, Handlebars, Bcrypt, Jsonwebtoken, Cookie-parser, and Mongoose.

## Features

- **User Authentication:**
  - Register, log in, and log out securely.
  - Bcrypt is employed for password hashing to ensure user data security.

- **Rubik Cubes:**
  - Create Rubik cubes and view them on the main page.
  - Only the cube creator can edit or delete it.
  - Other users can view cube details and attach accessories to it.

- **Accessories:**
  - Create accessories for Rubik cubes.
  - Attach accessories to a specific cube.

## Technologies Used

- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **Handlebars:** A templating engine to generate dynamic HTML content.
- **Bcrypt:** A library for securely hashing passwords.
- **Jsonwebtoken:** Authentication tokens for secure user sessions.
- **Cookie-parser:** Parse and handle cookies in Express.
- **Mongoose:** MongoDB object modeling for Node.js.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone[ https://github.com/SlaviHristev/Cubicle-SoftUni-Workshop ].
