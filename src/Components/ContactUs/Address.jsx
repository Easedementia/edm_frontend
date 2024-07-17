import GoogleMapsLocation from "./GoogleMapsLocation";
import { AddressContainer, ContactInfo, MapContainer, Heading, Paragraph } from '../../Styles/ContactUsStyle/AddressStyle'


const Address = () => {
  return (
    <AddressContainer>
        <ContactInfo>
            <Heading>Address</Heading>
            <Paragraph>Ease Dementia Technologies pvt. ltd</Paragraph>
            <Paragraph>DS7, Heavenly Plaza</Paragraph>
            <Paragraph>Civil Line Road, Chembumukku, Vazhakkala, Kakkanad, Kochi, Kerala 682021</Paragraph>

            <Heading>Email Address</Heading>
            <Paragraph>support@easedementia.com</Paragraph>

            <Heading>Phone Number</Heading>
            <Paragraph>+91 79077 40698</Paragraph>
            <Paragraph>+91 90616 60079</Paragraph>
        </ContactInfo>

        <MapContainer>
            <GoogleMapsLocation/>
        </MapContainer>
    </AddressContainer>
  )
}

export default Address