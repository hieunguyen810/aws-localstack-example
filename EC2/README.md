## Create private key
``` awslocal ec2 create-key-pair --key-name myseckey --query 'KeyMaterial' --output text | tee key.pem ```

``` awslocal ec2 import-key-pair --key-name myseckey --public-key-material file://~/.ssh/id_rsa.pub ```

## Terraform

``` terraform init ```
``` terraform plan ```
``` terraform apply ```

