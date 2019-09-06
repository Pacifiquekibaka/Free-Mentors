# Free-Mentors

[![Build Status](https://travis-ci.org/Pacifiquekibaka/Free-Mentors.svg?branch=develop)](https://travis-ci.org/Pacifiquekibaka/Free-Mentors) [![Coverage Status](https://coveralls.io/repos/github/Pacifiquekibaka/Free-Mentors/badge.svg?branch=develop)](https://coveralls.io/github/Pacifiquekibaka/Free-Mentors?branch=develop)

Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions.

HOSTED UI template: https://pacifiquekibaka.github.io/Free-Mentors/UI/html/

Pivotal Tracker link: https://www.pivotaltracker.com/n/projects/2385089

Follow the following instructions to Get this project, open your terminal then write:

https://github.com/Pacifiquekibaka/Free-Mentors.git

To run the API, Install the required dependencies found in package.json by running this command:

npm run install then 

npm start

to run test in terminal:

npm test



Required Features

a. A page/pages where a user (client) can do the following:

i. Sign up.

ii. Sign in.

iii. View mentors.

iv. View a specific mentor.

v. Create a mentorship session request with a mentor.

b. A page/pages where an admin can do the following:

i. Change a user to a mentor.

c. A page/pages where a mentor can do the following:

i. Accept a mentorship session request.

ii. Decline a mentorship session request.

THE END POINT OF THE PROJECT

| HTTP MEHOD  | ENDPOINTS                     | DESCRIPTIONS                    |
| :---        |    :----:                     |    ---:                         |
|  POST       | /api/v1/auth/signup           | Creating an account for user    |
|  POST       | /api/v1/auth/signin           | Login In                        |
|  GET        | /api/v1/mentors               | get all mentors                 | 
|  GET        | /api/v1/mentors/:id           | get specific mentor             | 
|  POST       | /api/v1/sessions              | create mentorship session       |                 

Frontend

HTML
CSS and 
Javascript 

Backend

NodeJs
Express JS

Other Used Tools

Linter
ESLint - Linter Tool

Babel ,compiles ES6

Mocha framework

Joi for validations

For testing api Run :

npm test 
            
-Developer:
Pacifique Kibaka
