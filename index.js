const inquirer = require('inquirer');
const fs = require('fs');

const readMe = ({title, description, instructions, usage, contribution, test_instructions, license, github, email}) =>
`<h1> ${title} </h1>

<h2> Description </h2>
<p> ${description} </p>

<h2> Table of Contents </h2>
<li> 
<a href="#installation">Installation</a>

<li> 
<a href="#usage">Usage</a>
<li> 
<a href="#license">License</a>
<li> 
<a href="#contributing">Contributing</a>
<li> 
<a href="#tests">Tests</a>
<li> 
<a href="#questions">Questions</a>

<h2 id="installation"> Installation </h2>
<p>${instructions} </p>


<h2 id="usage"> Usage</h2>
<p>${usage}</p>


<h2 id="license"> License </h2>
<p>${license}</p>

<h2 id="contributing"> Contributing</h2>
<p>${contribution}</p>

<h2 id="tests"> Tests</h2>
<p>${test_instructions}</p>

<h2 id="questions"> Questions</h2>
<a href="https://github.com/${github}">${github}</a>

<a href="mailto: ${email}">${email}</a>`


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