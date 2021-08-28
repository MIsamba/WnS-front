import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Profile({profile}) {
    return (

        <Card className="my-3 p-3 rounded">
            <Link to={`/profile/${profile._id}`}>
                < Card.Img src={profile.image} />
            </Link>

            <Card.Body>
            <Link to = {`/profile/${profile._id}`}>
                < Card.Title as = "div">
                <strong>{profile.name} </strong>
                </Card.Title> 
            </Link>

            <Card.Text as = "div">
                <div className ="my-3">
                    Job: {profile.work_type} Education: {profile.know} 
                    
                </div>
                </Card.Text>

                <Card.Text as ="h4">
                   City: {profile.city}
                </Card.Text>

                <Card.Text as ="h3">
                   Age: {profile.age}
                </Card.Text>
           
           
            </Card.Body>

        </Card>
    )
}

export default Profile
