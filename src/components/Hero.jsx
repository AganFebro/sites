import logo from '../assets/logo_colored.png';

const Hero = () => {
    return (
        <div className="hero-section text-center">
            <div className="avatar-container mb-8">
                <div className="glitch border-4 border-[var(--term-green)] p-2" data-text="PLAYER_1" style={{ width: 'fit-content', margin: '0 auto' }}>
                    <img src={logo} alt="Febrian Avien Wibowo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} className="block mx-auto" />
                </div>
            </div>

            <h1 className="text-2xl md:text-4xl mb-4 max-w-full break-words">FEBRIAN AVIEN WIBOWO</h1>
            <h2 className="mb-8 text-[var(--term-dim)] whitespace-nowrap" style={{ fontSize: 'clamp(10px, 2vw, 14px)' }}>&lt; Web3 Community Moderator /&gt;</h2>

            <div className="panel text-left max-w-2xl mx-auto">
                <p className="mb-4">
                    Community moderator with 2+ years experience managing large-scale Web3 communities.
                    Led regional engagement initiatives within a 230k Discord member, maintaining strong daily active users globally.
                </p>
            </div>


        </div>
    );
};

export default Hero;
