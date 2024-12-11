

const WhatsappButton = () => {
    const phoneNumber = "917907740698";
    const message = "Hello! I would like to know more about your services.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        textDecoration: 'none',
        fontSize: '32px',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1DA851')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default WhatsappButton