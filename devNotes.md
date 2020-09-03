9/1 12:15 PM
  -In the middle of implementing Thunk
  -To do:
    1. Finish implementing Thunk in the fetch action file
    2. Find proper way to make fetch action file accessible (most likely through container file)

9/1 4:35 PM
  -Trying to set up connection between React frontend and backend API server
  -Think I may be mixing up actions to send new objects to the server and fetch existing ones
  -To do:
    1. Research creating new objects and sending them to the server using Thunk
    2. Clean up app to make sure you are following steps to create new objects in state

9/3 2:43 PM
  -Redid code that was got corrupted and lost yesterday
  -There is now a fetch action to send a POST request to server
  -It is not yet successfully saving items to the server
  -Need to make sure data being sent matches params needed to save into database
  -Consider using console.log to examine the data being sent in the POST request