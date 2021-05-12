import React from 'react'
import FeatureNames from '../FeatureNames.json'
import {
    Link,
} from "react-router-dom";


function Features({features, id}) {
    return (
        <div className="offer-features">
            <div className="features">
                {features.length > 0 && 
                    <p>{FeatureNames[features[0]]}</p>
                }
            </div>
            {features.length > 1 && (
                <div className="other-features">
                    <Link to={`/AllOffers/${id}`}>
                        +{features.length - 1}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Features