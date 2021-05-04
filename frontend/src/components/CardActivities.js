const CardActivities = (props) => {
    let activities = [
        { title: 'coliseo', image: 'piazzaNavona.jpg' },
        { title: 'coliseo', image: 'piazzaNavona.jpg' },
        { title: 'coliseo', image: 'piazzaNavona.jpg' }
    ]
    return (
        <>
            <div className="activities-container">
                <h2>Activities</h2>
                <div className="activities-content">
                    {activities.map((activity, index) => {
                        return (
                            <div key={index} className="activity-bgImage" style={{ backgroundImage: `url('/assets/${activity.image}')` }}>
                                <h3>{activity.title}</h3>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default CardActivities;