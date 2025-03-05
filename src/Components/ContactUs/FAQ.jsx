import { useEffect, useRef, useState } from 'react'
import { FAQContainer, FAQTitle, QuestionContainer, Question, Answer, ArrowIcon } from '../../Styles/ContactUsStyle/FAQStyle'
// import arrow from '../../assets/images/arrow.svg'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqRef = useRef(null);

    const toggleFAQ = (index) =>{
        setActiveIndex(activeIndex === index ? null: index);
    };

    const faqs = [
        {
            question: 'Do you offer personalised care plans?',
            answer: 'Yes we conduct thorough assessments to develop individualised care plans tailored to each clients physical, emotional and lifestyle needs.',
          },
          {
            question: 'What type of services do you offer?',
            answer: 'We provide home based interventions for our clients by focussing on the individual care plans,providing physical and cognitive care.',
          },
          {
            question: 'How do you improve the quality of life of your clients?',
            answer: 'We deliver personalised care by promoting  physical, emotional and cognitive well-being through engagement activities and social interaction. We provide emotional support for both clients and their caregivers throughout their journey with us.',
          },
    ];


    useEffect(() => {
      if (window.location.hash === "#faq") {
        faqRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, []);


  return (
    <FAQContainer id="faq" ref={faqRef}>
        <FAQTitle>Frequently asked questions</FAQTitle>
        {faqs.map((faq, index) => (
            <QuestionContainer key={index} >
                <Question onClick={() => toggleFAQ(index)} >
                    {faq.question}
                    
                    <ArrowIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow_compressed.png" alt="Arrow-Icon" rotate={activeIndex == index ? 90:270} />
                </Question>
                {activeIndex === index && <Answer> {faq.answer} </Answer>}
            </QuestionContainer>
        ))}
    </FAQContainer>
  )
}

export default FAQ