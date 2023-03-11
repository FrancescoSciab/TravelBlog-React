

export default function CitySection(props) {
        return (
        <div>

            <section>
                <img src = {props.item.img} alt = {props.item.alt}></img>
                <div>

                    <div className = "country--name">
                        <h6>{props.item.countryname}</h6>
                        <a href = {props.item.href}>View on Google Maps</a>
                    </div>
                    
                    <h2>{props.item.monument}</h2>
                    <h5>{props.item.time}</h5>
                    <p>{props.item.text}</p>
                </div>
            </section>

        </div>
    )
}