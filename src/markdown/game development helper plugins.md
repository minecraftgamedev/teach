# Helper Plugins

***

## Purpose: Assist the class in creating the challenges, saving logs, and updating plugins automatically within the server.

***

## What you need to do

***

Nothing, essentially. Unless you want to modify the existing programs to alter the challenges or change the way server logs are stored, you will not need to change the plugins used for the class. 

***

## Helpful Information

***

There exists three plugins that aim at simplifying the process of teaching this class with challenges. Additionally, there is one Java program developed to help constrain the challenges and prevent players from performing illegal actions. All of these plugins are available on Github to view and modify as needed.

Plugins:

1) [TeamChallengeMCGD](https://github.com/tazadejava/teamchallenge-mcgd)

    - This plugin is in charge of managing the challenges. It will help ensure each challenge does what it needs to do, as well as inform the student groups when they have completed the challenge.

2) [LiveStatsDatabasePlugin](https://github.com/tazadejava/live-stats-database-plugin-mcgd)

    - This plugin is in charge of uploading the server logs to a MongoDB database so that it can be read on the frontend website by the students.
    - It will also prevent the players from moving if the challenge is inactive.

3) [AutoPluginReload](https://github.com/tazadejava/auto-plugin-reload)

    - This plugin will automatically reload plugins into the server if it detects changes. This dramatically simplifies plugin loading onto the server, since it becomes a manner of simply copying the new plugin jar onto the server and allowing this plugin to load it into the server for you.

Program:

- [PluginVerifier](https://github.com/tazadejava/pluginverifier-mcgd)

    - This program is used to ensure uploaded code is not breaking any challenge rules. Examples of challenge rules include:
        - No flying
        - No changing gamemode
        - You can only use one event
        - You cannot use any events

For the most part, you will not need to edit these plugins or programs, since they are all provided for you.