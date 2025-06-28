const Herodev = ({ judulherodev, desjudulherodev, mainPhoto }) => {
    const heroStyle = {
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${mainPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div style={heroStyle}>
            <div className="header-container">
                <h1 className="header-title">{judulherodev}</h1>
                <h3 className="header-subtitle">{desjudulherodev}</h3>
            </div>
        </div>
    );
};

export default Herodev;
