// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  if (data.license) {
    return `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)`;
  } else {
    return "";
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// let license;
function generateMarkdown(data) {
  const license = renderLicenseBadge(data);

  return `# ${data.title}

  ## Description 
  ${data.description}

  ## License
  ${license}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  ${data.username}

  My GitHub Link: [GitHub](https://github.com/${data.username})

  If you have additional questions please contact ${data.email}


`};

module.exports = generateMarkdown; 

