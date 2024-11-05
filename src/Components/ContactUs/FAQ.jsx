import { useState } from 'react'
import { FAQContainer, FAQTitle, QuestionContainer, Question, Answer, ArrowIcon } from '../../Styles/ContactUsStyle/FAQStyle'
import arrow from '../../assets/images/arrow.svg'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) =>{
        setActiveIndex(activeIndex === index ? null: index);
    };

    const faqs = [
        {
            question: 'What all services does Easedementia Provide?',
            answer: 'Whether you are a caregiver, someone living with memory loss, or a compassionate community member, the Memory Cafe warmly welcomes you. Together, we can create a supportive and inclusive space where memories are shared, friendships are formed, and lives are fulfilled.',
          },
          {
            question: 'What is dementia, and how do you provide specialized care for individuals with dementia?',
            answer: 'Dementia is a general term for a decline in cognitive function severe enough to interfere with daily life. Our specialized care includes personalized care plans, memory-enhancing activities, and support for families and caregivers.',
          },
    ];

  return (
    <FAQContainer>
        <FAQTitle>Frequently asked questions</FAQTitle>
        {faqs.map((faq, index) => (
            <QuestionContainer key={index} >
                <Question onClick={() => toggleFAQ(index)} >
                    {faq.question}
                    
                    <ArrowIcon src={arrow} alt="Arrow-Icon" rotate={activeIndex == index ? 90:270} />
                </Question>
                {activeIndex === index && <Answer> {faq.answer} </Answer>}
            </QuestionContainer>
        ))}
    </FAQContainer>
  )
}

export default FAQ