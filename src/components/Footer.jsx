import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">TechStore</h3>
          <p className="footer-description">
            Tu tienda de tecnologia de confianza. Los mejores productos al mejor
            precio.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Navegacion</h4>
          <Link to="/" className="footer-link">
            Catalogo
          </Link>
          <Link to="/cart" className="footer-link">
            Mi Carrito
          </Link>
          <Link to="/about" className="footer-link">
            Acerca de
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contacto</h4>
          <p className="footer-text">soporte@techstore.com</p>
          <p className="footer-text">+52 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} TechStore. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
