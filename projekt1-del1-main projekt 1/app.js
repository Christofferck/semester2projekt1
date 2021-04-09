const xml2js = require('xml2js');
const http = require('http'); //require http
const path = require('path');


// const server = oprette server + implementere html sider

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/databases.xml') {
        fs.readFile(path.join(__dirname, 'databases.xml'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/xml'}); //omdanner det til html
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/databases.xml') {
        fs.readFile(path.join(__dirname, 'browsere2.xsl'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/xsl'}); //omdanner det til html
            res.write(data);
            res.end();
        });
    }
    

    if(req.url === '/addauthors') {
        fs.readFile(path.join(__dirname, 'addAuthors.html'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'}); //omdanner det til html
            res.write(data);
            res.end();
        });
    }
});

server.listen(3001, () => console.log('server is up and running'));


const fs = require("fs");
// read XML file
fs.readFile("databases.xml", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    // convert XML data to JSON object
    xml2js.parseString(data, (err, result) => {
        if (err) {
            throw err;
        }

        // replace `Neo4j` with `ArangoDB`
        //result.catalog.cd[0].title = '';

        // add a new database to list
        const postgres = {
            title: '1',
            artist: '2',
            country: '3',
            company: '4',
            price: '5',
            year: '6'
        };

        result.catalog.cd.push(postgres);

        // convert SJON objec to XML
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(result);

        // write updated XML string to a file
        fs.writeFile('databases.xml', xml, (err) => {
            if (err) {
                throw err;
            }

            console.log(`Updated XML is written to a new file.`);
        });

    });
});





// XML string to be parsed to JSON
//const xml = `<?xml version="1.0" encoding="UTF-8" ?>
//            <user id="1">
//                <name>John Doe</name>
//                <email>john.doe@example.com</email>
//                <roles>
//                    <role>Member</role>
//                    <role>Admin</role>
//                </roles>
//                <admin>true</admin>
//            </user>`;

    // convert XML to JSON
//xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
//    if(err) {
//        throw err;
//    }

    // `result` is a JavaScript object
    // convert it to a JSON string
//    const json = JSON.stringify(result, null, 4);

    // log JSON string
//    console.log(json);
    
//});

//xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
//    if (err) {
//        throw err;
//    }

//    // `result` is a JavaScript object
  //  // convert it to a JSON string
//    const json = JSON.stringify(result, null, 4);

//    // save JSON in a file
//    fs.writeFileSync('user.json', json);

//});




// Her laver vi vores user.json ved at lave et objekt og så stringify den
//const fs = require('fs');

// create a JSON object
//const user = {
//    "id": 1,
//    "name": "John Doe",
//    "age": 22
//};

// convert JSON object to string
//const data = JSON.stringify(user, null, 4);

// write JSON string to a file
//fs.writeFile('user.json', data, (err) => {
//    if (err) {
//        throw err;
//    }
//    console.log("JSON data is saved.");
//});




//const fs = require('fs');

// read JSON object from file
//fs.readFile('user.json', 'utf-8', (err, data) => {
//    if (err) {
//        throw err;
//    }

    // parse JSON object
//    const user = JSON.parse(data.toString());

    // print JSON object
//    console.log(user);
//});







//const fs = require('fs');

// read XML from a file
//const xml = fs.readFileSync('databases.xml');

// convert XML to JSON
///xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
//    if (err) {
//        throw err;
//    }

    // `result` is a JavaScript object
    // convert it to a JSON string
//    const json = JSON.stringify(result, null, 4);

    // save JSON in a file
//    fs.writeFileSync('user.json', json);

    
    
//    console.log(result);
//});
