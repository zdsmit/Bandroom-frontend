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

9/15 3:17 PM
  -Trying to use fetch to get database items from the server to render them to the page
  -Need to tweak the fetch call in getMusicStores file

9/16 11:38 AM
  -Page now successfully fetches data from server and renders the list correctly on the page
  -Need to make it so the GET fetch action occurs on submission of form, rather than having to reload page first
  -Need to create edit and delete functions for music stores (start with delete)

9/16 6:51 PM
  -Working on delete button for each rendered music store
  -Getting strange console log output
  -Look into how the id is getting brought in from the database

9/17 12:29 PM
  -Create, get, and destroy functions now work as needed
  -Have to refresh page to show changes
  -Need to adjust them so that DOM updates immediately on interaction with database

9/17 12:59 PM
  -Add function refreshes rendered list now
  -Need delete function to do the same
  -Tried to accomplish this by dispatching a delete action to the reducer, but got an error 'dispatch is not defined'

9/17 5:30 PM
  -Deleting store from list now causes page to reload with updated information
  -Did this by wrapping the delete button in a form tag and using the submit button's default behavior
  -May need to streamline this process in the future
  -Next to do: start building instrument resource as child of music store
  -Might want to consider making separate table for instruments on the backend as well