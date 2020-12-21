function renderBadge(license) {
  if (license == 'MIT') {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license == 'Apache 2.0') {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license == 'Creative Commons 1.0') {
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  if (license == 'GPLv3') {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license == 'WTFPL') {
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  # ${data.title}
  ## Description
  ${data.about}
  ## Table of Contents
  ${installCheck(data.install)}
  * [Usage](#usage)
  * [License](#license)
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.install)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license
  ${generateContribute(data.contribution)}
  ${generateTesting(data.testing)}
  ## Questions
  Created by: [${data.githubUsername}](${data.gitLink})
  
  If you have further questions please feel free to contact me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;

