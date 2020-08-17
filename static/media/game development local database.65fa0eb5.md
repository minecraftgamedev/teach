# Local Database

***

## Purpose: Store data about each week's challenge, and store whether the challenge is active. Additionally, store group data, username data, login data, and challenge descriptions.

***

## What you need to do

***

The master template under the "Teaching Game Development" tab should contain the basic LocalDatabase structure. When you receive your student roster, you must fill in the three files with the correct data:

- loginData.json will register usernames and passwords for students. You can choose their username/password combination, but it is recommended for cookiePassword to insert a random UUID, since this will be their alternative way of logging in through cookies.
- userData.json will associate the student's usernames with their real name and Minecraft username (case sensitive). This is shown on the react frontend website, and is used to whitelist group servers automatically.
- groupData.json will place usernames in groups together, and give them a server address to connect to that will be shown on the react webserver.

Additionally, you will need to alter the ChallengeDescriptions/activeChallenge.json file to set the challenge to active/inactive and set the challenge level from 1-6.

Finally, just for challenge 6, you will need to set the ending time for the arena challenge under the challenge6endtime.json file. For me, the timing is in PDT, but you should check accordingly and test it out beforehand to make sure the timing is correct for that level for you.

***

## Helpful Information

***

The local database was created because I was lazy to store everything on MongoDB or an alternative database. Additionally, I wanted to be able to edit these files quickly, so a local database made sense for me. If you would like, you can instead store this all on a separate database for use. Note that by doing so, you will need to revise the API bindings to these files in the backend API.