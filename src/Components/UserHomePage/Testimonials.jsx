import { TestimonialsWrapper, Title, TestimonialsContainer, TestimonialCard, TestimonialText, Stars, Profile, ProfileImage, ProfileInfo, ProfileName, ProfileTitle } from '../../Styles/UserHomeStyle/TestimonialsStyle'
// import testimonial_1 from '../../assets/images/testimonial_1.jpg'
// import testimonial2 from '../../assets/images/testimonial2.jpg'
// import testimonial3 from '../../assets/images/testimonial3.jpg'




const testimonials = [
    {
        text: "Awesome team! I see a good change in my father. The activities calm him and help him focus. The team is doing a wonderful job. Your excellent interventions is making us hope he can cross 100 in flying colors.",
        name: "Saira George",
        title: "Kochi",
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/testimonial_1.jpg"
    },

    {
        text: "Good work team! Our experiences with Ease Dementia was excellent. Especially the intervention specialist who was handling the interactive sessions was very patient and dedicated.",
        name: "Reena George",
        title: "Kochi",
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/testimonial2.jpg"
    },

    {
        text: "Thank you easedementia. You have made a difference in the life of our father . The calm demeanor empathy of the intervention specialist has encouraged father to develop a sense of purposefulness.",
        name: "Rani Antony",
        title: "Kochi",
        image: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/testimonial3.jpg"
    }
];


const Testimonials = () => {
  return (
    <TestimonialsWrapper>
        <Title>What Our Customers Say</Title>
        <TestimonialsContainer>
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} >
                    <TestimonialText>{testimonial.text}</TestimonialText>
                    <Stars/>
                    <Profile>
                        <ProfileImage src={testimonial.image} alt = {testimonial.name} />
                        <ProfileInfo>
                            <ProfileName>{testimonial.name}</ProfileName>
                            <ProfileTitle>{testimonial.title}</ProfileTitle>
                        </ProfileInfo>
                    </Profile>
                </TestimonialCard>
            ))}
        </TestimonialsContainer>
    </TestimonialsWrapper>
  )
};

export default Testimonials