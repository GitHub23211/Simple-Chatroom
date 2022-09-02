# Project Documentation

## Frontend Extensions
* Added support for querying a limited number of messages at once
* Added ability to delete and react to messages.
    * User clicks on a message and if it is their message, a delete and react button will show up under it.
* Added a logout button that logs out user and redirects them to landing page.
* Added persistent log ins so that user is not logged out if they refresh the page.

## Backend Extensions
* Modified Session schema so that it accepts passwords submitted by users.
* Passwords are now hashed with bcrypt before being sent to the database.
    * Added a new loginUser function in ./server/src/controllers/auth.js to make use of these passwords
* Updated Authorization process to use JWTs instead of the userID.
    * Created a secret phrase in the .env to store the validation token for JWT encryption/decryption.