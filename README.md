## Prerequisites

1. Install a code editor (most people at LT use Visual Studio Code or JetBrains Rider)
1. Setup NVM
   - [Instructions for Mac](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
   - [Instructions for Windows](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#install-nvm-windows)

## Testing Your Tooling

1. Open a command prompt, and navigate to `001-testing`
1. To test that NVM is working, run the following
   - On Mac:
     ```sh
     nvm install
     nvm use
     ```
   - On Windows:
     ```pwsh
     nvm install (Get-Content .\.nvmrc)
     nvm use (Get-Content .\.nvmrc)
     ```
     You should receive a message stating that you're now using v22.16.0
1. To check that `npm` is working, run `npm install` which will install all the libraries for the test project
1. After the installation completes, run `npm test`, which will run the automated test suite.
1. After the test suite passes, run `npm start` which will execute the code in `src/index.ts`

🎉 If all that works, your tooling has been successfully configured 🎉!
