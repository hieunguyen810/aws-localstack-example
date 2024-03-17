const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  endpoint: 'http://s3.localhost.localstack.cloud:4566',
  s3ForcePathStyle: true,  // If you want to use virtual host addressing of buckets, you can remove `s3ForcePathStyle: true`. 
  accessKeyId: 'test',
  secretAccessKey: 'test',
  region: 'us-east-1',
});

s3.api.globalEndpoint = 's3.localhost.localstack.cloud';

// (async() => {
//   await s3
//     .putObject({
//       Body: "hello world",
//       Bucket: "localstackbucket",
//       Key: "my-file.txt"
//     })
//     .promise(); 
// })();

// Call an S3 API using the LocalStack endpoint
s3.listBuckets((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
var params = {
  Bucket: "localstackbucket", 
  MaxKeys: 2
}

s3.listObjects(params, function(err, data){
  if (err) console.log(err, err.stack);
  else     console.log(data); 
});
