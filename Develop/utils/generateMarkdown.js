// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${JSON.stringify(data.title)}

  ## Description 
  ${JSON.stringify(data.description)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)

  ## Installation
  ${JSON.stringify(data.installation)}

  ## Usage
  ${JSON.stringify(data.usage)}

  ## License

  ## Contributing
  ${JSON.stringify(data.contribution)}

  ## Tests
  ${JSON.stringify(data.test)}

  ## Questions

`}

module.exports = generateMarkdown; 
