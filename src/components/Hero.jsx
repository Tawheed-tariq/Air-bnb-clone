import photoGrid from "/assets/Photo-grid.png"
export default function Hero(){
    return(
        <section className="hero">
        <img className="photo-grid" src={photoGrid} alt="" />
        <h1 className="hero-header">Online Experience</h1>
        <p className="hero-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
        </section>
    )
}