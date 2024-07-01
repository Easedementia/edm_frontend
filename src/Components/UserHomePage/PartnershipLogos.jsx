import {PartnershipLogosWrapper, LogosContainer, LogoImage  } from '../../Styles/UserHomeStyle/PartnershipLogoStyle'
import iim_calicut from '../../assets/images/iim_calicut.png'
import mar_sleeva from '../../assets/images/mar_sleeva.svg'
import sunrise_logo from '../../assets/images/sunrise_logo.png'

import mth from '../../assets/images/mth.png'



const PartnershipLogos = () => {
  return (
    <PartnershipLogosWrapper>
        <LogosContainer>
            <LogoImage src={mth} alt='Medical Trust Hospital' />
            <LogoImage src={iim_calicut} alt='IIM Kozhikode' />
            <LogoImage src={mar_sleeva} alt='Mar Sleeva' />
            <LogoImage src={sunrise_logo} alt='Sunrise Hospital' />
            
        </LogosContainer>
    </PartnershipLogosWrapper>
  )
}

export default PartnershipLogos