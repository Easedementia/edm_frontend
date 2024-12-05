

const CallButton = () => {
    const phoneNumber = "918156900195"
  return (
    <a
      href={`tel:${phoneNumber}`}
      style={{
        position: 'fixed',
        bottom: '20px', // Adjust position relative to other floating buttons
        right: '90px',
        backgroundColor: '#007BFF',
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
      }}
    >
      <i className="fa fa-phone"></i>
    </a>
  )
}

export default CallButton