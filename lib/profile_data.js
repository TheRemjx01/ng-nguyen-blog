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

const baseProfile = {
    "fullName": "Nguyen Trung Nghia",
    "role": "Senior Fullstack Developer",
    "email": "nghiafoodtech@gmail.com",
    "phone": "0792132815",
    "dob": "1993-06-11",
    "linkedin": "https://linkedin.com/in/nghia-nguyen-it",
    "languages": [{"name":  "English", "level":  "IELTS 6.5"}],
    "interests": ["Play music", "Reading book", "Play football", "Esport", "Travel"],
    "references": [{"name": "Tuan Le", "title":  "Engineer Manager", "contact":  "tuan.le@grab.com"}],
    "additionalInformation": ["A good guitarist and keyboard player. Usually make some fun noise at outdoor company activities"],
    "shortDescription": "",
    "education": [],
    "experiences": [],
    "technology": []
}

baseProfile.shortDescription = "Hi there! I'm Nghia, another full stack developer! I have 3.5 years in web development under ReactJS, Golang and NodeJS. But that's just half of my story, I started my career as an R&D expertise in Unilever and that bring me full insight of customer behavior, all aspects of successful product. With all that lessons, I always try to broaden my knowledge not only in technical problem but also the practice business story. I'm also the founder of a small tech team (#KaizenAsia) so if you also interested in entrepreneur or start up, please don't hesitate to call me for a coffee. :)"

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
    "school": "University of Technology of HCMC",
    "rangeFrom": "2017-10",
    "rangeTo": "2019-02",
    "description": hcmutEdu
}

const foodChemistryEducation = {
    "title": "Bachelor of Food Chemistry",
    "school": "Industrial University of HCMC",
    "rangeFrom": "2011-10",
    "rangeTo": "2016-10",
    "description": iuhEdu
}

baseProfile.education = [
    aptechEducation,
    informationTechnologyEducation,
    foodChemistryEducation,
]

const axonExperiences = {
    "title": "Midlevel Fullstack Developer - Core",
    "company": "Axon Ltd",
    "rangeFrom": "2020-05",
    "rangeTo": "now",
    "technologyStacks": ["React", "Redux", "Go", "Scala", "Media streaming", "Datadog", "Terraform", "Kubernetes", "VM"],
    "description": axonExp,
    "achievements": axonAchiev
}

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
    axonExperiences,
    grabExperiences,
    kaizenExperiences,
    mulodoExperiences,
    exeExperiences,
]


export default baseProfile





