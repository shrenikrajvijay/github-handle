# github-handle
Introduction:
		This application is used for searching github users using their name and see their followers. Enjoy!
	
Features:

* Search users.
* Find number of followers.
* Click on followers to go to their github page. 

Technologies Used:

* Front-End: Html, Css, AngularJS, Bootstrap, scss.
* Other: Webpack, Node.js, bower.
* Testing: Karma, Jasmine.

Installation:
1. Clone this respository to your local folder,

		git clone https://github.com/shrenikrajvijay/github-handle.git 

2. Install nvm to have the latest version of node (version greater than 7.0.0),

		cd ~/
		git clone https://github.com/creationix/nvm.git .nvm
		cd ~/.nvm
		git checkout v0.33.6
		. nvm.sh
		nvm install node
		nvm use node
		
	Now add these lines to your ~/.bashrc, ~/.profile, or ~/.zshrc file to have it automatically sourced upon login,
	
		export NVM_DIR="$HOME/.nvm"
		[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
		[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


3. Run npm install (from the project folder) to install all the dependencies,

		cd github-handle (to the project folder)
		npm install

4. Start the server by running,

		npm start

5. After all the above is set up, issue reques to server by typing in the following inside the web browser,
	- localhost:2020

If everything went well, then you should see the web page.

SCREENSHOTS:


