# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    It allows us to pass data/props to through intermediate components

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions: packets of information which contain an action type and associated data. Tells the reducer what to do with the type property.
    state: a single reducer which represents the state/data of the application globally. Called the single source of truth as it globally represents the current state of the application. Can be accessed by components and mapped to props.
    reducers: a pure function which takes the current state and action, and returns an object. Updates the current state

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    It allows us to write asynchronous API calls inside action creators. It also allows us to write thunk functions which can dispatch new actions.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    I like redux as it allows the code writer to do more with little hassle. You can independently connect the state to components rather than having to pass props through components to pass them to their children components.