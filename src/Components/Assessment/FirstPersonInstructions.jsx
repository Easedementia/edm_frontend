import { useState } from 'react'
import { Container, Title, Subtitle, InstructionsList, InstructionItem, CheckboxWrapper, Button, ArrowIcon } from '../../Styles/AssessmentStyle/FirstPersonInstructionsStyle'
import UserNavbar from '../Navbar/UserNavbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import arrow from '../../assets/images/arrow.svg'

const FirstPersonInstructions = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleProceedClick = () => {
        if (isChecked){
            navigate('/assessment/first-person-assessment-client-details');
        }
    };


  return (
    <>
    <UserNavbar/>
    <Container>
        <Title>Informant Interview</Title>
        <Subtitle>Instructions</Subtitle>
        <InstructionsList>
        <InstructionItem>
            Lorem ipsum praesent ac massa at ligula reet est iaculis. Vidffffffff vamus est mist
            aliquet elit ac nisl. hjvwdy dgwh hb were hwbdgdwhd wh. djwdwd uhwuhs dwu. is a do. uhuw.
            wudhwudh hdwhd hbdwhdbbhb uu. ertiga honda wdui hiijknknnn hhh
        </InstructionItem>
        <InstructionItem>
            djwbdhwg wjdjhw qs hq weyw jnsj wd nbfeyfg hfb hb 37 d 3ueh3u r. 2. e2. 2. jhsuhc. e
            fguef bfhewfjskbcihewjd
        </InstructionItem>
        <InstructionItem>
            Instructions : Lorem ipsum praesent ac massa at ligula reet est iaculis. Vidffffffff vamus
            est mist aliquet elit ac nisl. hjvwdy dgwh hb were hwbdgdwhd wh. djwdwd uhwuhs dwu. is a
            do. uhuw. wudhwudh hdwhd hbdwhdbbhb uu. ertiga honda wdui hiijknknnn hhh
        </InstructionItem>
        <InstructionItem>
            djwbdhwg wjdjhw qs hq weyw jnsj wd nbfeyfg hfb hb 37 d 3ueh3u r. 2. e2. 2. jhsuhc. e
            fguef bfhewfjskbcihewjd
        </InstructionItem>
        <InstructionItem>
            Lorem ipsum praesent ac massa at ligula reet est iaculis. Vidffffffff vamus est mist
            aliquet elit ac nisl. hjvwdy dgwh hb were hwbdgdwhd wh. djwdwd uhwuhs dwu. is a do. uhuw.
            wudhwudh hdwhd hbdwhdbbhb uu. ertiga honda wdui hiijknknnn hhh
        </InstructionItem>
        </InstructionsList>

        <CheckboxWrapper>
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> I agree to
            the terms and conditions
        </label>
        </CheckboxWrapper>

        <Button disabled={!isChecked} onClick={handleProceedClick}>
        Proceed
        <ArrowIcon src={arrow} alt="arrow icon" disabled={!isChecked} />
        </Button>
    </Container>
    <Footer/>
    </>
    
  )
}

export default FirstPersonInstructions