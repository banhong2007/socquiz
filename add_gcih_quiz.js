const db = require('../models/db.js');
const Quiz = require('../models/QuizSchema.js');

db.connect();

var quiz1 = {
    idNum: 105,
    status: "Published",
    title: "GCIH Exam",
    author: "socquizadmin",
    numItems: 10,
    dateCreated: new Date(),
    dateUpdated: new Date(),
    description: "Description of SOC Quiz 100.",
    accuracies: [],
    timesTaken: 0,
    questions: [{

index:1,
body:"Adam works as an Incident Handler for Umbrella Inc. He has been sent to the California unit to train the members of the incident response team. As a demo project he asked members of the incident response team to perform the following actions:<br>✑ Remove the network cable wires.<br>✑ Isolate the system on a separate VLAN<br>✑ Use a firewall or access lists to prevent communication into or out of the system.<br>✑ Change DNS entries to direct traffic away from compromised system<br>Which of the following steps of the incident handling process includes the above actions?<br>",
choiceA: "Identification",
choiceB: "Containment",
choiceC: "Eradication",
choiceD: "Recovery",
correctAnswer: "choice-B",
explanation: "", image: "", audio: "" },
{
index:2,
body:"Adam, a novice computer user, works primarily from home as a medical professional. He just bought a brand new Dual Core Pentium computer with over 3 GB of<br>RAM. After about two months of working on his new computer, he notices that it is not running nearly as fast as it used to. Adam uses antivirus software, anti- spyware software, and keeps the computer up-to-date with Microsoft patches. After another month of working on the computer, Adam finds that his computer is even more noticeably slow. He also notices a window or two pop-up on his screen, but they quickly disappear. He has seen these windows show up, even when he has not been on the Internet. Adam notices that his computer only has about 10 GB of free space available. Since his hard drive is a 200 GB hard drive, Adam thinks this is very odd.<br>Which of the following is the mostly likely the cause of the problem?<br>",
choiceA: "Computer is infected with the stealth kernel level rootkit.",
choiceB: "Computer is infected with stealth virus.",
choiceC: "Computer is infected with the Stealth Trojan Virus.",
choiceD: "Computer is infected with the Self-Replication Worm.",
correctAnswer: "choice-A",
explanation: "", image: "", audio: "" },

{
index:3,
body:"Which of the following types of attacks is only intended to make a computer resource unavailable to its users?<br>",
choiceA: "Denial of Service attack",
choiceB: "Replay attack",
choiceC: "Teardrop attack",
choiceD: "Land attack",
correctAnswer: "choice-A",
explanation: "", image: "", audio: "" },
{
index:4,
body:"Which of the following types of attack can guess a hashed password?<br>",
choiceA: "Brute force attack",
choiceB: "Evasion attack",
choiceC: "Denial of Service attack",
choiceD: "Teardrop attack",
correctAnswer: "choice-A",
explanation: "",	image: "",	audio: "" },
{
index:5,
body:"In which of the following DoS attacks does an attacker send an ICMP packet larger than 65,536 bytes to the target system?<br>",
choiceA: "Ping of death",
choiceB: "Jolt",
choiceC: "Fraggle",
choiceD: "Teardrop",
correctAnswer: "choice-A",
explanation: "",	image: "",	audio: "" },
{
index:6,
body:"Adam has installed and configured his wireless network. He has enabled numerous security features such as changing the default SSID, enabling WPA encryption, and enabling MAC filtering on his wireless router. Adam notices that when he uses his wireless connection, the speed is sometimes 16 Mbps and sometimes it is only 8 Mbps or less. Adam connects to the management utility wireless router and finds out that a machine with an unfamiliar name is connected through his wireless connection. Paul checks the router's logs and notices that the unfamiliar machine has the same MAC address as his laptop.<br>Which of the following attacks has been occurred on the wireless network of Adam?<br>",
choiceA: "NAT spoofing",
choiceB: "DNS cache poisoning",
choiceC: "MAC spoofing",
choiceD: "ARP spoofing",
correctAnswer: "choice-C",
explanation: "",	image: "",	audio: "" },
{
index:7,
body:"Which of the following is a technique of using a modem to automatically scan a list of telephone numbers, usually dialing every number in a local area code to search for computers, Bulletin board systems, and fax machines?<br>",
choiceA: "Demon dialing",
choiceB: "Warkitting",
choiceC: "War driving",
choiceD: "Wardialing",
correctAnswer: "choice-D",
explanation: "",	image: "",	audio: "" },
{
index:8,
body:"Network mapping provides a security testing team with a blueprint of the organization. Which of the following steps is NOT a part of manual network mapping?<br>",

choiceA: "Gathering private and public IP addresses",
choiceB: "Collecting employees information",
choiceC: "Banner grabbing",
choiceD: "Performing Neotracerouting",
correctAnswer: "choice-D",
explanation: "",	image: "",	audio: "" },
{
index:9,
body:"Which of the following types of attacks is the result of vulnerabilities in a program due to poor programming techniques?<br>",
choiceA: "Evasion attack",
choiceB: "Denial-of-Service (DoS) attack",
choiceC: "Ping of death attack",
choiceD: "Buffer overflow attack",
correctAnswer: "choice-D",
explanation: "",	image: "",	audio: "" },
{
index:10,
body:"John works as a professional Ethical Hacker. He has been assigned the project of testing the security of www.we-are-secure.com. He finds that the We-are- secure server is vulnerable to attacks. As a countermeasure, he suggests that the Network Administrator should remove the IPP printing capability from the server. He is suggesting this as a countermeasure against __________.<br>",
choiceA: "IIS buffer overflow",
choiceB: "NetBIOS NULL session",
choiceC: "SNMP enumeration",
choiceD: "DNS zone transfer",
correctAnswer: "choice-a",
explanation: "",	image: "",	audio: "" 
 }]
};

db.insertMany(Quiz, [quiz1], function (flag) {
    if (flag) {
        console.log("\nDatabase population completed!");
		process.exit();
    }
});
