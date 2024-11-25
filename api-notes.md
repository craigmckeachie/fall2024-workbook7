# API Notes

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
