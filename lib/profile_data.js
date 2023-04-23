import aptechEdu from './md/aptech-edu.md'
import hcmutEdu from './md/hcmut-edu.md'
import iuhEdu from './md/iuh-edu.md'

import axonExp from './md/axon-exp.md'
import axonAchiev from './md/axon-achiev.md'

import grabExp from './md/grab-exp.md'
import grabAchiev from './md/grab-achiev.md'

import kaizenExp from './md/kaizen-exp.md'
import kaizenAchiev from './md/kaizen-achiev.md'

import mldExp from './md/mld-exp.md'
import mldAchiev from './md/mld-achiev.md'

import exeExp from './md/exe-exp.md'
import exeAchiev from './md/exe-achiev.md'

import nabExp from './md/nab-exp.md'
import nabAchiev from './md/nab-achieve.md'

const baseProfile = {
    "fullName": "Nguyen Trung Nghia",
    "role": "Principle Engineer",
    "email": "nghiafoodtech@gmail.com",
    "phone": "0792132815",
    "dob": "1993-06-11",
    "linkedin": "https://linkedin.com/in/nghia-nguyen-it",
    "languages": [{"name":  "English", "level":  "IELTS 6.5"}],
    // "interests": ["Play music", "Reading book", "Play football", "E-sport", "Travel"],
    "references": [
        {"name": "Tuan Le", "title":  "Engineer Manager at Grab"},
        {"name": "Kristian Krandall", "title": "Engineer Manager at Axon"},
        {"name": "Hung Nguyen", "title": "Engineer Manager at NAB"}
    ],
    // "additionalInformation": ["I'm a guitarist and keyboardist. I usually make some fun noise at outdoor company activities"],
    "shortDescription": "",
    "education": [],
    "experiences": [],
    "technology": []
}

baseProfile.shortDescription = `Hi, there! I'm Nghia, another software engineer! I have more than 7 years of experience in full-stack web development, in which 2 years in car rental service at Grab Singapore & more than 3 years in open banking area. I love to design & build high-quality software, especially in web apps & web services. I'm a delver who is always eager to explore cutting-edge technologies. Reading Medium, Oreilly & technical articles is one of my favorite activities. In the contrast, I'm open, friendly & love music & games. Need some music at your party? Invite me. I will bring up my guitar & keyboard on stage. ;)`

baseProfile.technology = [
    {
        "level": "good",
        "skillSet": ["ReactJS", "NodeJS", "Bash script", "Go", "SQL", "AWS", "Solution design"]
    },
    {
        "level": "medium",
        "skillSet": ["Java", "MongoDB", "DynamoDB", "Google Cloud", "Design System", "Docker", "K8s", "Nginx", "Datadog", "GitLab", "GitHub"]
    }
]

const aptechEducation = {
    "title":  "High Diploma of Software Engineer",
    "school":  "Aptech Aprotrain",
    "rangeFrom":  "2016-10",
    "rangeTo": "2018-08",
    description: aptechEdu
};

const informationTechnologyEducation = {
    "title": "Bachelor of Computer Science",
    "school": "The University of Technology of HCMC",
    "rangeFrom": "2017-10",
    "rangeTo": "2019-02",
    "description": hcmutEdu
}

const foodChemistryEducation = {
    "title": "Bachelor of Food Chemistry",
    "school": "The Industrial University of HCMC",
    "rangeFrom": "2011-10",
    "rangeTo": "2016-10",
    "description": iuhEdu
}

baseProfile.education = [
    aptechEducation,
    informationTechnologyEducation,
    foodChemistryEducation,
]

const nabExperiences = {
    "title": "Principle Engineer",
    "company": "National Australia Bank",
    "rangeFrom": "11-2020",
    "rangeTo": "now",
    "technologyStacks": [
        "micro-services",
        "micro-frontend",
        "multi-cloud",
        "AWS",
        "React",
        "NodeJS",
        "GraphQL",
        "Api Gateway - Kong",
        "OpenAPI",
        "Lambda",
        "Docker",
        "PostgresSQL",
        "Splunk",
        "Jenkins",
        "Kafka",
        "ActiveMQ",
        "SpringBoot",
        "DynamoDB",
    ],
    "description": nabExp,
    "achievements": nabAchiev
};

const axonExperiences = {
    "title": "Front-end Engineer - Core Team",
    "company": "Axon US",
    "rangeFrom": "05-2020",
    "rangeTo": "10-2020",
    "technologyStacks": ["React", "Redux", "Go", "Scala", "Media streaming", "Datadog", "Terraform", "Kubernetes", "VM"],
    "description": axonExp,
    "achievements": axonAchiev
};

const grabExperiences = {
    "title": "Senior Fullstack Developer - Frontend lead",
    "company": "Grab Co.Ltd",
    "rangeFrom": "10-2018",
    "rangeTo": "05-2020",
    "technologyStacks": ["Go", "React", "GraphQL", "MySQL", "Kafka", "Redis", "AWS", "Terraform", "PagerDuty", "DataDog", "microservices"],
    "description": grabExp,
    "achievements": grabAchiev
};

const kaizenExperiences = {
    "title": "Founder",
    "company": "Kaizen IT Solution",
    "rangeFrom": "04-2018",
    "rangeTo": "10-2018",
    "technologyStacks": ["React", "NodeJS", "GraphQL", "AWS", "DynamoDB", "Digital Ocean", "Salesforce"],
    "description": kaizenExp,
    "achievements": kaizenAchiev
}

const mulodoExperiences = {
    "title": "Salesforce Developer",
    "company": "Mulodo Inc",
    "rangeFrom": "11-2017",
    "rangeTo": "04-2018",
    "technologyStacks": ["Salesforce", "AngularJS", "Lightning", "Heroku"],
    "description": mldExp,
    "achievements": mldAchiev
}

const exeExperiences = {
    "title": "Full-stack software engineer",
    "company": "EXE Corporation",
    "rangeFrom": "11-2016",
    "rangeTo": "10-2017",
    "technologyStacks": ["NodeJS", "Angular", "MySQL", "KoaJS", "Jenkin"],
    "description": exeExp,
    "achievements": exeAchiev,
}

baseProfile.experiences = [
    nabExperiences,
    axonExperiences,
    grabExperiences,
    kaizenExperiences,
    mulodoExperiences,
    exeExperiences,
]


export default baseProfile





