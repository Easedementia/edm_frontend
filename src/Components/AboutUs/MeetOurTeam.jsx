import { OuterContainer, InnerContainer, TeamContainer, TeamSubHeading, TeamHeading, TeamGrid, TeamMemberCard, TeamMemberImage, TeamMemberName, TeamMemberRole } from '../../Styles/AboutUsStyle/MeetOurTeamStyle'
// import pj_jolly1 from '../../assets/images/pj_jolly1.jpg'
// import amrutha from '../../assets/images/amrutha.jpg'
// import snijo from '../../assets/images/snijo.jpg'
// import jaison from '../../assets/images/jaison.jpg'
// import praveen from '../../assets/images/praveen.jpg'
// import jino from '../../assets/images/dr_jino.jpg'
import amrutha1 from '../../assets/images/amrutha1.png'
import jaison1 from '../../assets/images/jaison1.png'
import jolly from '../../assets/images/jolly.png'
import praveen1 from '../../assets/images/praveen1.png'
import snijo1 from '../../assets/images/snijo1.png'
import jino1 from '../../assets/images/jino1.png'



const teamMembers = [
    {
        image: jolly,
        name: 'P J Jolly',
        role: 'CEO, Co Founder'
    },

    {
        image: amrutha1,
        name: 'Amrutha P Varghese',
        role: 'Co Founder'
    },

    {
        image: snijo1,
        name: 'Snijo P J',
        role: 'Co Founder'
    },

    {
        image: jaison1,
        name: 'Jaison Joseph',
        role: 'Advisory Board'
    },

    {
        image: praveen1,
        name: 'Praveen Rajappan',
        role: 'Advisory Board'
    },

    {
        image: jino1,
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
                <TeamMemberImage src={member.image} alt={member.name} />
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