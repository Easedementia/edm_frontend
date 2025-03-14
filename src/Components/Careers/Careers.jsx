import UserNavbar from "../Navbar/UserNavbar"
import { CareersContainer, LeftSection, CareersHeader, CareersDescription, ContactInfo, Icon, JobContainer, JobTitle, JobItemContainer, JobItem, JobDetails, ArrowIcon } from '../../Styles/Careers/CareersStyle'
// import arrow from '../../assets/images/arrow.svg'
import { useState } from "react";
import Footer from "../Footer/Footer";
import email from '../../assets/images/email.svg'
import phone1 from '../../assets/images/phone1.svg'
import { Helmet } from "react-helmet-async";



const Careers = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleJobDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jobs = [
    {
      title: "Intervention Specialist",
      qualifications: ["MSW/MSc. Psychology", "Communication skills"],
    },
  ];

  return (
    <>
    <Helmet>
      <title>Join Our Team | Careers at Ease Dementia</title>
      <meta name="description" content="Explore career opportunities at Ease Dementia. Join us in redefining dementia care. Apply now for roles like Intervention Specialist."/>
      <meta name="keywords" content="Ease Dementia careers, dementia specialist jobs, psychology jobs, intervention specialist, elderly care careers, mental health jobs"/>
      <meta name="author" content="Ease Dementia Technologies Pvt Ltd"/>
      <meta name="robots" content="index, follow"/>

      <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
      <meta property="og:title" content="Join Our Team | Careers at Ease Dementia"/>
      <meta property="og:description" content="Explore career opportunities at Ease Dementia. Join us in redefining dementia care. Apply now for roles like Intervention Specialist."/>
      <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg"/>
      <meta property="og:url" content="https://easedementia.com/careers"/>
      <meta property="og:type" content="website"/>

      <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Join Our Team | Careers at Ease Dementia"/>
      <meta name="twitter:description" content="Looking for a meaningful career in dementia care? Ease Dementia is hiring! Check out our job openings and apply today."/>
      <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg"/>
      <meta name="twitter:url" content="https://easedementia.com/careers"/>

      <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
      <link rel="canonical" href="https://easedementia.com/careers"/>
    </Helmet>
    <UserNavbar/>
    <CareersContainer>
      <LeftSection>
        <CareersHeader>Be a part of our team at Easedementia</CareersHeader>
        <CareersDescription>
          Creating a lifeline for Indias elderly and we are letting the world know!
        </CareersDescription>
        <ContactInfo>
          <div>
            <Icon>
            <img src={email} alt="email icon" />
            </Icon>
            hr@easedementia.com
          </div>
          <div style={{marginTop:'-20px'}} >
          <Icon>
            <img src={phone1} alt="phone icon" />
            </Icon>
            +91 85906 98597
          </div>
        </ContactInfo>
      </LeftSection>

      <JobContainer>
          <JobTitle>Job Openings</JobTitle>
          {jobs.map((job, index) => (
            <JobItemContainer key={index}>
              <JobItem onClick={() => toggleJobDetails(index)}>
                {job.title}

                <ArrowIcon
                  src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg"
                  alt="Arrow-Icon"
                  rotate={activeIndex === index ? 90 : 270}
                />
              </JobItem>
              {activeIndex === index && (
                <JobDetails>
                  <ul>
                    {job.qualifications.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <strong>Send your resume to hr@easedementia.com</strong>
                </JobDetails>
              )}
            </JobItemContainer>
          ))}
        </JobContainer>
    </CareersContainer>
    <Footer/>
    </>
  )
}

export default Careers