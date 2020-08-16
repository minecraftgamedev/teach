# Teaching Game Development

*** 

### If you haven't already, please check the "Should I Teach Minecraft Game Development?" tab to learn if you will be able to/willing to teach this portion of the class in the same way that it was originally taught.

***

Teaching Minecraft game development comes in multiple parts:

- You will be teaching the students how to use the Spigot plugin API. For ease of use, I made the students install IntelliJ IDEA so that the Spigot library could be easily downloaded through Maven and the Spigot documentation could be easily viewed within the IDE.

    - It is helpful to enable code zooming to help the students see the code that you are typing on screen. Remember that bigger is better for the students!
    
    - The material to teach for each week can be viewed under the tab "Additional Development Content" -> "Game Development Lesson Plans".
    
- During the challenge component, you need to manage a number of items so that the students will have servers in which they can code for and view their code executed in real-time.
   
   - View below for pre-class procedures.
   
***

## What to do before the first class

***

**This is required to replicate the real-time challenge environment for the students. If you are planning to do a separate activity, this preparation is not necessary.**

You need to set up a number of things before the first class. Specifically, make sure you have the following prepared to run on day one:

- A React webserver, hosted on a website URL that is accessible by the students
    
    - Although it is not the best method, what I ended up doing was hosting the frontend locally on my Raspberry Pi at home for the 6 weeks that class took place. I port forwarded the Pi's ports so that the website was accessible on a pseudo-name: mcgamedev.port0.org.
    
- A NodeJS backend site, hosted and port forwarded so that the React webserver can access it

    - For me, I hosted the backend on port 3075, but it could be held on any port that is not the main port 80.
    
- Enough Minecraft servers to handle the number of students that you will be teaching

    - In our case, we ended up teaching 25 students, which was too much for my local machine to be able to handle on Minecraft servers at any one time. Therefore, we got in contact with XVM at SIPB, and they kindly lent us 8 virtual machines so that we could run 8 servers of 2 GB of RAM each to host each server on.
    
    - If you end up doing a similar process, note that you need to be familiar with SSHing into each VM so that you can automatically route the uploaded plugins from the backend API point to the respective group's server. More details on this can be found below.
    
- A local database, unless you can host it in another form

    - I hosted a LocalDatabase folder in my local machine to hold information on the student groups, student names, and login information for the frontend server. Additionally, I had files for each challenge that described the challenges as well as whether the challenge is currently active, which can be switched by switching a JSON boolean from false to true.
    
    - The local database was all connected to the backend API, which allowed access to all the files' data.
   
- You need a MongoDB database setup so that each server's logs can be uploaded and viewed by the react frontend. Alteratively, you can also create a new API endpoint in the backend to append and retrieve logs, but when I was creating this class, I used a MongoDB database so much of the existing infrastructure is based on this assumption.

    - Creating a MongoDB database is free, and the paid tiers are beyond what is necessary for this class.
   
For more information on how to replicate each section, view the respective tab on the left under "Additional Development Content". Start by downloading the master copy below, which should set almost everything up for you (assumes you are on a Linux machine or support .sh files; otherwise, you will need to translate to your operating system)!

***

## Game Development File Templates

***

Below is a list of what you need to download and/or have ready before the first class. Most should be ready-to-use upon download, but some may need you to set them up/understand how to use them under "Additional Development Content".

* MASTER COPY: all at once: [Link]() - Coming Soon

Includes:

1) React Frontend Template

2) Nodejs Backend Template

3) Student Server Template

4) Automated Server Scripts (View how to use these files effectively under "Additional Development Content" -> "Automated Server Scripts")

5) Includes Challenge World Templates

6) PluginVerifier program

All of the files are in relative order, so they should work out-of-the-box.

***

## What to do before class starts

***

You will need to have the following items started before the students start the challenge (preferably set this up before class starts):

- The frontend webserver should be up and running. This is the website that the students will use to upload their plugin files onto their group's server.

- The backend server should also be up and running. This will allow the students to upload their plugin files onto the frontend website so that it can be transferred to their respective group's server.

- All student servers should be up and running. See above for one way to manage multiple servers at once. The backend will be in charge of transferring the plugin files into jar files, then transferring them to the respective group's server to be loaded and enabled.

***

## What to do when it is time to start the challenge

***

When it is time to start the challenge, you should enable the challenge through the activeChallenge.json file in your local database. Switch the "active" key from false to true, and the backend will notify the frontend of the changes and allow the players to upload their code.