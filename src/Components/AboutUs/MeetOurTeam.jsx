import { OuterContainer, InnerContainer, TeamContainer, TeamSubHeading, TeamHeading, TeamGrid, TeamMemberCard, TeamMemberImage, TeamMemberName, TeamMemberRole } from '../../Styles/AboutUsStyle/MeetOurTeamStyle'
import testimonial_3 from '../../assets/images/testimonial_3.jpg'


const teamMembers = [
    {
        image: testimonial_3,
        name: 'Roshan Zacharias',
        role: 'Full Stack Developer'
    },

    {
        image: testimonial_3,
        name: 'P J Jolly',
        role: 'CEO, Co Founder'
    },

    {
        image: testimonial_3,
        name: 'Meera Nambiar',
        role: 'CEO at Borcelle'
    },

    {
        image: testimonial_3,
        name: 'Dr. Jino Joy',
        role: 'Medical Advisor'
    },

    {
        image: testimonial_3,
        name: 'David John',
        role: 'Founder of Borcelle'
    },

    {
        image: testimonial_3,
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