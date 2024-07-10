#! /usr/bin/env code

import inquirer from "inquirer";

class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const programStart = async (persons: Person) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Whom do you like to talk?",
            name: "select",
            choices: ["self", "student", "exit"],
        });
        if (ans.select == "self") {
            console.log("Hello! I am talking to myself");
            console.log("I am well");
        } else if (ans.select == "student") {
            const studentAns = await inquirer.prompt({
                type: "input",
                message: "Which student do you wanna talk to?",
                name: "studentName",
            });

            let student = persons.students.find(val => val.name === studentAns.studentName);
            if (!student) {
                student = new Student(studentAns.studentName);
                persons.addStudent(student);
                console.log(`Hello! I am ${student.name}, and I am fine`);
            } else {
                console.log(`Hello! I am ${student.name}, and I am fine`);
            }
            console.log(persons.students);
        } else if (ans.select == "exit") {
            break;
        }
    } while (true);
};

programStart(persons);
