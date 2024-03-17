# Init nodejs project
``` 
npm init
```  
```
npm i aws-sdk
```
# Create bucket:
```
awslocal s3api create-bucket --bucket localstackbucket
``` 
## List bucket:
``` awslocal s3api list-buckets ```

# Run
``` node s3.js ```

AWS-SDK v2
- List bucket
- Put object
- List object