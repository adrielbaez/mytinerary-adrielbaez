import { useState } from "react";

const CardItinerary = () => {
    const [botonToggle, setBotonToggle] = useState({ textBoton: 'View More', hidden: true })

    const toggle = () => {
        if (botonToggle.hidden) {
            setBotonToggle({ textBoton: 'View More', hidden: false })
            return;
        }
        setBotonToggle({ textBoton: 'View Less', hidden: true })
    }
    return (
        <>
            <div className="container-itinerary">
                <h2>Tittle Itinerary</h2>
                <div className="img-itinerary" style={{ backgroundImage: `url('https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528')` }}></div>
                <h3>Name author</h3>
                <div className="itinerary-details">
                    <p>price</p>
                    <p>duracion</p>
                    <p>like</p>
                </div>
                <div className="hashtags">
                    <p>hashtags</p>
                    <p>hashtags</p>
                    <p>hashtags</p>
                </div>
                <div className={!botonToggle.hidden ? 'd-none' : 'container-itinerary-small'}>
                   
                        <h2>Activities</h2>
                        <div className="container-img-activity">
                            <div className="img-activity" style={{ backgroundImage: `url('https://mymodernmet.com/wp/wp-content/uploads/2020/12/nature-photographer-of-the-year-Contest-2020-thumbnail.jpg')` }}><h3>actividad de la ciudad</h3></div>
                            <div className="img-activity" style={{ backgroundImage: `url('https://mymodernmet.com/wp/wp-content/uploads/2020/12/nature-photographer-of-the-year-Contest-2020-thumbnail.jpg')` }}></div>
                            <div className="img-activity" style={{ backgroundImage: `url('https://mymodernmet.com/wp/wp-content/uploads/2020/12/nature-photographer-of-the-year-Contest-2020-thumbnail.jpg')` }}></div>
                        </div>
                        <h3>Name author</h3>
                        <div className="itinerary-details">
                            <p>price</p>
                            <p>duracion</p>
                            <p>like</p>
                        </div>
                        <div className="hashtags">
                            <p>hashtags</p>
                            <p>hashtags</p>
                            <p>hashtags</p>
                        </div>
                    </div>
            <button onClick={toggle}>{botonToggle.textBoton}</button>
            </div>
        </>
    )
}
export default CardItinerary