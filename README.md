# Tech News, Love Calculator, URL Shortener, and Email Validator API

This is a Node.js application that serves as an API to provide various functionalities, including scraping tech news, calculating love compatibility, shortening URLs, and validating email addresses. The API uses the Express framework and several external packages to achieve these functionalities.

## Prerequisites

Before running the application, you need to have the following installed:

- Node.js
- NPM (Node Package Manager)

## Setup

1. Clone the repository or copy the code into a file.
2. Open a terminal and navigate to the project directory.
3. Install the required dependencies by running the following command:
   ```
   npm install
   ```

## Endpoints

### 1. Tech News

This endpoint allows you to fetch the latest technology news from the BBC News Technology section or any other tech news website of your choice.

**Endpoint:** `/tech-news`

**Method:** GET

**Response:** An array of objects, where each object represents a news article with `title` and `link`.

### 2. Love Calculator

This endpoint calculates the love compatibility between two names using the 'love-calculator' package.

**Endpoint:** `/love-calculator`

**Method:** GET

**Query Parameters:**
- `firstName`: The first name (required)
- `secondName`: The second name (required)

**Response:** An object containing the `percentage` of love compatibility and a `result` string.

### 3. URL Shortener and Email Validator

This endpoint shortens a given URL using the Bitly API and validates an email address using the 'email-validator' package.

**Endpoint:** `/shorten-url-and-validate-email`

**Method:** GET

**Query Parameters:**
- `url`: The URL to be shortened (required)
- `email`: The email address to be validated (required)

**Response:** An object containing the `shortenedUrl` and `isEmailValid` properties.

## How to Run

1. Start the server by running the following command:
   ```
   node <filename>.js
   ```
   Replace `<filename>` with the name of the file where the code is saved.

2. The server will start running on `http://localhost:5001` (or the specified `PORT` if set in the environment).

## CORS Configuration

CORS (Cross-Origin Resource Sharing) is enabled for all routes in this application using the 'cors' package. This allows client applications from different origins to access the API.

## Note

1. For the URL shortening functionality to work, you need to replace `'YOUR_BITLY_ACCESS_TOKEN'` with your actual Bitly access token in the code.

2. The tech news scraping functionality is currently set to scrape news articles from the BBC News Technology section. If you want to fetch news from a different website, replace the `url` variable with the URL of your preferred tech news website.

3. Make sure to handle errors appropriately when using this API. The error messages and status codes provided in the responses can help identify any issues that may occur.

Feel free to customize and expand this code to fit your specific requirements or integrate it into your existing projects. Happy coding!