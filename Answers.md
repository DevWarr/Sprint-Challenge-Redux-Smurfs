Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions locatied in This document. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects. Which method do we use to create a new object while extending the properties of another object?

    - Side Effects: When a function changes variables outside of the scope of that specific function.
    - `.map()`, `.filter()`, and `Object.create()` are three examples of Array/Object methods that don't produce side-effects. Each of these methods produce a new Array or Object without changing the original.
    - To create a new object while extending the properties of another, we can use `Object.create()`.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - With React, Components have access to a State of being, as well as properties passed down form parent components. This state or these props, when changed, will automatically cause the component to re-render, displaying any changes when it does so. The current issue with React States, is that Components have to pass any state changes _all the way_ up to the root component State in order to easily save any changes being made. (For example: If you have a component with posts that users create, and a child component with comments on each post, you must pass any new comments up to the posts Component in order for them to be saved and stored with the post properly.)
    - The Redux store handles all of this throughput for you. Instead of having to pass props all the way up to a root 'state' of being, we can instead use actions and reduce them into a Redux store. The Redux store is considered the "single source of truth" because it acts as the root state that will then flow into any child components.
    - When we are in a child component and we want to modify our Redux store, we make a call to an action creator. This action creator is a function that sends an action object to the Redux reducer. The action object must always have a type, and oftentimes also contains a payload.
    - The Redux reducer takes these various action objects and works through specific logic depending on the action.type. This logic will modify the Redux store with any changes(adding a new comment, for example), and then the Redux store will pass down the changes as props to any child components that use them.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?



4.  What is middleware?

    - Middleware are functions that occur between an action creator being called and a Redux reducer being called. An example of this is the middleware `redux-logger`. Logger logs the previous state, the action being called, and the expected next state before the action even makes it to the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` allows us to take a function within an action creator and run it asynchronously. This allows us to perform api calls that may take a long time without causing our webpage to freeze. When using thunk, we must use the function `dispatch()` in order to send an action object to our reducer without stopping our asynchronous function.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    - To line up our Components with the Redux store, we need a `mapStateToProps()` method. This takes in our redux store, and turns the properties into a `props` object that the Component can access. REMEMBER: In order for this to cascade into each Component, we need to import and utilize the `connect` function. This takes `mapStateToProps` and any action creators as its first set of arguments, and then takes in the Component we plan to export as the second set of arguments.