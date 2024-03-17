const AWS = require("aws-sdk")

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://localhost.localstack.cloud:4566",
    accessKeyId: 'test',
    secretAccessKey: 'secretAccessKey'
})
//instantiate dynamodb class
const dynamodb = new AWS.DynamoDB();
//listing tables
dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

dynamodb.describeTable({
    TableName: "user"
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));// '2' is to beautify the output 
    }
});