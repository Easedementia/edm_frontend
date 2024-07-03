import { OuterContainer, InnerContainer, TeamContainer, TeamSubHeading, TeamHeading, TeamGrid, TeamMemberCard, TeamMemberImage, TeamMemberName, TeamMemberRole } from '../../Styles/AboutUsStyle/MeetOurTeamStyle'
import Roshan from '../../assets/images/Roshan.jpg'


const teamMembers = [
    {
        image: Roshan,
        name: 'Roshan Zacharias',
        role: 'Full Stack Developer'
    },

    {
        image: Roshan,
        name: 'P J Jolly',
        role: 'CEO, Co Founder'
    },

    {
        image: Roshan,
        name: 'Meera Nambiar',
        role: 'CEO at Borcelle'
    },

    {
        image: Roshan,
        name: 'Dr. Jino Joy',
        role: 'Medical Advisor'
    },

    {
        image: Roshan,
        name: 'David John',
        role: 'Founder of Borcelle'
    },

    {
        image: Roshan,
        name: 'Peter Parker',
        role: 'Founder of Borcelle'
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