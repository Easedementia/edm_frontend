import { OuterContainer, InnerContainer, TeamContainer, TeamSubHeading, TeamHeading, TeamGrid, TeamMemberCard, TeamMemberImage, TeamMemberName, TeamMemberRole } from '../../Styles/AboutUsStyle/MeetOurTeamStyle'
// import pj_jolly1 from '../../assets/images/pj_jolly1.jpg'
// import amrutha from '../../assets/images/amrutha.jpg'
// import snijo from '../../assets/images/snijo.jpg'
// import jaison from '../../assets/images/jaison.jpg'
// import praveen from '../../assets/images/praveen.jpg'
// import jino from '../../assets/images/dr_jino.jpg'
// import amrutha1 from '../../assets/images/amrutha1.png'
// import jaison1 from '../../assets/images/jaison1.png'
// import jolly from '../../assets/images/jolly.png'
// import praveen1 from '../../assets/images/praveen1.png'
// import snijo1 from '../../assets/images/snijo1.png'
// import jino1 from '../../assets/images/jino1.png'
import LazyLoad from 'react-lazyload'


const teamMembers = [
    {
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/jolly-min.png",
        name: 'P J Jolly',
        role: 'CEO, Co Founder'
    },

    {
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/amrutha1.png",
        name: 'Amrutha P Varghese',
        role: 'Co Founder'
    },

    {
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/snijo1.png",
        name: 'Snijo P J',
        role: 'Co Founder'
    },

    {
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/jaison1.png",
        name: 'Jaison Joseph',
        role: 'Advisory Board'
    },

    {
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/praveen1.png",
        name: 'Praveen Rajappan',
        role: 'Advisory Board'
    },

    {
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/jino1.png",
        name: 'Dr. Jino Joy',
        role: 'Advisory Board'
    },
];


const MeetOurTeam = () => {
  return (
    <OuterContainer>
        <InnerContainer>
        <TeamContainer>
            <TeamSubHeading>Meet Our Team</TeamSubHeading>
            <TeamHeading>Teamwork makes the dream work</TeamHeading>
            <TeamGrid>
            {teamMembers.map((member, index) => (
                <TeamMemberCard key={index}>
                <LazyLoad height={300} offset={100}>
                <TeamMemberImage src={member.image} alt={member.name} />
                </LazyLoad>
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberRole>{member.role}</TeamMemberRole>
                </TeamMemberCard>
            ))}
            </TeamGrid>
        </TeamContainer>
        </InnerContainer>
    </OuterContainer>
  )
}

export default MeetOurTeam