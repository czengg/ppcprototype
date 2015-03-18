# ppcprototype


## How to run the Test

Below are the basic setup + how to get the actual system to work with multiple devices

#### Prereqs
- node >= 0.10.15
- npm >= 2.1.18

#### Install the dependencies
- get all the files from github
- run `npm install` on the root directory. This will install all the node modules
- run `bower install` on the `www` directory. This will install all the front-end dependencies, like `angularjs`.

#### Start the Server
- start the server by running `node server/app.js` from the root directory
- your bash/shell/wtv should display something along the lines of `Express server listening on 0.0.0.0:9000, in development mode`. If you see this your server is running correctly.
- open up your browser to `http:localhost:9000/` to confirm the page is loaded. You'll see some sort of welcome screen.

#### Connecting with devices (Note this is for Mac, idk how to Windows)
- Now open up your system preferences and go to 'Network'.
- Connect to the network you will access from the other device (user's phone, etc.) Note that because we are running this locally, you cannot access from the Internet. For the purpose of the experiment, CMU-SECURE is recommended.
- Keep note of the 'ip address' which is displayed like something along the lines of 'Wi-Fi is connected to CMU-SECURE and has the IP address 128.237.217.46.'. The value of the ip obviously may vary.
- Check that the other device is on the same network, and open the browser to `http://<insert ip address you found>:9000`. This should also show the welcome page.

#### Send Notifications
- In your host device (the device you want to trigger the Notification), go to `/#/tester`. You'll need to manually enter that in the URL, as there's not link anywhere in the app.
- This should show a list of items that the app can trigger notifications for.
- The user will get a popup as long as the user is in either the `/#/overview` page, or the `/#/content/:id` page. Note that other pages currently do not trigger the alert, but you can easily add that by injecting the `Notification` service to the controller of that page.






