# React Webserver

***

## Purpose: give students an interface that allows them to upload their plugin files to their group's servers, view their group members, and view the server address of their group server. 

***

## What you need to do

***

- Make sure react and npm are installed on your machine.
- You must first download all dependencies for the react-frontend directory. To do so, navigate to the directory and type **npm install**. The dependencies are not on the Github because they take too much space, and they can easily be recreated locally.
- Register the API backend site in the function getBackendSite under WebsiteMCGD/react-frontend/src/Header.js. Do this after you have the NodeJS backend set up, open to external API calls, and ready to go.
    - After you do this step, you will need to rebuild the frontend server before running it through serve. To do this, go to the react-frontend directory and type **sudo npm run build**.
    
***

## Helpful Information

***

It may be helpful to host this website 24/7 if possible, since it also holds the resources page for the students that can be used to reference lesson material and continue learning off-time. Alternatively, the official student resources site is always up, but note that it will contain future weeks and answers to all challenges.

When I was teaching this class, I hosted the website locally on a Raspberry Pi 4 and port forwarded my pi to the internet so that students could access the website anytime. However, there are definitely many other options that can work rather than hosting the webserver locally.