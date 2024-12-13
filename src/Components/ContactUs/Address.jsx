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
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.037035598239!2d76.328026173541!3d10.013799572800199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d020d2668eb%3A0x29642fde66bb184c!2sEasedementia%20technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730799427552!5m2!1sen!2sin" width="580" height="330" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3157921333623!2d76.3214349735403!3d9.960030473724242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08730324828063%3A0x971f0e7aa7e7dc55!2sThykoodam%20Metro%20Station!5e1!3m2!1sen!2sin!4v1734065028065!5m2!1sen!2sin" width="580" height="330" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </MapContainer>
    </AddressContainer>
  )
}

export default Address