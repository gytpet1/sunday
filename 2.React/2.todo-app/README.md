
To start the app:
```
npm install && npm start
```

 - What are the problems with this component?
 - What would you refactor?
 - What is your opinion about this style of coding?

 1. const someTasks is used incorrectly, we should manipulate it through state, this is wrong. We can make App as a class component and use components state instead of forcing update.
 2. I would refactor App and Tasks components into a seperate components to keep it cleaner. And as I said earlier I would make App component as a class component instead function component.
 3. It's not clean enough, there are some ways to keep it cleaner.

 P.S. Not the best practice to use active, completed and total variables in the render method, but I am running late. I would use it in App component.