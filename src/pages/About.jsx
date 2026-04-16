const About = () => {
  return (
    <div className="container about-container">
      <h2 className="title">Acerca de TechStore</h2>
      <div className="about-content">
        <p className="about-text">
          TechStore es tu tienda en linea de confianza para encontrar los
          mejores productos tecnologicos del mercado. Nos dedicamos a ofrecer
          una experiencia de compra facil, segura y rapida.
        </p>
        <div className="about-features">
          <div className="about-feature">
            <span className="feature-icon">&#128640;</span>
            <h3>Envio Rapido</h3>
            <p>Recibe tus productos en tiempo record.</p>
          </div>
          <div className="about-feature">
            <span className="feature-icon">&#128274;</span>
            <h3>Compra Segura</h3>
            <p>Tus datos y pagos siempre protegidos.</p>
          </div>
          <div className="about-feature">
            <span className="feature-icon">&#128172;</span>
            <h3>Soporte 24/7</h3>
            <p>Estamos aqui para ayudarte siempre.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
