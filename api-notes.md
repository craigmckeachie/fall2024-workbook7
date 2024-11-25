# API Notes

## JSON

- JSON = "string"
- JSON is a string for of a JavaScript object
- use `JSON.parse()` to turn a json string back into a beach ball aka a js object
- use `JSON.stingify` to turn a javascript object into a string so it can be passed over the network

## Tools to make API calls

- Browser
  - click the link and it opens in the browser
  - only works for GET methods
- REST Client VS Code Extension
  - create .http file
  - type request on the left
  - click "send request"
  - see response on the right
- POSTMAN
  - GUI (Graphical User Interface)
  - choose HTTP verb from dropdown
  - past URL into textbox
  - click Send
- fetch function
  - how you call API from JavaScript code
  - doesn't happen right away (asynchronous)
    - need to `await` it
      - if you await you need to be in a function marked as `async`
    - OR
    - call the .then function on the promise
  - happens in the background of the browser (AJAX)
