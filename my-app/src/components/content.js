import MountFuji from "../img/japan-mountfuji.jpeg"

export default function CitySection() {
    const alt = "picture of Mount Fuji"
    const href = "https://goo.gl/maps/iDjGdJetaBUkswJEA"
    return (
        <div>

            <section>
                <img src = {MountFuji}></img>
                <div>

                    <div class = "country--name">
                        <h6>JAPAN</h6>
                        <a href = {href} alt={alt}>View on Google Maps</a>
                    </div>
                    
                    <h2>Mount Fuji</h2>
                    <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </section>
        </div>
    )
}