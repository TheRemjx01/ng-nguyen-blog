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
    "role": "Lead Engineer",
    "email": "nghiafoodtech@gmail.com",
    "phone": "0792132815",
    "dob": "1993-06-11",
    "linkedin": "https://linkedin.com/in/nghia-nguyen-it",
    "languages": [{"name":  "English", "level":  "IELTS 6.5"}],
    "interests": ["Play music", "Reading book", "Play football", "E-sport", "Travel"],
    "references": [
        {"name": "Tuan Le", "title":  "Engineer Manager"},
        {"name": "Kristian Krandall", "title": "Engineer Manager"},
        {"name": "Hung Nguyen", "title": "Engineer Manager"}
    ],
    "additionalInformation": ["A good guitarist and keyboard player, maybe a music producer too. Usually make some fun noise at outdoor company activities"],
    "shortDescription": "",
    "education": [],
    "experiences": [],
    "technology": []
}

baseProfile.shortDescription = "Hi there! I'm Nghia, another full-stack developer! I have more than 4 years in web development under ReactJS, Golang, and NodeJS. But that's just half of my story. I started my career as an R&D expertise in Unilever that bring me the full insight into customer behavior, all aspects of a successful product. With all these lessons, I always try to broaden my knowledge not only in the technical problem but also in the practice business story. I'm also the founder of a small tech team (#KaizenAsia). If you are also interested in the entrepreneur or start-up, please don't hesitate to call me for a coffee. :)"

baseProfile.technology = [
    {
        "level": "good",
        "skillSet": ["React", "CSS", "GraphQL", "NodeJS", "Go", "SQL", "Javascript", "AWS"]
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
    "title": "Senior Fullstack Developer",
    "company": "National Australia Bank",
    "rangeFrom": "2020-11",
    "rangeTo": "now",
    "technologyStacks": [
        "React",
        "GraphQL",
        "VanillaJS",
        "Kong",
        "OpenAPI",
        "Lambda",
        "NodeJS",
        "Docker",
        "AWS ECS",
        "Kubernetes",
        "Jenkins",
        "Kafka",
        "ActiveMQ",
        "Java",
        "SpringBoot",
        "DynamoDB",
        "PostgresSQL",
        "Splunk",
        "AWS CloudWatch",
        "micro-services",
        "micro-frontend"
    ],
    "description": nabExp,
    "achievements": nabAchiev
};

const axonExperiences = {
    "title": "Fullstack Developer - Core",
    "company": "Axon Ltd",
    "rangeFrom": "2020-05",
    "rangeTo": "2020-10",
    "technologyStacks": ["React", "Redux", "Go", "Scala", "Media streaming", "Datadog", "Terraform", "Kubernetes", "VM"],
    "description": axonExp,
    "achievements": axonAchiev
};

const grabExperiences = {
    "title": "Senior Fullstack Developer - Frontend lead",
    "company": "Grab Co.Ltd",
    "rangeFrom": "2018-10",
    "rangeTo": "2020-05",
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
    "rangeFrom": "2017-11",
    "rangeTo": "2018-04",
    "technologyStacks": ["Salesforce", "AngularJS", "Lightning", "Heroku"],
    "description": mldExp,
    "achievements": mldAchiev
}

const exeExperiences = {
    "title": "Full-stack software engineer",
    "company": "EXE Corporation",
    "rangeFrom": "2016-11",
    "rangeTo": "2017-10",
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





