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

9/4 12:28 PM
  -Spent most of the morning switching over database from SQLite to PostgreSQL
  -Changed the music store input form into a class component
  -I think doing this and saving the music store's attributes into the class' internal state will be the key to saving them into the database successfully
  -I believe the problem is happening in one of a few places:
    1. The container's dispatched addStore method: is more than 'text' needed?
    2. The input form: saving them to state could possible be the answer

9/5 1:10 PM
  -Established create route in stores controller on backend
  -Made some adjustments to addMusicStores action file
  -imported actions file in music stores container, replaced mapDispatchToProps with it
  -this is creating problems with input form, which is still using now nonexistent dispatch prop
  -can I use the addMusicStores action directly from the input form?