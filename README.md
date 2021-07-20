**Hello! This page is designed to help you get this in your Discord profile:**

https://drive.google.com/file/d/1YW00KIoI8fgAc4onH3AYaphb4ORgtrgH/view?usp=sharing

Anyone who clicks on your profile will be able to view your current system, its region, its mode, and how long you have been in-game. Further, by clicking on the appropriate buttons, they will be able to join you in game, as well as access dankdmitron’s excellent ServerList+.

Credits:
*thehackerboi69github* for the base code | 
*dankdmitron* for his starblast-pinger node module | 
and my undisclosed programming nerd friend, who taught me the basics of JS.

Set-up:

1. Download nodejs using the appropriate method for your OS. Link to official website: https://nodejs.org/en/
2. Ensure you have it downloaded correctly by firing up a command prompt and typing `node --version`.
3. Also ensure npm is installed by typing `npm --version`.
4. Next, update nodejs to the latest version. Ensure you have version >15 (otherwise starblast-pinger will break). Follow instructions on the nodejs website, or consult Google.
5. Make sure you have the Discord desktop client installed and “Activity” enabled under Settings > Activity Status > toggle on Display current activity as a status message. This method uses Discord’s RPC, which only works on desktop.
6. Create a new folder to house your new project, and create a new command prompt window in this folder.
7. Initialize your project by typing `npm init -y`
8. Install the following node modules by typing `npm install <name of module>`: discord-rpc and starblast-pinger.
9. Head on over to the Discord Developer Portal.
   1. On the top right, click “New Applications”
   2. Give your app a name, like “Starblast by Neuronality”
   3. Head down to Rich Presence > Assets
   4. Click Add Image(s) and upload a cool Starblast image. Note the name of the image.
   5. Go back to “General Information” and copy down your Application ID.
   6. Head on back to the command prompt.


The hard part is done! The rest is just plug and chug!

1. Go back to the Google Drive folder that you got this instruction sheet from, and download indexold.js into the folder you created for this project.
2. Open indexold.js in your favorite code editor.
3. Head on down to where it says client ID: ‘’. Copy your Application ID in between the single quotes.
4. Head up to large_image and change “starblast-poster” to “<name of picture you uploaded>”.
5. Change any other text fields if you want, like large_text, button labels, etc.
6. When you’re about to start a Starblast game or want to share your current game via your status, go to the project folder and type `node indexold.js <game link here>` in the command prompt. The specifications of your current game should show up on Discord for all to see!

If you have any questions, feel free to DM me at aliabe#1337. Thanks for reading!
