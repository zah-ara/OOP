#! /usr/bin/env code
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = (persons) => __awaiter(void 0, void 0, void 0, function* () {
    do {
        console.log("Welcome guest");
        const ans = yield inquirer_1.default.prompt({
            type: "list",
            message: "Whom do you like to talk?",
            name: "select",
            choices: ["self", "student", "exit"],
        });
        if (ans.select == "self") {
            console.log("Hello! I am talking to myself");
            console.log("I am well");
        }
        else if (ans.select == "student") {
            const studentAns = yield inquirer_1.default.prompt({
                type: "input",
                message: "Which student do you wanna talk to?",
                name: "studentName",
            });
            let student = persons.students.find(val => val.name === studentAns.studentName);
            if (!student) {
                student = new Student(studentAns.studentName);
                persons.addStudent(student);
                console.log(`Hello! I am ${student.name}, and I am fine`);
            }
            else {
                console.log(`Hello! I am ${student.name}, and I am fine`);
            }
            console.log(persons.students);
        }
        else if (ans.select == "exit") {
            break;
        }
    } while (true);
});
programStart(persons);
