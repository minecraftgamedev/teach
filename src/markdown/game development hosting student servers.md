# Hosting Student Servers

***

## Purpose: Allow students to individually work on plugins in small groups. This requires hosting multiple servers simultaneously and interacting with them quickly (automatically) to update their plugins. 

***

## What you need to do

***

You will need to setup the student servers so that each group can test out their plugins.

There are typically two ways to host the student servers:

1) Host all the servers locally on one machine. This requires a strong internet connection, as well as a powerful computer that is able to manage all the servers at once. Depending on the number of groups, this option may be easier. 
    - If you are hosting the servers all locally on one machine, you will need to supply the students with separate ports so they can all connect to your computer at once into different servers.

2) Host the servers remotely and access them via ssh. This is helpful if the local internet connection isn't strong enough to support all students at once, or the local machine cannot host all servers at once computationally. This requires knowledge of ssh and scp to access and transfer files, however.
    - If you are hosting the servers on separate remote machines, make sure you can access the ports of each machine. This will be used to allow the students to connect to each server. Typically, this will also allow you to have all servers on the default port of 25565 rather than on random ports.

Additionally, you need to configure the plugins/TeamChallengeMCGD/config.yml file to give a valid **mongo-database** field. This is so the LiveStatsDatabasePlugin can send server logs to the MongoDB to be used on the frontend website. This should be the same as the link you put in the NodeJS environmental variable for the backend.

***

## Useful Information

***

If you are teaching a class under MIT, you may find it helpful (as I did) to ask the XVM group at MIT, under the SIPB wing, to borrow virtual machines to use as student servers. I was able to borrow 8 separate virtual machines with 2 GB RAM each to host 8 group servers over the summer, and I interfaced with the servers automatically through scripts after I had manually set up SSH for them all. You can contact XVM through their email: **xvm@mit.edu**.