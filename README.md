# My Common React Native Start

This repo captures a common configuration of libraries I use
in React Native applications.

This project was first bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).
Then, the following libraries were added:

- [React Native Paper](https://reactnativepaper.com/) - Material Design UI
- [Redux and React Redux](https://react-redux.js.org/) - I prefer old-school, without redux toolkit
- [Redux Actions](https://redux-actions.js.org/) - An opinionated approach based on Flux Standard Actions
- [Redux Sagas](https://redux-saga.js.org/) - Some say it is too complicated, but it's my choice for redux side effects
- [React Navigation](https://reactnavigation.org/) - I've used multiple versions of this library for routing and navigation
- [Reactotron](https://docs.infinite.red/reactotron/) - In the ever-changing story of debugging react native applications,
  this is the one that currently works


## Notes

### The argument against Redux Sagas
This [blog entry](https://blog.isquaredsoftware.com/2022/05/presentations-evolution-redux-async-logic/) links to slides
and a talk given by Mark Erikson (acemarke) who recommends using Redux Toolkit and avoiding Redux Sagas. Mark is a [Redux](https://github.com/reduxjs/redux) maintainer and created
[Redux Toolkit](https://redux-toolkit.js.org/) so I pay attention to his advice.
However, based on my experience and preference for the "mental model" of Redux
Sagas, I accept the additional complexity for what I consider an elegant approach
to orchestrating Redux side effects. I also choose not to use Redux Toolkit primarily
because I embrace the principle of immutability at the heart of Redux and I prefer
not to bury it under a layer of convenience.

### Debugging
This article on Medium, [Why you don't need Flipper in your React Native app...](https://shift.infinite.red/why-you-dont-need-flipper-in-your-react-native-app-and-how-to-get-by-without-it-3af461955109), explains
what doesn't work anymore and hints that better debugger options are in development.
