# CSC-372-Assignment-7

https://uncg-my.sharepoint.com/:v:/g/personal/dtwilliams_uncg_edu/IQBvj6sBiUhuSJanh_HQbRAfAeO0L_d8sE2xyJxnQQlc5iY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=SVvFvb


This project is a React-based version of the classic Rock, Paper, Scissors game. The user selects a throw by clicking one of three images: rock, paper, or scissors. After the player chooses, the computer cycles through all three throw images every for 3 seconds before revealing its final throw. The app then determines the winner and displays the outcome.

To run this project locally:

```bash
npm install
npm run dev
```

After running the commands, open the local Vite development URL shown in the terminal.

For this assignment, I converted our previous Rock-Paper-Scissors project into a fully component-based React application. One of the implemtations i used was useState.

useState is used to manage:

* the player’s selected throw
* the computer’s current and final throw
* the displayed result message
* whether the computer is currently shuffling choices
