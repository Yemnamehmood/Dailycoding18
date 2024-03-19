"use strict";
//Day 18 
//task 1 (Make a smartphone object)
//set up details about a smartphone 
let smartphone = {
    make: "Oppo",
    model: "A30",
    specs: {
        storage: "128GB",
        screensize: "6.1 inches",
        batterylife: "20 hours",
    }
};
//shows what we have set up about smartphone 
console.log(smartphone);
//task 2 (Complex list)
let developerSkills = {
    languages: ["javascript", "Typescript", "Python", "C++"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
//getting the specific skills from the list 
let { languages, frameworks, tools } = developerSkills;
//getting specific skills from each cateogry 
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
//task3 (Making flexible object)
//A way to make a flexible list function 
function createObjectwithDynamickey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
//using the flexible list setup for a users preferences
let userpreference = createObjectwithDynamickey("Laptop", "hp");
//showing the users choice
console.log(userpreference);
