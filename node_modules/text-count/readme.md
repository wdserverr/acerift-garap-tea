# text-count
This is a simple JavaScript utility for analyzing text. It provides functions to count characters, words, sentences, and lines in a given text.

## Table of Contents

1. [Introduction](#Introduction)
2. [Installation](#Installation)
3. [Features](#Features)
4. [Usage](#Usage)
    - [CLI Mode](#Cli-mode)
    - [Non-CLI Mode](#Non-cli-mode)

## Introduction:

This is a simple JavaScript utility for analyzing text. It provides functions to count characters, words, sentences, and lines in a given text.


## Installation:

- ```bash
    npm install text-count
    ```

## Features:
- count number of lines in a given text or in a file.
- count number of words.
- count total characters.
- count sentences in given text.
- count most common words.
- most common characters.

## Usage:
You can use this package in both Command Line Interface (CLI) mode and non-CLI mode.

## CLI Mode

In CLI mode, you can use the following commands:

- `char <text>`: Count characters in the provided text.
- `word <text>`: Count words in the provided text.
- `sen <text>`: Count sentences in the provided text.
- `line <text>`: Count lines in the provided text.
- `most-common-char <text> [limit]`: Find the most common characters in the provided text (optional: specify limit, default is 5).
- `most-common-words <text> [limit]`: Find the most common words in the provided text (optional: specify limit, default is 5).
- `-f <option> <filepath> [limit]`: Read text from a file and perform the specified operation: word, char, line, sen, most-common-word, or most-common-char.

For Example:
```bash
    count char "Hello, World!"
# Output: 13

    count word "Hello, World!"
# Output: 2

    count sen "Hello. World!"
# Output: 2

    count line "Hello,\nWorld!"
# Output: 2

    count most-common-char "Hello, World!"
# Output: { 'l': 3, 'o': 2, 'H': 1, 'e': 1, ',': 1 }


    count most-common-char "Hello, World!" 2
# Output: { 'l': 3, 'o': 2}

    count most-common-words "Hello, World!" 1
# Output: { 'Hello': 1 }

    count -f word file.txt
# Output: [word count from the file]

    count -f most-common-char file.txt
# Output: { 'l': 3, 'o': 2, 'H': 1, 'e': 1, ',': 1 }

    count -f most-common-char file.txt 2
# Output: { 'l': 3, 'o': 2 }


```

## Non-CLI Mode

You can also use the functions directly in your Node.js code:
```js
    const count= require('text-count');

// Example usage:
console.log(count.charCount("Hello, World!")); // Output: 13
console.log(count.wordCount("Hello, World!")); // Output: 2
console.log(count.mostCommonChar("Hello, World!",3)); // Output: { 'l': 3, 'o': 2, 'H': 1}
console.log(count.mostCommonWords("Hello, World!")); // Output: { 'Hello': 1, 'World': 1 }
console.log(count.lineCount("Hello,\nWorld!\n")); // Output: 2
console.log(count.senCount("Hello. World!")); // Output: 2




```