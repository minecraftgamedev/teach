# MongoDB Database

***

## Purpose: Store server logs so that the react frontend can render the respective logs to the groups.

***

## What you need to do

***

Setup a MongoDB account under the free tier, and create a new database called mcgd so that the logs can be created automatically. You will also need to retrieve a link of your database that contains your username/password and put that in both the NodeJS environmental variable and the plugins folder of your student servers to interface with the database correctly. You can create the link on their website.

To get started, visit their website: [MongoDB](https://www.mongodb.com/)

***

## Helpful Information

***

It isn't required to use a MongoDB to teach this class successfully, but note that the existing infrastructure depends on the use of a MongoDB to function correctly, and changing this will require changing this internal infrastructure. Realistically the logs could've been stored in the Local Database as well as the other files, but at the time I was figuring out how to use MongoDB and wanted this to be a learning experience for me. Thus, it's integrated into this system.

Note that the student server's plugins will not turn on correctly unless the mongo-database key under plugins/TeamChallengeMCGD/config.yml is completed correctly.