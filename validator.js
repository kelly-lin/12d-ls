import { execSync } from "child_process";

const regexpFileNotFound = /.*:(\d+): (.*)/;
const regexpError = /.*, line (\d+)\.(\d+): error: (.*)/;
const output = execSync('"C:\\PROGRA~1\\12d\\12dmodel\\14.00\\nt.x64\\cc4d.exe" "C:\\attribute_manipulator.4dm" 2>&1').toString().split('\r\n');

output.forEach(line => {
    let match = line.match(regexpFileNotFound);
    if (match) {
        const lineNum = match[1];
        const error = match[2];
        console.log(`${lineNum}, ${error}`)
    }
    match = line.match(regexpError);
    if (match) {
        const lineNum = match[1];
        const colNum = match[2];
        const error = match[3];
        console.log(`${lineNum}: ${colNum}, ${error}`)
    }
});

// const errors = output.match(regexpError);
// console.log(errors);

// const errors = output.toString().split('\r\n');
// errors.forEach(error => {
//     console.log(`error is: ${error}`);
// })