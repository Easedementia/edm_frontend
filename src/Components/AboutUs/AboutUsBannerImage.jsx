import { BannerContainer, Overlay, TextContainer, TextParagraph } from '../../Styles/AboutUsStyle/BannerImageStyle'

const AboutUsBannerImage = () => {
  return (
    <BannerContainer>
        <Overlay/>
        <TextContainer>
            <TextParagraph>
                Easedementia was conceived from the idea to revolutionize dementia care and make meaningful
                difference in the lives of those living with dementia and their caregivers. We are not just a platform; 
                a dedicated community driven by compassion and powered by innovative technology.
            </TextParagraph>

            <TextParagraph>
                The Montessori Method is the cornerstone of our journey which promotes independence and provides 
                utmost respect to each individuals psychological, physical, and social development. With individualized 
                activities and gentle guidance, we nurture dignity and self-esteem, helping individuals look into each day 
                with purpose.
            </TextParagraph>
        </TextContainer>
    </BannerContainer>
  )
}

export default AboutUsBannerImage