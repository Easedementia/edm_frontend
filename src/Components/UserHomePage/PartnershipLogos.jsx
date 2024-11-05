import {PartnershipLogosWrapper, LogosContainer, LogoImage  } from '../../Styles/UserHomeStyle/PartnershipLogoStyle'
// import iimcalicutlogo from '../../assets/images/iimcalicutlogo.png'
// import inestlogo from '../../assets/images/inestlogo.png'
// import marsleevalogo from '../../assets/images/marsleevalogo.png'
// import mthlogo from '../../assets/images/mthlogo.png'
// import sunriselogo from '../../assets/images/sunriselogo.png'
// import tatalogo from '../../assets/images/tatalogo.png'

import iimcalicutnew from '../../assets/images/iimcalicutnew.svg'
import inestnew from '../../assets/images/inestnew.svg'
import marsleevanew from '../../assets/images/marsleevanew.svg'
import mthnew from '../../assets/images/mthnew.svg'
import sunrisenew from '../../assets/images/sunrisenew.svg'
import tatanew from '../../assets/images/tatanew.svg'




const PartnershipLogos = () => {
  return (
    <PartnershipLogosWrapper>
        <LogosContainer>
            <LogoImage src={mthnew} alt='Medical Trust Hospital' />
            <LogoImage src={iimcalicutnew} alt='IIM Kozhikode' />
            <LogoImage src={marsleevanew} alt='Mar Sleeva' />
            <LogoImage src={inestnew} alt='Dr Moopens INEST' />
            <LogoImage src={sunrisenew} alt='Sunrise Hospital' />
            <LogoImage src={tatanew} alt='TATA 1mg' />
        </LogosContainer>
    </PartnershipLogosWrapper>
  )
}

export default PartnershipLogos