Vagrant.configure("2") do |config| 
 
config.vm.define "quiz-server" do |config|
    VM_NAME= "quiz-server"
    VM_IP= "10.0.1.50"
    config.vm.box = "generic/ubuntu2204"
    config.vm.hostname = "#{VM_NAME}"
    config.vm.boot_timeout = 600
    config.vm.network :private_network, ip: "#{VM_IP}"
  
    config.vm.provision "ansible" do |ansible|
        ansible.playbook = "ansible/quiz_server.yml"
#        ansible.verbose = "vvv"
        ansible.compatibility_mode = "2.0"
        ansible.extra_vars = {
          ansible_python_interpreter: "/usr/bin/python3",
          hostname: "quiz-app",
          server_ip: "#{VM_IP}",
    
        }
    end

    config.vm.provider "virtualbox" do |vb, override|
      vb.gui = true
      vb.name = "#{VM_NAME}"
      vb.customize ["modifyvm", :id, "--memory", "4096"]
      vb.customize ["modifyvm", :id, "--cpus", "4"]
    end
  end
  


end
