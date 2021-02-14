
function renderLicenseBadge(license) {
  if (license == "none") {
    return ``
  } else if (license == 'MIT') {

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == 'GNU GPLv3') {

    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {

    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }


}


function renderLicenseLink(license) {
    
  if (license == "none") {
    return ``
  } else if (license == 'MIT') {

    return `https://opensource.org/licenses/MIT`
  } else if (license == 'GNU GPLv3') {

    return `https://www.gnu.org/licenses/gpl-3.0`
  } else {

    return `https://opensource.org/licenses/Apache-2.0`
  }




}


function renderLicenseSection(license) {
  if (license == "none") {
    return ``
  } else{ return `Copyright (c) Licence ${license}`}



}

function generateMarkdown(response) {
  return `
  # ${response.Title}
  ${renderLicenseBadge(response.License)}
  
  ## Description
  ${response.Description}
  
  
  ## Table of Contents 
  
  [Description](##Description)
  
  [Installation](##Installation)
  
  [Usage](##Usage)
  
  [License](##License)
  
  [Contributing](##Contributing)
  
  [Tests](##Tests)
  
  [Questions](##Questions)
  
  
  ## Installation
  ${response.Installation}
  
  
  ## Usage
  ${response.Usage}
  
  
  ## License
  ${renderLicenseSection(response.License)}
  ${renderLicenseLink(response.License)}
 
  
  ## Contributing
  ${response.Contributing}
  
  ## Tests
  ${response.Tests}
  
  
  ## Questions
  GitHub: (https://${response.GitHub})
  Email: (https://${response.Email})
  
  
  
  
  `;
}

module.exports = generateMarkdown;