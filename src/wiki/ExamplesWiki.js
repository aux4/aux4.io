const text = `

# Contents

* [Github Pages](#github-pages)
* [REST API call](#rest-api-call)
* [Test your code before pushing to the repository](#test-your-code-before-pushing-to-the-repository)

# Github Pages

This can help you to build and release your website to Github Pages.

### .aux4
You can override the temporary directory name in the lines \`#32\` and \`#58\`, and also use your repository in the line \`#41\`.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "gh-pages",
          "execute": [
            "profile:gh-pages"
          ],
          "help": {
            "description": "Github Pages"
          }
        }
      ]
    },
    {
      "name": "gh-pages",
      "commands": [
        {
          "value": "clean",
          "execute": [
            "rm -rf $directory",
            "log:Directory was removed successfully"
          ],
          "help": {
            "description": "Clean the temporary deploy directory",
            "variables": [
              {
                "name": "directory",
                "text": "Temporary directory to clone the website repository",
                "default": "~/.aux4.io"
              }
            ]
          }
        },
        {
          "value": "deploy",
          "execute": [
            "mkdir $directory",
            "git clone https://github.com/aux4/aux4.github.io.git $directory",
            "rm -rf \${directory}/static",
            "rm -rf build",
            "npm run build",
            "cp -r build/* \${directory}/",
            "git --git-dir \${directory}/.git --work-tree \${directory} add \${directory}/.",
            "git --git-dir \${directory}/.git --work-tree \${directory} commit -m '\${message}'",
            "git --git-dir \${directory}/.git --work-tree \${directory} push",
            "rm -rf $directory",
            "log:The website was deployed successfully"
          ],
          "help": {
            "description": "Deploy the current version of website to the github pages",
            "variables": [
              {
                "name": "directory",
                "text": "Temporary directory to clone the website repository",
                "default": "~/.aux4.io"
              },
              {
                "name": "message",
                "text": "Commit Message",
                "default": "Website Changes"
              }
            ]
          }
        }
      ]
    }
  ]
}

\`\`\`

### Docs

\`\`\`bash
aux4 gh-pages
   clean   Clean the temporary deploy directory
             - directory [~/.aux4.io] Temporary directory to clone the website repository
  deploy   Deploy the current version of website to the github pages
             - directory [~/.aux4.io] Temporary directory to clone the website repository
             - message [Website Changes] Commit Message

\`\`\`

# REST API call

CLI for searching address using USPS API. This example is from [Stack Overflow](https://stackoverflow.com/questions/7129313/zip-code-lookup-api).

It requires to have [jq](https://stedolan.github.io/jq/) installed to format the JSON output, it is used in the end of the line \`#20\`.

### aux4

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "address",
          "execute": [
            "profile:address"
          ]
        }
      ]
    },
    {
      "name": "address",
      "commands": [
        {
          "value": "search",
          "execute": [
            "curl 'https://tools.usps.com/tools/app/ziplookup/zipByAddress' -s --data 'address1=\${address}&city=\${city}&state=\${state}&zip=\${zip}' -H 'User-Agent: Mozilla/5.0' | jq ."
          ],
          "help": {
            "description": "Search address",
            "variables": [
              {
                "name": "address",
                "text": "Address"
              },
              {
                "name": "city",
                "text": "City",
                "default": ""
              },
              {
                "name": "state",
                "text": "State",
                "default": ""
              },
              {
                "name": "zip",
                "text": "Zip Code",
                "default": ""
              }
            ]
          }
        }
      ]
    }
  ]
}
\`\`\`

### Docs

\`\`\`bash
aux4 address
  search   Search address
             - address Address
             - city City
             - state State
             - zip Zip Code
\`\`\`

# Test your code before pushing to the repository

Stop pushing your code before testing.

### .aux4
\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "git",
          "execute": [
            "profile:git"
          ]
        }
      ]
    },
    {
      "name": "git",
      "commands": [
        {
          "value": "test-and-push",
          "execute": [
            "git pull -r",
            "jest",
            "git push"
          ],
          "help": {
            "description": "Pull the code from git, test and push"
          }
        }
      ]
    }
  ]
}
\`\`\`

### Docs
\`\`\`bash
aux4 git
  test-and-push   Pull the code from git, test and push
\`\`\`


`;

const ExamplesWiki = {
  text: text
};

export default ExamplesWiki;
