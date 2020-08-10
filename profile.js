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

baseProfile.shortDescription = "Hi there! I'm Nghia, another full stack developer! I have 2 years in web development and best at Javascript especially in ReactJS and NodeJS. But that's just half of my story, I started my career as an R&D expertise in Unilever and that bring me full insight of customer behavior, all aspects of successful product. With all that lessons, I always try to broaden my knowledge not only in technical problem but also the practice business story. I'm also the founder of a small tech team (#KaizenAsia) so if you also interested in entrepreneur or start up, please don't hesitate to call me for a coffee. :)"

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
    description: ""
};
const aptechEducationDescription = `
    - A comprehensive course of software engineer that cover the most aspect of a practice software engineering knowledge.
    - [Graduated with the outstanding class. Be the Aptech Face - make a presentation that represented for the graduated students in the ending ceremony ](https://aptechvietnam.com.vn/BAI-DIEN-VAN-CHAM-VAO-TRAI-TIM-MOI-NGUOI?fbclid=IwAR0fploMrj1H3D6jdXFTC1AValYEvSLlTRXGFXNCOPNuyEeftkST4a4z_U8)
    - [Be the unique student that get the 100% Scholarship for entire training course](https://aptechvietnam.com.vn/content/gap-go-chang-trai-am-tron-suat-hoc-bong-toan-phan-65-trieu-tu-aptech).
`
aptechEducation.description = aptechEducationDescription

const informationTechnologyEducation = {
    "title": "Bachelor of Computer Science",
    "school": "University of Technology of HCMC",
    "rangeFrom": "2017-10",
    "rangeTo": "2019-02",
    "description": ""
}
const informationTechnologyEducationDescription = `
    - The 2nd university degree that cover the fundamental knowledge in Computer Science fields include: Data Structure & Algorithm, Software and Hardware basic, Operation System and Networking. 
`
informationTechnologyEducation.description = informationTechnologyEducationDescription

const foodChemistryEducation = {
    "title": "Bachelor of Food Chemistry",
    "school": "Industrial University of HCMC",
    "rangeFrom": "2011-10",
    "rangeTo": "2016-10",
    "description": ""
}
const foodChemistryEducationDescription = `
    - My first university degree. A comprehensive courses of Food Technology and Chemistry that much improve the chemistry and food knowledges, reading & research science, analytic, R language...
`
foodChemistryEducation.education = foodChemistryEducationDescription

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
    "description": "",
    "achievements": ""
}
const axonExperiencesDescription = `
    - Working as the Front end Core library contributor.
    - Designed, implemented reusable component that follow the Design System guidelines and being used by all other Axon's frontend projects that ensure good interfaces, UX as well as good a11y assessment
    - Designed, implemented code checking plugins
    - Researched, analysed usages of the library.
    - Researched, proposed the new architect proposal
    - Investigate performance problems and take action to mitigate
`
axonExperiences.description = axonExperiencesDescription
const axonExperiencesAchievements = `
    - Proposed and be accepted the new architect for styling component that is themed base which bring some benefits:
     - reduce the boilerplate code
     - easy to maintain
     - reduce the overhead runtime
     - better theme support   
`
axonExperiences.achievements = axonExperiencesAchievements

const grabExperiences = {
    "title": "Senior Fullstack Developer - Frontend lead",
    "company": "Grab Co.Ltd",
    "rangeFrom": "2018-10",
    "rangeTo": "2020-05",
    "technologyStacks": ["Go", "React", "GraphQL", "MySQL", "Kafka", "Redis", "AWS", "Terraform", "PagerDuty", "DataDog", "microservices"],
    "description": "",
    "achievements": ""
};
const grabExperiencesDescription = `
    - Belong to DAX(Driver Acquisition Experience) family. Working in Grab Rental system - a project that help drivers to rent vehicles from Grab.
    - Designed, implemented in both Front end and Back end and deployed installment payment systems that take 1 million SGD dollar per week that go live in Singapore and Indonesia over a year that is highly availability and reliable.
    - Take the Front end lead role (team size: 10) that responsible for clarify requirements with the stakeholders and collaborate with other service owner.
    - Analyse, break down tasks and provide the estimations that follow Agile/Scrum for each 2 weeks sprint.
    - Designed, implemented a Docker-base system that launch an production-like system environment that bring a better DevExperiences for QA and devs with very limited resources.
    - Designed, implemented an automate code generated for API test.
    - Proposed, designed and implemented an End to end testing solution that adapt BDD style, automate generate testing report in Testrail and integrate with Docker & CI/CD.
    - Implemented a non Redux usage React architecture that is heavily component base  
    - Implemented automated data correction job that detect and correct the data error in the system.
    - Interview and successfully recruited candidates for DAXs. All the passed candidates have passed the probation and highly rated by the managers        
`
grabExperiences.description = grabExperiencesDescription
const grabExperiencesAchievements = `
    - Be the Employee of the Month - 2 times
    - Rated Outstanding - in 2019 review
    - Be promoted 2 times in a year
    - Directly involved, support and Successfully launch Singapore Grab Rental and Indonesia Grab Rental
    - The proposed end 2 end solution has been widely applied in DAX and other Grab Tech Family 
`
grabExperiences.achievements = grabExperiencesAchievements

const kaizenExperiences = {
    "title": "Founder",
    "company": "Kaizen IT Solution",
    "rangeFrom": "04-2018",
    "rangeTo": "10-2018",
    "technologyStacks": ["React", "NodeJS", "GraphQL", "AWS", "DynamoDB", "Digital Ocean", "Salesforce"],
    "description": "",
    "achievements": ""
}
kaizenExperiences.description = `
    Kaizen Asia is a small tech team which was established in April 2018. Our message are: "Run faster, cost less", Kaizen Asia was borned to help the small start up and small corporation to build high quality software with minimum start up with the latest technology: React, NodeJS, GraphQL and Salesforce. With only 4 members, my responsibilities are:
     - Communicate and give advice related to business as well as technology to meet all requirements by the most effective way
     - Responsibility as Techincal Architecture, measure and give solutions to all BA's requirement. Make
decision to technology and hardware requirement.
     - Research and make experience related to new technology stack: GraphQL, Cloud Base Solution, assign
those tasks to other member
     - Project Management, assign tasks, measure and responsible for estimate resources.
     - Responsible for all other non-tech business life: Finance, Accountant as well as take care the team building activities.
`
kaizenExperiences.achievements = `
    **The8days.vn**:
    - Successfully build and launch within 12 weeks. 
    - A project of 8days Company - a company of Hanwha Corp - Korea.
    - An ERP solution in HORECA industry that widely use in the canteen, restaurants in Bac Ninh industry park
    - We provide the entire software solution and deployment from the design phase to the production launching that includes:
        - Cloud Base Solution in AWS
        - Server with NodeJS
        - Native App with Android, iOS
        - Management Portal with React
    **Animastudios.co**:
    - Successfully build and launch within 6 weeks.
    - The main website for an Australia based movie animation studio
    - An interactive website and PWA that have eye catching, beautiful animation and good UI/UX
    - We provide the entire software solution and deployment from the design phase to the production launching.    
`

const mulodoExperiences = {
    "title": "Salesforce Developer",
    "company": "Mulodo Inc",
    "rangeFrom": "2017-11",
    "rangeTo": "2018-04",
    "technologyStacks": ["Salesforce", "AngularJS", "Lightning", "Heroku"],
    "description": "",
    "achievements": ""
}
mulodoExperiences.description = `
    Mulodo is a special place where developer does not take care only about their code lines but also customer. I work as a Salesforce Cloud Developer together with Salesforce Admin - take role to communicate with other agency in order to give technology advice and make it become real software solution
    - Front end: using Visualforce page, Apex Component, Lightning design system and AngularJS.
    - Back end: using Apex Class, Batch, Future Action, sObject, deploy, manipulate meta data, migration org...
    - Responsibility for research and apply new tool to improve development speed. 
    - Make workshop and trainning all new technology to other developers.
`
mulodoExperiences.achievements = `
    Propose a new architecture that separate front end and back end development and leverage SPA development.
`

const exeExperiences = {
    "title": "Full-stack software engineer",
    "company": "EXE Corporation",
    "rangeFrom": "2016-11",
    "rangeTo": "2017-10",
    "technologyStacks": ["NodeJS", "Angular", "MySQL", "KoaJS", "Jenkin"],
    "description": "",
    "achievements": "",
}
exeExperiences.description = `
    - Involved in projects related to education, e-commerce products of EXE especially SAM (School Activities Management). Work in both outsourcing and product development.
    - Communicate and get requirements direct from customers. Collaborate with BA to define app features as well as UI/UX of
product.
    - Estimation, task planning for teammates in order to dedicate the expect deadline from customer and
company leaders.
    - Using Git Centralize WorkFlow in SVC Management.
    - Full Stack Software Development. Adapt the software development process: Agile – Scrum, Water Fall, TDD, BDD …
    - Research, update the new technology stack: Angular, ReactJS, Microservices, GraphQL as well as other CI, CD tool: Jenkin, Docker, Pipelines…
    - Introduce, presentation, trainning about products for clients…
    - Participate in building activities such as: programming training, soft skill traning, outdoor activities….
`

baseProfile.experiences = [
    axonExperiences,
    grabExperiences,
    kaizenExperiences,
    mulodoExperiences,
    exeExperiences,
]


export default baseProfile





