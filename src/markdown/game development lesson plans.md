# Game Development Lesson Plans

***

Below, you can view a quite comprehensive version of the notes that I used for every lesson. Essentially, you are viewing an outline of how each development portion worked out.

This section is particularly helpful if you want to teach game development with or without the challenge component, as the lesson and the challenge is separated for each week.

***

## Week 1 Content: How to make a basic plugin with listeners

***

### Lesson Outline

- Either: follow along and take notes of important parts, or code along with me when I am coding stuff. NOTE that most code is on resources page, so learn concepts (why) more than the how. I will have to go quick, though for time.
- What is a plugin? (1 minute)
    - Examples: concrete event→actions, server examples with full-fledged games
    - By the end of class today, you’re going to learn how to make a basic plugin to solve a team challenge as a group
- Dev Environment: (3 minutes)
    - IntelliJ and Java: what MC is coded in
    - Spigot is our interface/Java library to Minecraft’s mechanics (allows us to listen to events: ex: when block breaks)
    - Show my screen for IntelliJ dialog, tell them feel free to follow along if you’d like, however you’d like to learn
    - Our goal this week is to let you guys code plugins as fast as possible, so the details of how to exactly go from code to Minecraft will be described next week when we have more time. For now, you can treat the process as a black box and we will look inside on week 2.
- Overview of Plugin (10 minutes)
    - Defining a Minecraft plugin:
        - Identifying information: you need the Spigot library/API, that’s taken care of by our personal assistant Maven that currently is hiding in a black box
        - You need the main class. In this case, since we’re not running it ourselves, we don’t use a public static void main method. This is because Spigot will be running the main method, and they just need methods to access our plugin
        - JavaPlugin class is our main class. Essentially we need to extend this class, JavaPlugin, because it allows us to override a few methods and be like “our plugin exists!!!”; onEnable is called when the server starts, onDisable when the server ends
        - Now, let’s look at the EventListener class
        - This class implements a Listener class. Essentially, this class will be where we will register our events. We call registering an event “listening” to it, because we are basically “listening” into the game to see when something happens, like when any player breaks a block.
        - Let’s see this example event that is already typed in here:
            - There’s a way to define an event:
                - You need this annotation, @EventHandler. If you don’t know what an annotation is, don’t worry about it too much right now, but it basically labels this method as a method that will be listening to an event
                - You register an event as “public void NAME” then supply ONE parameter, which is the class of your event that you want to register. In this case, It’s PlayerJoinEvent, then a name, in this case I just named it event
                - Now this event is being listened to!
                - OK last thing, these two classes don’t know each other exists right now. To fix that, we just have to tell the main class that this class is a class that is listening to events and register it, as so.
                    - We pass in two parameters: an instance of our listener class and our main class itself, which we can access by typing in “this”.
                - All good so far? Any questions?
- Let’s try to make our own event. Our goal is the following: diamond’s hard. We want sheep to drop it when we shear it! (10 minutes)
    - How do we approach this problem? Well if you think about it, we have two components that we can label. It looks to me that there’s an event and an action here.
        - What is the event?
        - What is the action? 
    - How can we find these? Two ways: either you can google, which is very helpful in itself, or to see the scope of everything you can find, let’s look at the docs.
        - https://hub.spigotmc.org/javadocs/spigot/overview-summary.html 
        - This looks confusing but it’s just here to help us.
        - If you look at the left rows, there’s a list of packages. Spigot separates everything into conveniently named packages for us to find.
        - Scroll down to events, then click on event.block
        - Now scroll down to events, click on event.player. Try to find the event that will help us with this task. It is in here.
    - OK, before we start, review of important IntelliJ shortcuts. Write this down, put it somewhere so that you don’t forget
        - First, make sure the documentation is downloaded. Do this.
        - CTRL Q will show you the documentation in your code so you don’t have to always look at this site
        - CTRL P will show you the parameters of any particular class instance. We’ll see what this means soon
        - HOW TO IMPORT (ENTER or ALT-ENTER)
    - Let’s register the event
        - Click enter to auto import, very easy
        - name it whatever
        - OK, how do we drop an item? Spigot is weird in this regard in that sometimes the methods that we need, in this case dropItem, are in non intuitive places
        - Over time, you will learn where things will be, but for now, you can either Google something like “spigot drop item” or look at the docs online.
        - I’ll just tell you the answer this time: you will call this method from a World instance
            - How do we find this? Lets find out through autocomplete
        - Two parameters: Location and ItemStack
            - Location is a place that something is
            - ItemStack is our way to indicate a dropped item
    - Any questions?
        
### Challenge Outline

- OK, you will now be split into groups of 3 to complete a challenge together. Use all the resources you were given, and collaborate so that you guys can figure out a solution faster! You will have until the end of class. (5 minutes)
    - Website basics:
        - You will login with the credentials given to you
        - You will download the template and load it up
        - To upload code to your server, simply drag the .java files (MainClass and EventListener) to this box. We will be automatically asking maven to make the jar and copying the jar to the server, so don’t worry about doing all that
        - Make sure you read the logs that appear on the website to ensure your plugin had no errors
    - If you have any questions during the challenge, please ask us for help. We are here to help you!
    - Any questions?
- OK: Challenge! Connect to the server posted on the website. You will be put in breakout rooms with your group. (3 minutes)
    - Some hints to starting: YOU NEED an event, so think of an event first that will help you perform some code. Look at docs for inspiration
    - You also have to cross this bridge, so think of something that will help you get pass.
    - Brainstorm as a team and Google things for help!
    - If you’re completely stuck, code something, and if still stuck, ask for help!
    - If you finish early feel free to test out other ways to cross the bridge or return to the main room to chat.
        
Goal:
    - Cross the bridge using listeners and plugins

***

## Week 2 Content: How to create player commands

***

### Lesson Outline

- REVIEW OF WEEK 1
    - Give examples of events and actions and ask them to define each
    - Review what is an event and how you can find them
    - Review what actions are and how this is your bread and butter
- Commands basics (20 minutes)
    - What is a command?
    - Why use commands over listeners?
        - Examples in week 1 challenge why or why not
    - How can you make a command?
    - Connect things learned in events with commands
        - You can access different things, but now you have the freedom to choose when the player does it
        - Only issue is now you’re dealing with what they’re typing and you have to fix that and it's a bit more nitty gritty
    - Any questions?
    - onCommand syntax
    - How to cast, how to use instanceof to get CommandSender
    - Any questions?
    - Go over the challenge

### Challenge Outline

- You must beat the wave. After you finish the first wave, you are good to go. If you want a challenge, try to beat the second wave.
- First, let’s implement the verify command together
- Now, you will need to make one more command on your own: “zombie” command, to save you from wave 1
- If you want to save yourself from wave 2, implement the “fire” command
- What are these waves and what is my goal?
    - You must survive as a group these waves together
    - Everyone log in, then type in /challenge start to begin the first wave
    - If anyone dies, you lose the challenge and must try again
    - To beat the wave, you must type /wave verify <word1> <word2>, where the two random words are displayed on a sign in the map behind the obstacles
    - Goal: survive and type in the words to win the wave!
        - Wave 1: zombies spawn everywhere, don’t die
        - Wave 2: if you want, fire will spread everywhere and you will fall unless you do something about it
    - DEMONSTRATE IN MINECRAFT

***

## Week 3 Content: How to change the world; how to create timers; chest filling

***

### Lesson Outline

- Review: (3 min)
    - What are commands? How are they used?
- Reminder that everything is on the website for you to view anytime; even now
- How does a plugin get built? (3 minutes)
        - Maven: project container. It’s kinda like a personal assistant, think Siri/Google Assistant but if you were to type everything instead of say it
        - We can ask it to find the Spigot library and it will automatically without us having to download it ourselves
        - We can ask it to “package”, or put our project in a format that Spigot can read, and it will
- Concepts to go over: plugin.yml, how does a server actually work (plugins folder) (7 minutes)
    - Some other basics, these are for your sake to know but you won’t need to do this later today since a lot of this will be automated for you
        - Anyone made a server before?
        - Basically, you need a spigot jar file, you run it like an application, but since it’s a jar it doesn’t give you a UI to see what it’s doing. That’s why we need to attach it to a script, which is like the Command Prompt so that we can see the things that it is essentially System.out.println()ing.
        - It will generate the server for you and automatically host it on your local network
        - Note the plugins folder. This is where you put your packaged project so that Spigot will load it and put it in the server for you.
        - Plugin.yml to register the plugin main class
- Blocks, location, world, and timers (10 min)
    - How to access player locations safely to get blocks around them
        - Cloning
        - Teleporting players
            - Creating a new Location instance (XYZ)
    - Questions?
    - How to change the world
        - Setting block types and reviewing Material enum
        - Reminder to not directly access player location
    - How to fill chests
        - Accessing state for blocks to change their values
        - Chest class, casting the blockstate to chest
        - Accessing inventory
        - Accessing player inventory (entity inventory)
        - When the player clicks on it
    - Questions?
    - Creating a timer to be used
        - Actions later
        - How to cancel this timer
        - Later vs Timer
        - What is a long?
        - Best practices to cancel and which to use
    - Any questions?

### Challenge Outline

- An ol’ twist on getting across the bridge; this time, obstacles will block your path
- You need to teleport all players to get to the respective locations using BukkitRunnable
    - You can only teleport to the right locations; if not right, you die
- Like last time, you will have 2 levels; after you finish first, feel free to stop, but if you want the challenge, do level 2
- To access the levels, there are signs in the game that tell you exactly where you should teleport the player and WHEN. If it is wrong, you die.
    - How can we teleport at a later time without timing in our heads?
- There is also the coordinates of a chest at the beginning of the level. You can add items here, but you cannot directly give the player items! You can edit player armor though!
- Level 1 is a simple cross the bridge; but arrows will shoot from left and right sides.
- Level 2 is a parkour challenge, but piglins will attack you if you are not wearing gold armor
    - You may put gold armor to avoid them, but an automatic timer will be randomly stripping you of your armor over time, one at a time. How can you make sure you don’t lose all your gold armor to die?
- Finally, there are a few more restrictions that will stop you from doing things you may have done in the past. You can use both commands and events to beat this challenge.
- Last questions?

***

## Week 4 Content: How to create UIs; chest UI, sign interaction UI, showing boss bar, sidebar, title-sized text

***

### Lesson Outline

- Different types of UIs (5 min)
    - Why use UI, and how is it used in everyday practice
        - Uses of different UIs, when to choose one or another
    - Examples in Hypixel, other servers
    - Practical Examples
- How to implement these UI (15 min)
    - How to implement color and boldness, italics, etc using ChatColor in Strings
        - Secret code to the output that the following text should follow this format
        - Color then specialty!
    - I will be teaching three important UIs in depth, then glance over the others
        - Chest UI (hardest)
            - You need to use events
            - Create inventory
            - Put items in the inventory
            - Set the item names using ItemMeta (learned in week 6)
            - Using InventoryClickEvent
                - Handling the right inventory click
                - Cancelling the click to avoid stealing items
                - Canceling other events to avoid stealing items (InventoryDragEvent)
                - Handle when the player closes inventory (InventoryCloseEvent)
            - Showing the inventory to the player
        - Boss Bar UI
            - Creating a boss bar
            - Adding players to the boss bar
            - Properly clearing a boss bar
            - Setting styles (using API)
        - Scoreboard UI Sidebar (you can also put ui under player and in display list, similar steps)
            - Bukkit.getScoreboardManager().getNewScoreboard()
            - Idea of “score”
            - No duplicate characters (it gets overriden)
            - We’re “hacking” the original way scoreboards are made for
            - Init scoreboard and set to sidebar
            - 1: set displayname
            - 1: Register objective
                - Criteria: https://minecraft.gamepedia.com/Scoreboard#Objectives 
            - 2: access objective getScore and set name
            - 3: set score of objective
            - 4: set to player scoreboard
            - Resetting scoreboard via new scoreboard
        - Title text UI (easy, show how you can find it)
            - Player instance, sendTitle(TITLE, SUBTITLE, fade in time, stay time, fade out time)
        - ActionBar floating text UI (easy, show how you can find that)
            - Get spigot player then call sendMessage with ChatMessageType ACTION_BAR
        - Armor Stand UI (easy, talk about it, do not implement)
            - Spawn an armor stand, set it’s name and make it visible forever, then give the armor stand invisibility potion effect
        - Map UI (talk about it, do not implement; you can change map image)
            - You are allowed to change the map pixels 128x128, so you can easily paste images onto maps
        - Sending text to player (easiest)
            - Player instance, sendMessage()
            - Easy
        - Most straightforward UI: just build something for them
- Refresher: (5 min)
    - What is an array?
    - What is a list?
        - How do you traverse a list? It’s not []
        - Why list over array?
    - What is a collection?
        - How do you traverse a collection? What is a for each loop?
        - Example: Bukkit.getOnlinePlayers()
    - What is a hashmap?
        - How do you traverse a hashmap? It’s not []
        - Example: player and their respective scores, stored in hashmap

### Challenge Outline

- You will learn how to implement the chest UI
    - NO MAIN CLASS AGAIN
    - 10 possible locations, find the monster island
    - Goal is to just get to them then kill them; but they only can be hurt with a special item: is told in method thru string: randomized and must be unscrambled, but cannot be sent to players (you cannot use sendMessage method, so must tell the player in some other way)
        - ANSWER Item: retfeha (feather)
    - Implement chest UI that teleports players to any location easily
        - Easiest way: command to open the UI, then use the eventlistener class to handle the clicks on the inventory; you can verify if it is the right inventory by checking the displayname
    - Constraints:
        - No changing world difficulty
        - No main class
        - No sending messages thru typical methods (sendMessage, broadcast, system printout)
        - That’s it
    - Spawn locations ANSWERS (y is always 50):
        - 310 100
        - -300 0
        - 72 230
        - 83 420 (winner)
        - 500 500
        - -102 -203
        - -300 -500
        - 400 -400
        - -400 400
        - 56 -160

***

## Week 5 Content: How to save files/state; JSON files

***

### Lesson Outline

- VERY BRIEF skimming over last week (less than 1 minute)
- Why save files? (5 min)
    - Ask the group first. Think about making a server, then think about popular games and servers, and why would they save files instead of just making variables for everything?
    - What is a variable and why can’t I make unlimited variables?
    - What kinds of things can you save?
        - House, you want to duplicate multiple times
        - Player stats
        - Playing a game, then you want to pause and stop the server to shut down your computer, then resume later. You need to save your data to play later (hunger games example)
        - Anything you want to use later can be saved.
- Common way to save/load files for a plugin: (1 min)
    - Using the plugin folder to save files, conventional
- JSON file format (5 min)
    - Has anyone heard of it? Show the JSON and ask if anyone has seen this format before?
    - Why is it used and why is it useful?
    - Ease of readability, ease of saving files
    - Camel Case usage
    - How to actually do: demonstrate
- GSON library and usage (12 min)
    - WATCHER NOTE: if you find it hard to memorize everything I am doing, focus on understanding WHY I am doing what I am doing, because that is more important. The HOW, AKA the code itself, is available on the resources page and you can freely reference that and use it as long as you understand WHY you use each part.
    - Basics of Files
        - Try catch, why is this a thing?
      - There are a lot of ways to save files, this is a convenient way to do so
        - Writing a file: FileWriter and append
        - Reading a file: BufferedReader and readLine
        - Questions?
        - Importing it using Maven in the pom.xml file
    - How to save string
    - How to save integer
    - How to save list of things
    - Save file
    - Load file
    - Example: saving and loading sheep locations with UUIDs

### Challenge Outline

- The Mystical Redstone Sheep
    - Location ANSWER:
        - 2951 50 -300
- Crazy sheep that killed the world’s other animals and now sap their energy from the vindicators on their island; you must kill the vindicators using REDSTONE to expose the sheep, then save a JSON file to finish them off!
- You can only use the EntityShearEvent and/or commands to win this challenge, but the sheep’s aura will disable command usage when you are on the sheep island
- You need to read a JSON file named sheepLocation.json (part 1), and save a JSON file (part 2)
    - The JSON file that is created will have the two locations where the magical sheep are
        - The coordinates are scrambled in the JSON file, but they have the keys “x”, “y”, and “z”
        - Hidden in the JSON file via a specific key, jumbled with a mess of random junk to prevent just opening the file and reading it
- Part 2: saving a JSON file with the keywords
    - Each sheep has a redstone puzzle to try to beat
        - You can only place and break redstone and redstone repeater
    - If you can beat it, the vindicators will tell you the magical JSON solution to beat the sheep
    - You must save both keys and values in the JSON file called solution.json to beat part 2 and kill the mystical sheep
    - ANSWER:
        - “sheep” 10
        - “action” “explode”
        - “invincible” false

***

## Week 6 Content: How to make special items; moving on past this class

***

### Lesson Outline

- After this lesson, they will have learned enough to be able to make basic games: (10 min)
    - They can make Skyblock now (commands, schematics, UIs for a shop)
    - They can make Hunger Games (events to not let player move, filling chests with items, timers to begin the match and give a countdown through the bossbar)
    - They can make a lot of things…!
    - Practice: let’s go on a server and analyze everything in Hypixel
    - Basically, you have everything you need to make a successful plugin
- TALK ABOUT CHALLENGE REAL QUICK!!! (let them think about it)
- LAST LESSON: ItemMeta (5 min)
    - Allows us to change items to custom stuff
    - Adding lore and display names
    - Different types of ItemMeta and general format to changing things
    - https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/meta/ItemMeta.html 
- Practice: let’s make a lingering potion! (3 min)
    - What class should I use?
    - Show custom effect
    - Apply to potion item
    - Give to player
- Tips for the future (5 min)
    - Easy to use if not used to Java: Skript (https://github.com/SkriptLang/Skript/releases)
    - I learned a ton of Java through Minecraft game dev; if you guys find Minecraft plugin dev interesting and want to learn how to code, this is perfect for you.
        - Start writing just enough; you make things work. Soon, you improve yourself: learn conventions, learn how to make your code better and more elegant; eventually, you are coding very advanced Object-Oriented Programming projects that can be easily used for MANY programming concepts in the future.
        - Teaches you how to code, and you see the results very quickly
        - Learn a lot about how to read documentation, use libraries (useful for general Java)
        - It’s fun! You can make games, find friends to share it with, be proud that you made something yourself
    - Remember that google and docs are very friendly, spigot has forums, bukkit has forums

### Challenge Outline

- Friendly inter-group competition
    - You must defeat as many monsters before class ends!
    - At exactly 4:30 PM, the winning group will be announced!
    - You can use any command and any events, but you cannot set HP or MAX HP or removing them from the world. Other than that, GO WILD
    - Use items, use custom potions, do anything you can to kill them quick!!!
    - If your server crashes, you don’t get a score… So try not to crash. Risk using the PlayerMoveEvent cause your server might crash.
    - 20 minutes to code, 15 minutes to upload plugin and try to kill as much as possible