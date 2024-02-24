#!/usr/bin/env node
const count = require('./src/character_count');
const fs = require('fs');

let inp= process.argv[2];
let inp2=process.argv[3];
let inp3= process.argv[4];
let inp4= process.argv[5];
if(inp=="char"){
    if(!inp2){
        console.log("please enter some text")
    }
    else{
    console.log(count.charCount(inp2));
    }
}
else if(inp=="word"){
    if(!inp2){
        console.log("please enter some text");
    }
    else{
        console.log(count.wordCount(inp2))
    }
}
else if(inp=="sen"){
    if(!inp2){
        console.log("please enter some text");
    }
    else{
        console.log(count.senCount(inp2));
    }
}
else if(inp=="line"){
    if(!inp2){
        console.log("please enter some text");
    }
    else{
        console.log(count.lineCount(inp2))
    }
}
else if(inp=="most-common-char"){
    if(!inp2){
        console.log("please enter some text");

    }
    else{
        console.log(count.mostCommonChar(inp2,inp3))
    }
}
else if(inp=="most-common-words"){
    if(!inp2){
        console.log("please enter some text");

    }
    else{
        console.log(count.mostCommonwords(inp2,inp3))
    }
}
   

if(inp=='-f'){
    if(inp2=='word'){
        if(!inp3){
            console.log("please enter file path");
        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.wordCount(data));
                }
            })
        }
    }
    else if(inp2=="char"){
        if(!inp3){
            console.log("please enter file path");
        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.charCount(data));
                }
            })
        }
    }
    else if(inp2=='line'){
        if(!inp3){
            console.log("please provide file path");

        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.lineCount(data));
                }
            })
        }
    }
    else if(inp2=="sen"){
        if(!inp3){
            console.log("please provide file path");

        }
       
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.senCount(data));
                }
            })
        }

    }
    else if(inp2=="most-common-word"){
        if(!inp3){
            console.log("please provide a file path");
        }
        else{
            fs.readFile(inp3,'utf-8',(error,result)=>{
                if(error){
                    console.log("error while reading file ",error);
                }
                else{
                    console.log(count.mostCommonwords(result,inp4));
                }
            })
        }
    }
    else if(inp2=="most-common-char"){
        if(!inp3){
            console.log("please provide a file path");
        }
        else{
            fs.readFile(inp3,'utf-8',(error,result)=>{
                if(error){
                    console.log("error while reading file ",error);
                }
                else{
                    console.log(count.mostCommonChar(result,inp4));
                }
            })
        }
    }
    else{
        console.log("please select valid option")
    }
}



const printHelp = () => {
    console.log(`
    Usage: count [options]
    
    Options:
      -h, --help                           Display this help message
      char <text>                          Count characters in the provided text
      word <text>                          Count words in the provided text
      sen <text>                           Count sentences in the provided text
      line <text>                          Count lines in the provided text
      most-common-char <text> [limit]      Find the most common characters in the provided text (optional: specify limit, default is 5)
      most-common-words <text> [limit]     Find the most common words in the provided text (optional: specify limit, default is 5)
      -f <option> <filepath>               Read text from a file and perform the specified operation:
                                           word, char, line, sen, most-common-word, or most-common-char
    `);

};

if (inp === '-h' || inp === '--help') {
    printHelp();
    
}