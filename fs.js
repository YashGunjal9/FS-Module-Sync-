const fs = require("fs")
const path = require("path")

// Define a folder and file path

const folderPath = path.join(__dirname, "myFolder")
const filePath = path.join(folderPath, "myFile.txt")

// 1. Create a directory if it doesn't exist

if (!fs.existsSync(folderPath)) { 
    // Create the folder
    fs.mkdirSync(folderPath)
    console.log("Folder created successfully.")
}

// 2. Create a file and write data to it

// fs.writeFileSync(filePath, "Hello, this is a sample text file. \n")
// console.log("File created successfully.")

// 3. Append more content

fs.appendFileSync(filePath, "This is an appended line. \n")
console.log("Content appended successfully.")

// 4. Read the file content
const content = fs.readFileSync(filePath, "utf-8")
console.log("content:")

// 5. Delete a file

// fs.unlinkSync(filePath)