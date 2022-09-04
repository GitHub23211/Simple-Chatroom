# Project Documentation

## Application Description
A simple chatroom application that mimicks other widely used applications such as Discord and Messenger. Users simply sign up with a username and password. After successfully registering or signing in, users are shown links to available Conversations and their profiles as well as a logout button.

Conversations are laid out similarly to Discord, with the senders name and avatar shown above their message. Users can create their own conversations or click on existing ones.Once in a conversation, Users can click on messages they have sent to show buttons to delete the message or react to the message. Clicking on messages sent by others only shows the react button. Clicking on the react button brings up a list of 15 emojis that a user can click on to attach to that message.

Users can change their username, password, avatar and bio by clicking on their username in the nav bar. Avatars are generated thanks to Robohash.

## Notes to the Markers
Please use any of the following accounts to log in:
* Username: bob, Password: 123
* Username: mary, Password: 123
* Username: connor, Password: 123

or register your own to access the site. 
Please note usernames are NOT case-sensitive so Bob, BOB, and bob are the same username.

## Frontend Extensions
* Added support for querying a limited number of messages at once
* Added a logout button that logs out user and redirects them to landing page.
* Logging in or successfully registering now redirects the user to the Conversations list.
* Added persistent log ins so that user is not logged out if they refresh the page.
* Added the ability for users to react to their own and other messages with an emoji chosen from a list of 15 emojis.
    * Emojis are rendered under the message a user reacts to.
* Added the ability for uers to edit their username, passwords, bio, and avatar.
    * Users cannot directly upload their own avatar but must submit a string which is then appended to https://robohash.org/ to generate a unique avatar for them.
* Other users' names in a conversation links to a profile page that shows their avatar, name and bio.

## Backend Extensions
* Modified Session schema so that it accepts passwords submitted by users.
    * Passwords are hashed with bcrypt before being sent to the database.
    * Added a new loginUser function in ./server/src/controllers/auth.js to make use of these passwords when verifying users.
* Updated Authorization process to use JWTs instead of the userID.
    * Created a secret phrase in the .env to store the validation token for JWT encryption/decryption.
* Modified getMessages function in .../controllers/messagse.js to also return information about the current conversation room.
* Modified Message schema to hold a "reaction" object that stores a String for the emoji and an Int to store the number of times that emoji has been selected.
* Modified Session schema so that it now holds a bio field and avatar field.
