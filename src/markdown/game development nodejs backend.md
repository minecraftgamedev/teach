# NodeJS Backend

***

## Purpose: Interact with React frontend to download student plugins and pass them to the group server to be loaded. Additionally, provide an API endpoint to allow group server plugins to discover group data needed for the challenges.

***

## What you need to do

***

- If you haven't already, you should have NodeJS installed to your machine. You can start by visiting their website here: [NodeJS](https://nodejs.org/en/)
- Configure the .env file and include the link to your MongoDB database after **DATABASE=**. The link should start with mongodb+srv://

***

## Helpful Information

***

You will need to be able to expose this backend to the internet. That may mean port forwarding your local machine via the backend port (default 3075) to the internet so that the API can be accessed by the frontend website and the student servers successfully.

When I was teaching this class, I turned on the backend whenever class started on my local machine and turned it off after class ended, since the students do not need to utilize the backend unless they are participating in the challenge. Unlike the frontend webserver that holds the student resources, it makes less sense to host this indefinitely, but it can be done.