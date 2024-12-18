import UserNavbar from "../Navbar/UserNavbar"
import { CareersContainer, LeftSection, CareersHeader, CareersDescription, ContactInfo, Icon, JobContainer, JobTitle, JobItemContainer, JobItem, JobDetails, ArrowIcon } from '../../Styles/Careers/CareersStyle'
import arrow from '../../assets/images/arrow.svg'
import { useState } from "react";
import Footer from "../Footer/Footer";
import email from '../../assets/images/email.svg'
import phone1 from '../../assets/images/phone1.svg'



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
    {
      title: "VR Developer",
      qualifications: ["Strong Unity/Unreal experience", "C# or C++ proficiency"],
    },
  ];

  return (
    <>
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
                  src={arrow}
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