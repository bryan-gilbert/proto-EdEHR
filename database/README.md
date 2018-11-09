# Docker MongoDB Database

> Run Mongodb in a Docker container

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build

```

## Dev Server
Use the Node Express dev server to develop the model and API. 
Develop middle ware that can be placed in the main POC app


## LTI 
The following happens when a user clicks on an assignment in a LMS system that is linked to the EdEHR.

Students:
   - the LMS makes a post request with a message that contains the user's authentication and authorization information. This message also contains information about the course and activity.
   - The EdEHR receives the message and determines if it is valid. If not then a rejection message is sent back
   - Otherwise EdEHR looks to see if this user has visited before. If yes then it retrieves the user information. If not then it creates a user account and stores the basics of this persons information.
   - Then the EdEHR looks to see if this user has worked with the requested activity (assignment). If yes then EdEHR retrieves the information and allows the user to resume working with the assignment. Otherwise EdEHR sets up the user to do the assignment.
   
Instructors:
   - Same as for students regarding the User account.
   - Except for instructors the link to the activity does not take the user into the assignment but to a screen that lists all the users (students) who have worked on the assignment.
   
   
DB Queries

   - does a given user exist?
   - get the user information by user id
   - has this user worked on an assignment before?
   - does an activity exist?
   ... etc. TBContinues    