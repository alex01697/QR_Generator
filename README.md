
QR Code Generator with Inquirer
Overview
This is a command-line application that facilitates the generation of QR codes using Node.js. The application uses the inquirer library for user input, qr-image for QR code generation, and fs for file operations. The generated QR code is saved as a PNG file, and the entered URL is stored in a text file named "url.txt."

Prerequisites
Before using this application, ensure that you have the following installed on your machine:

Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
npm: Node.js package manager.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:

bash
Copy code
npm install
Usage
Run the application:

bash
Copy code
node app.js
Enter a URL when prompted by the application.

The QR code image will be generated and saved as a PNG file (e.g., example_qr.png).

The entered URL will be saved to a text file named "url.txt."

Code Snippet
javascript
Copy code
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream(url + '_qr.png'));
        fs.writeFile("url.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved.");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });
Dependencies
inquirer: A collection of common interactive command-line user interfaces.
qr-image: QR Code generation library.
fs: Node.js built-in file system module.
License
This project is licensed under the MIT License.

Acknowledgments
inquirer
qr-image
Node.js
