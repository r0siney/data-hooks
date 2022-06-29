const pomParser = require("pom-parser");

const parse = function (file, fn) {
    pomParser.parse({ filePath: file }, (err, pomResponse) => {
        if (err) {
            console.log("ERROR: " + err);
            process.exit(1);
        }

        fn(pomResponse)
    })
}

x = parse('data/pom.xml', r => {
    // console.log(r)
    console.log(JSON.stringify(r.pomObject, null, 4));
})

