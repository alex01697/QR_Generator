import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


// Prompt the user for input using inquirer
inquirer
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL"
        }
    ])
    // Handle the user's response
    // Retrieve the URL entered by the user
    .then((answers) => {
        const url = answers.URL;
        console.log(url);
        // Generate a QR code image from the URL
        const qr_svg = qr.image(url);
        // Save the QR code image to a file with a name based on the URL
        qr_svg.pipe(fs.createWriteStream(url + '_qr.png'));

        // Save the URL to a text file named "url.txt"
        fs.writeFile("url.txt", url, (err) => {
            if (err) throw err; {
                console.log("The file has been saved.");
            }
        });


    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(" Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });
