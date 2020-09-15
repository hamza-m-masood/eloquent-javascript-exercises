require("./script-data-set/scripts")

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }

    }
    console.log("number of live languages: " + passed.length)
    return passed;
}

//console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(s => s.direction = "ttb"));//top to bottom (ttb)