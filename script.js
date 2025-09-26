function stringChop(str, size) {
    // Edge case: if input is null or empty
    if (!str) return [];

    // Convert size to number (because prompt gives string)
    size = Number(size);

    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substr(i, size));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = prompt("Enter Chunk Size:");
alert(stringChop(str, size));
