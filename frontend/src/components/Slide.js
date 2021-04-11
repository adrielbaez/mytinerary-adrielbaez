

const Slide = (props) => {

    return ( 
        <>
            {props.item.map(slide => {
                return (
                    <div key={slide.id} className="contenedor-imagen">
                        <div className="imagen" style={{backgroundImage: `url('./assets/${slide.src}')`}}>
                            <div>
                            <h3 className="cities-title">{slide.header}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
export default Slide;