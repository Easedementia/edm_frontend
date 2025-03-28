

const CallButton = () => {
    const phoneNumber = "+917907740698"
  return (
    <a
      href={`tel:${phoneNumber}`}
      style={{
        position: 'fixed',
        bottom: '20px',
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
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
    >
      <i className="fa fa-phone"></i>
    </a>
  )
}

export default CallButton