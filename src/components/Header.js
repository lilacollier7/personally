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
                <a href="mailto:silverseeker.online@gmail.com" target="_blank" className="button">Email Now</a>
            </div>
        </section>
    );
}

export default Header;