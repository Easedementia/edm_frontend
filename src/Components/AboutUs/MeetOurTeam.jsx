import { OuterContainer, InnerContainer, TeamContainer, TeamSubHeading, TeamHeading, TeamGrid, TeamMemberCard, TeamMemberImage, TeamMemberName, TeamMemberRole } from '../../Styles/AboutUsStyle/MeetOurTeamStyle'
import pj_jolly1 from '../../assets/images/pj_jolly1.jpg'
import amrutha from '../../assets/images/amrutha.jpg'
import snijo from '../../assets/images/snijo.jpg'
import jaison from '../../assets/images/jaison.jpg'
import praveen from '../../assets/images/praveen.jpg'
import jino from '../../assets/images/dr_jino.jpg'


const teamMembers = [
    {
        image: pj_jolly1,
        name: 'P J Jolly',
        role: 'CEO, Co Founder'
    },

    {
        image: amrutha,
        name: 'Amrutha P Varghese',
        role: 'Co Founder'
    },

    {
        image: snijo,
        name: 'Snijo P J',
        role: 'Co Founder'
    },

    {
        image: jaison,
        name: 'Jaison Joseph',
        role: 'Founder of Borcelle'
    },

    {
        image: praveen,
        name: 'Praveen Rajappan',
        role: 'Founder of Borcelle'
    },

    {
        image: jino,
        name: 'Dr. Jino Joy',
        role: 'Medical Advisor'
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