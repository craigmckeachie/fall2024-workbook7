# Backend/APIs

- serves up data (no HTML, just JSON)
- use fetch function to get the data

## Setup Backend API

1. Open File Explorer (yellow folder) in Windows or Finder (smile icon) on Mac
1. Find the folder/directory where you want to put your backend code and highlight it
1. Right-click the folder/directory and choose
   - **open git bash here** on Windows
   - **New Terminal at folder** on Mac
     > This will open a terminal OR git bash terminal in that folder/directory
1. Visit the repository on Github.com that contains your backend/api code
1. Click in the address bar of your browser and copy the url for the repository
1. Run the command
   ```sh
   git clone https://github.com/[username]/[repository name]
   ```
   > You will use the repository url you copied in the previous step
1. After that finishes you should see output that includes
   ```
   successfully cloned repository
   ```
1. Run the command

   ```sh
   npm install
   ```

   > You need to be sure you are in the repository name folder/directory but you should be at this point if you followed the above directions

   > This installs all the libraries/packages/modules of JavaScript code that the backend code depends on or uses

1. Run the following command to start the backend/api
   ```
   npm start
   ```
1. After that finishes you should see output that includes
   ```
   ...running on port xxxx
   ```
   - xxxx is the port number
1. Open your browser to verify the backend/api is running
   - Visit http://localhost:[port number]/
   - OR
   - Visit the url provided in the output of the last step or in your setup directions
1. If you see `json` data returned in the browser then your API is up and running successfully
   > if you don't get `json` data back then you may need to adjust the URL according to directions for example `http://localhost:[port number]/api/resource `

## Starting/Running Backend API

1. Open File Explorer (yellow folder) in Windows or Finder (smile icon) on Mac
1. Find the folder/directory where you want to put your backend code and highlight it
1. Right-click the folder/directory and choose
   - **open git bash here** on Windows
   - **New Terminal at folder** on Mac
     > This will open a terminal OR git bash terminal in that folder/directory
1. Run the following command to start the backend/api
   ```
   npm start
   ```
1. After that finishes you should see output that includes
   ```
   ...running on port xxxx
   ```
   - xxxx is the port number
1. Open your browser to verify the backend/api is running
   - Visit http://localhost:[port number]/
   - OR
   - Visit the url provided in the output of the last step or in your setup directions
1. If you see `json` data returned in the browser then your API is up and running successfully
   > if you don't get `json` data back then you may need to adjust the URL according to directions for example `http://localhost:[port number]/api/resource `

### Stopping the API

1. Find the terminal/git bash window where it is running
2. Focus your cursor in the window
3. `Ctrl+C`
   - on windows it may ask you "Are you sure you want to stop this process"
     - say 'Y' for yes

## FAQs

- Q. I get a long error that includes `EADDRINUSE` what should I do?
- A. `EADDRINUSE` means the port (address) is already in use by a process running on your computer
  - You either have another terminal/git bash window open running an API on that same port (likely the same api)
    - remember that the terminal/git bash could be running inside Visual Studio Code so you might have to shut it down there or in a severe case shut down Visual Studio Code entirely
  - Sometimes the process that is running on that port can no longer be seen, i.e. there are no terminals that appear to be running it
    - In that case you will need to reboot or ask someone how to kill that process
