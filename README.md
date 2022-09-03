# Project Documentation

## Application Description
A simple chatroom application that mimicks other widely used applications such as Discord and Messenger. Users simply sign up with a username and password. After successfully registering or signing in, users are shown links to available Conversations and their profiles as well as a logout button.

Conversations are laid out similarly to Discord, with the senders name and avatar shown above their message. Users can click on messages they have sent to show buttons to delete the message or react to the message. Clicking on messages sent by others only shows the react button.

## Frontend Extensions
* Added support for querying a limited number of messages at once
* Added ability to delete and react to messages.
    * User clicks on a message and if it is their message, a delete and react button will show up under it.
* Added a logout button that logs out user and redirects them to landing page.
* Added persistent log ins so that user is not logged out if they refresh the page.
* Added the ability for users to react to their own and other messages from a list of 15 emojis.
    * Emojis are rendered under the message a user reacts to.

## Backend Extensions
* Modified Session schema so that it accepts passwords submitted by users.
    * Passwords are hashed with bcrypt before being sent to the database.
    * Added a new loginUser function in ./server/src/controllers/auth.js to make use of these passwords when verifying users.
* Updated Authorization process to use JWTs instead of the userID.
    * Created a secret phrase in the .env to store the validation token for JWT encryption/decryption.
* Modified getMessages function in .../controllers/messagse.js to also return information about the current conversation room.