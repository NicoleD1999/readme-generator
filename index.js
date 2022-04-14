const inquirer = require('inquirer');
const fs = require('fs');

const readMe = ({title, description, instructions, usage, contribution, test_instructions, license, github, email}) =>
`# ${title}

![](https://img.shields.io/badge/License-${license}-blueviolet)

## Description
 ${description} 

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation
${instructions}


## Usage
${usage}


## License
Please note this application is covered under license ${license}

## Contributing
${contribution}

## Tests
${test_instructions}

## Questions
[${github}]("https://github.com/${github}")

<${email}>`


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What will the user be able to do in your application?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'How will the user install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What would someone want to use your application for?',
      },
    {
      type: 'input',
      name: 'contribution',
      message: 'If someone else would like to contribute to your application how should they do so?',
    },
    {
      type: 'input',
      name: 'test_instructions',
      message: 'What are some instructions for someone wanting to test your application?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like your application to be covered under?',
      choices: ['MIT', 'GPL', 'Apache', 'BSD', 'compliant']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address',
    },
  ])

  .then((answers) => {
    const readMePageContent = readMe (answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });