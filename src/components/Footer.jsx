function Footer() {
    return (
        <footer className="footer">
            <div className="footer__sn">
                <h3 className="footer__heading-3 text-size-h5 mb-3">
                    QuickSlice
                </h3>
                <div>
                    <i className="ri-instagram-fill"></i>
                    <i className="ri-facebook-fill"></i>
                    <i className="ri-whatsapp-fill"></i>
                    <i className="ri-twitter-fill"></i>
                </div>
            </div>
            <div className="footer__contact-info">
                <h3 className="footer__heading-3 text-size-h5 mb-3">
                    Contact info
                </h3>
                <p className="footer__phone mb-1">Phone: _(123) 456-7890</p>
                <p className="footer__email mb-1">
                    Email: support@pizzaquick.com
                </p>
                <p className="footer__addresse">
                    Adresse: 123 Pizza Street, Flavor Town, USA
                </p>
            </div>
            <div className="footer__img-box">
                <div className="footer__overlay" />
                <img
                    src="src/assets/footer-img.png"
                    alt="Chef"
                    className="footer__img"
                />
            </div>
        </footer>
    );
}

export default Footer;
