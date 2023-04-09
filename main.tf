terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "ap-southeast-1"
}



resource "aws_security_group" "splunk" {
  name   = "quiz"
  vpc_id = "vpc-045e3f6d9f04deaa6" # VPC pre-setup in aws console

ingress {
    from_port = 0
    to_port   = 0
    protocol    = "-1"
    cidr_blocks = ["116.86.249.85/32"]  # brian's home ISP public ip
  }


ingress {
    from_port = 0
    to_port   = 0
    protocol    = "-1"
    cidr_blocks = ["129.126.176.49/32"]  # Office 7 ISP public ip
  }


ingress {
    from_port = 8000
    to_port   = 8000
    protocol    = "tcp"
    cidr_blocks = ["104.28.0.0/16"]  # Cloudfare 7 ISP public ip
  }

	
ingress {
    from_port = 0
    to_port   = 0
    protocol    = "-1"
    cidr_blocks = ["10.1.15.0/24"]  # internal IP 
  }


  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}


resource "aws_instance" "quiz-server" {
  ami           = "ami-02ee763250491e04a"
  instance_type = "t2.micro"
  iam_instance_profile = "brian-ec2-ssm"
  subnet_id   = "subnet-030477b31c6a349da" # subnet pre-setup in aws console

  vpc_security_group_ids = [aws_security_group.splunk.id]

 
  associate_public_ip_address = true
  private_ip    = "10.1.15.11"
   root_block_device {
    delete_on_termination = "true"
  }

  key_name = "brian-pub-key"
    tags = {
    Name = "brian-ec2"
  }

   provisioner "local-exec" {
        working_dir = "./ansible"
        command = "sleep 20; ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -u ubuntu --private-key /root/.ssh/id_rsa -i '${self.public_ip},' quiz_server.yml -e 'ansible_python_interpreter=/usr/bin/python3 server_ip=${self.public_ip} hostname=quiz-app'"     

    }


}



output "quiz_url" {
  description = "Public IP address of the EC2 instance"
  value       = "http://${aws_instance.quiz-server.public_ip}:3000"
}

 