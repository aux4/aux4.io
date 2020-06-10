const text = `
# Contents

1. [Installation](#installation)
1. [Getting Started](#getting-started)
1. [Configuration File](#configuration-file)
    1. [Profile](#profile)
    1. [Command](#command)
1. [Variables](#variables)
    1. [Parameter](#parameter)
    1. [Prompt](#prompt)
    1. [Default Value](#default-value)
1. [JSON Output](#json-output)
1. [Logging](#logging)
1. [Using Multiple Profiles](#using-multiple-profiles)
1. [Help](#help)
1. [Security](#security)
    1. [Advanced](#advanced)
1. [Real World Usage](#real-world-usage)
    1. [aux4 website](#aux4-website)
1. [Upgrade](#upgrade)
1. [GitHub](#github)
1. [Bugs and Features](#bugs-and-features)
1. [License](#license)

# Installation

Aux4 is a node application, it can be installed by [npm](https://npmjs.com/package/aux4).

\`\`\`bash
npm install --global aux4
\`\`\`

[![npm version](https://badge.fury.io/js/aux4.svg)](http://npmjs.com/package/aux4)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Getting Started

The fist step is create the configuration file. It is a regular json file and it should be called \`.aux4\`.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "hello",
          "execute": [
            "echo 'Hello World'"
          ]
        },
        {
          "value": "bye",
          "execute": [
            "echo 'bye!'"
          ]
        }
      ]
    }
  ]
}
\`\`\`

The json structure is quite simple. It is an object with a list of profiles. Each profile has a name and a list of commands. A command has a value and a list of instructions to be executed.

In this example, there is a single profile called main and two commands: \`hello\` and \`bye\`.

\`\`\`bash
aux4 hello
Hello World
\`\`\`

\`\`\`bash
aux4 bye
bye!
\`\`\`

# Configuration File

*Aux4* is a simple tool, it just need a single configuration file, which is called \`.aux4\`. It's a simple json file, representing an object with a list of profiles.

\`\`\`json
{
  "profiles": []
}
\`\`\`

## Profile

The \`profile\` is represented by an object with a name and a list of commands. The application starts based on the \`main\` profile.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": []
    }
  ]
}
\`\`\`

## Command

The \`command\` is represented by an object with a value and a list of instructions with should be executed. These instructions will be executed in a terminal, it depends on the Operational System.

**Important Note:** after execute each \`command\` the output is sets in the \`response\` variable.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "hello",
          "execute": []
        }
      ]
    }
  ]
}
\`\`\`

The \`command\` also can be documented, including the \`help\` attribute, which is represented by an object with a description and a list of variables.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "hello",
          "execute": [],
          "help": {
            "description": "...",
            "variables": []
          }
        }
      ]
    }
  ]
}
\`\`\`

The \`help\` structure is more detailed in the [help](#help) chapter.

# Variables

The \`variables\` can be used in the command execute instructions. They can be predefined or parameterized. There are two ways to represent a variable: \`\${name}\` or \`$name\`.

In the example below, there is a single command responsible for create a directory, where the \`dirname\` variable represent the directory should be created.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "create-dir",
          "execute": [
            "mkdir \${dirname}"
          ],
          "help": {
            "description": "create a directory",
            "variables": [
              {
                "name": "dirname",
                "text": "The directory name"
              }
            ]
          }
        }
      ]
    }
  ]
}
\`\`\`

Based on this example, there are three different ways to set a value for the \`dirname\` variable:

## Parameter

The first one, is using a parameter:

\`\`\`bash
aux4 create-dir --dirname test
\`\`\`

## Prompt

The second one, is using a the prompt to ask the user to fill the value:

\`\`\`bash
aux4 create-dir
The directory name: test
\`\`\`

In this case, the prompt uses the \`text\` attribute from the variable to ask the user to fill the value.

## Default Value

There is a third option as well, using a default value for the variable. In this case, a \`default\` attribute should be included in the variable object.

\`\`\`json
...
  {
    "name": "dirname",
    "text": "The directory name",
    "default": "test"
  }
...
\`\`\`

If the default value is added to the variable, the prompt does not ask the user to fill the variable, just assumes the default value for this one.

\`\`\`bash
aux4 create-dir
\`\`\`

Even using the default value, the user can override it using a parameterized variable.

\`\`\`bash
aux4 create-dir --dirname other
\`\`\`

## Set variable value

It is possible define variables by using \`set:\` prefix.

\`\`\`json
...
  {
    "execute": [
      "set:name=John",
      "log:name is \${name}"
    ]
  }
...
\`\`\`

# JSON Output

**Aux4** can convert the command output from [JSON](http://json.org/) string to object.

\`\`\`json
...
  {
    "execute": [
      "json:cat package.json",
      "echo version \${response.version}"
    ]
  }
...
\`\`\`

# Logging

**Aux4** has a logging feature that allows the user be informed what is executing.

\`\`\`json
...
  {
    "execute": [
      "log:create $dirname",
      "mkdir $dirname",
      "log:directory $dirname was created"
    ]
  }
...
\`\`\`

After execute, the logs are printed in the console:

\`\`\`bash
aux4 create-dir --dirname test
create test
directory test was created
\`\`\`

# Using Multiple Profiles

The \`profiles\` are responsible for group the commands in categories.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "test",
          "execute": [
            "profile:test"
          ]
        }
      ]
    },
    {
      "name": "test",
      "commands": [
        {
          "value": "unit",
          "execute": [
            "echo 'run unit tests'"
          ]
        },
        {
          "value": "integration",
          "execute": [
            "echo 'run integration tests'"
          ]
        }
      ]
    }
  ]
}
\`\`\`

To run the unit tests:

\`\`\`bash
aux4 test unit
run unit tests
\`\`\`

To run the integration tests:

\`\`\`bash
aux4 test integration
run integration tests
\`\`\`

# Help

The help manual is automatic generated by **aux4**.

\`\`\`bash
aux4 --help
  create-dir   create a directory
                 - dirname The directory name
\`\`\`

The user can specify the command.

\`\`\`bash
aux4 create-dir --help
  create-dir   create a directory
                 - dirname The directory name
\`\`\`

In cases where the \`default\` value is set, it is displayed after the variable name.

\`\`\`bash
aux4 --help
  create-dir   create a directory
                 - dirname [test] The directory name
\`\`\`

# Security

**Aux4** allows the user to encrypt some information in the configuration file.

To encrypt the some value:

\`\`\`bash
aux4 aux4 encrypt password
0b266d4fb10dd8c0
\`\`\`

To use an encrypted value in the instruction:

\`\`\`json
...
  {
    "execute": [
      "echo crypto(0b266d4fb10dd8c0)"
    ]
  }
...
\`\`\`

## Advanced

It is recommended define a token in a system variable, in order to protect the generated encrypted information to be uncrypted in a single machine.

\`\`\`bash
export AUX4_SECURITY_KEY=C1E111867141295954C8DF64426FF
$ aux4 $ encrypt passowrd
2b146e0b0b67b9c0
\`\`\`

# Real World Usage

## aux4 website

The aux4 website uses the **aux4** to deploy the website in the GitHub Pages.

This script is responsible for clone the static website repository, merge the changes push it again to the repository and them remove the temporary directory.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
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

# Upgrade

\`\`\`bash
aux4 aux4 upgrade
\`\`\`

# GitHub

This product is Open Source and you can find the source code on [GitHub](https://github.com/aux4/aux4).

# Bugs and Features

Did you find a bug? Do you need an additional feature? Please [report the issue](https://github.com/aux4/aux4/issues) and we will work to improve the product as soon as possible.

# License

The **aux4** is released under version 2.0 of the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const ReferenceWiki = {
  text: text
};

export default ReferenceWiki;
