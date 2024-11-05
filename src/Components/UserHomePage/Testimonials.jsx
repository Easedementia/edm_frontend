import { TestimonialsWrapper, Title, TestimonialsContainer, TestimonialCard, TestimonialText, Stars, Profile, ProfileImage, ProfileInfo, ProfileName, ProfileTitle } from '../../Styles/UserHomeStyle/TestimonialsStyle'
import testimonial_1 from '../../assets/images/testimonial_1.jpg'
import testimonial_2 from '../../assets/images/testimonial_2.jpg'
import testimonial_3 from '../../assets/images/testimonial_3.jpg'



const testimonials = [
    {
        text: "Awesome team! Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
        name: "Mathew Paul",
        title: "Founder of Borcelle",
        image: testimonial_2
    },

    {
        text: "Great Service Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
        name: "Meera Nambiar",
        title: "CEO at Borcelle",
        image: testimonial_1
    },

    {
        text: "Good Initiative Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
        name: "David John",
        title: "CFO at Borcelle",
        image: testimonial_3
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