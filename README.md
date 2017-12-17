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

Reasoning behind using the above mentioned technologies:

* AngularJS : It is good for a single-page application. Another reason is because I am well versed with the framework and know/have an idea of how it works internally.
* SCSS: It helps to structure css just like html which helps in readibility
* Bootstrap: It helps us to quickly use elements like buttons and other useful resources without writing much code.
* Webpack: Helps to combine Javascript/css into one file, which then can be included in the html file (bundle.min.js).
* bower: helps to keep the versions of the front-end technologies up to date and also have a flat dependency tree rather than nested dependency tree like npm.

If I had ample time, I would have chosen react and redux to develop the same application. React has it's virtual dom that updates only the portion of the dom that has changed.
Thus helps increasing the performance of the application. 

Other interesting projects:

* https://github.com/shrenikrajvijay/Cost-To-Company
* https://github.com/shrenikrajvijay/Loyalty-Program
* https://github.com/shrenikrajvijay/Monopoly-Empire-with-UI

My public profile:

https://www.linkedin.com/in/vijayshrenikraj/

Link to hosted application:
http://ec2-34-216-205-59.us-west-2.compute.amazonaws.com/

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


3. Run npm install and bower update (from the project folder) to install all the dependencies,

		cd github-handle (to the project folder)
		npm install
		npm i -g bower
		bower update

4. Start the server by running,

		npm i -g -S concurrently
		npm start

5. After all the above is set up, issue reques to server by typing in the following inside the web browser,
	- localhost:2020

If everything went well, then you should see the web page.

SCREENSHOTS:

![alt text](https://github.com/shrenikrajvijay/github-handle/blob/master/screenshot-1.png)
![alt text](https://github.com/shrenikrajvijay/github-handle/blob/master/screenshot-2.png)
![alt text](https://github.com/shrenikrajvijay/github-handle/blob/master/screenshot-3.png)
![alt text](https://github.com/shrenikrajvijay/github-handle/blob/master/screenshot-4.png)

