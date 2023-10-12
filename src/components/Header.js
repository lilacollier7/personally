// Import Assets
import profile from '../assets/profile.webp';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Grant Cardone" />

            <div className='header__content'>
                <h1>Welcome to CA Rachana Ranade</h1>
                <p>Gold | News | Stocks</p>
                <br></br>
                <a href="https://wa.me/18088305161" target="_blank" className="button">Whatsapp Now</a>
            </div>
        </section>
    );
}

export default Header;