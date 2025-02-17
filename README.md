# Household Tasks Marketplace

## Overview

Household Tasks Marketplace is an online platform where users can post household tasks such as electrical repairs, plumbing work, and other home services. Other users can contact task owners directly to offer assistance. This project is built using Laravel for backend React for frontend and Inertiajs is the glue. Explore the live project: [Household Tasks Marketplace](https://kajki.hasib.info)

## Features

### 1. Task Management

- **Post Tasks**: Users can post tasks they need help with, including details and contact information.
- **Browse Tasks**: View available household tasks categorized by type.
- **Task Search**: Search for tasks based on keywords, categories, or locations.

## Installation & Setup

### Prerequisites

- PHP (>=8.2)
- Composer
- Nodejs (>=18)
- npm (>=10)
- MySQL
- Apache

### Steps

1. Clone this repository:
   
   ```bash
   git clone https://github.com/mehedihasanhasib/kajki.com.git
   ```

2. cd into project directory
   
   ```bash
   cd kajki.com
   ```

3. install composer dependencies
   
   ```bash
   composer install
   ```

4. copy env-example
   
   ```bash
   cp .env-example .env
   ```

5. configure database credentials
   
   ```bash
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=kajki.com
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. migrate database
   
   ```bash
   php artisan migrate --seed
   ```

7. generate key
   
   ```bash
   php artisan key:generate
   ```

8. install npm dependencies
   
   ```bash
   npm install
   ```

9. run the development server
   
   ```bash
   composer run dev
   ```

Access the system at `http://localhost:8000`
