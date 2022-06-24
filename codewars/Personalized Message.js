
function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}

let message = greet('Daniel', 'Daniel');
console.log(message);