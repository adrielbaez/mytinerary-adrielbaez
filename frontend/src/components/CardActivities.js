import { useEffect } from "react";

const CardActivities = ({activity}) => {

    return (
        <>
            <div className="activities-container">
                <h2>Activities</h2>
                <div className="activities-content">
                    {activity.map((activity, index) => {
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