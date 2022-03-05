import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import profileData from '../lib/profile_data'
import Layout from "../components/layout";

const EducationItem = ({title, school, rangeFrom, rangeTo, description}) => (
    <div className="education-item">
        <h3>{title} - <span>{school}</span></h3>
        <p><b>{rangeFrom}</b> - <b>{rangeTo}</b></p>
        <ReactMarkdown source={description}/>
    </div>
)

const ExperienceItem = ({title, company, rangeFrom, rangeTo, description, technologyStacks = [], achievements}) => (
    <div className="experience-item">
        <h3>{title} - <span>{company}</span></h3>
        <p><b>{rangeFrom}</b> - <b>{rangeTo}</b></p>
        <p>Technologies: {technologyStacks.toString()}</p>
        <ReactMarkdown source={description}/>
        <p><b>Achievements:</b></p>
        <ReactMarkdown source={achievements}/>
    </div>
)

const SkillItem = ({level, skillSet = []}) => (
    <div className="skill-item">
        <label><b>{level.toUpperCase()}</b></label>
        <p>{skillSet.toString()}</p>
    </div>
)

const Reference = ({name, title, contact}) => (
    <div className="reference">
        <label>{name} - {title}</label>
        {contact && <p>Contact: {contact}</p>}
    </div>
)

export default function Profile({profileData}) {
    return (
        <Layout home>
            <Head>
                <title>My profile page</title>
            </Head>
            <h1>{profileData.fullName}</h1>
            <h2>{profileData.role}</h2>
            <ul>
                <li>Email: {profileData.email}</li>
                <li>Phone: {profileData.phone}</li>
                <li>
                    Linkedin: <a href={profileData.linkedin}>{profileData.fullName}</a>
                </li>
                <li>Date of birth: {profileData.dob}</li>
            </ul>
            <div id="short-description">
                {profileData.shortDescription}
            </div>
            

            <div id="work-experiences">
                <h2><label>Work experiences</label></h2>
                {
                    profileData.experiences.map(props => <ExperienceItem {...props} key={props.company} />)
                }
            </div>

            <div id="skills">
                <h2><label>Skills</label></h2>
                {
                    profileData.technology.map(props => <SkillItem {...props} key={props.level} />)
                }
            </div>

            <div id="education">
                <h2><label>Education</label></h2>
                {
                    profileData.education.map(props => <EducationItem {...props} key={props.school}/>)
                }
            </div>

            <div id="references">
                <h2><label>References</label></h2>
                {
                    profileData.references.map(props => <Reference {...props} key={props.name}/>)
                }
            </div>

            {/* <div id="personal-interests">
                <h2><label>Interests</label></h2>
                <ul>
                    {
                        profileData.interests.map(info => <li>{info}</li>)
                    }
                </ul>
            </div> */}

            {/* <div id="additional-information">
                <h2><label>Additional information</label></h2>
                <ul>
                    {profileData.additionalInformation.map(info => <li>{info}</li>)}
                </ul>
            </div> */}
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            profileData
        }
    }
}