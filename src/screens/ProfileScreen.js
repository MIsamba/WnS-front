import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card , Form} from 'react-bootstrap'
import profiles from '../profiles'
import { listProfileDetails } from '../actions/profileActions'


function ProfileScreen( {match,history }) {
    
    const dispatch = useDispatch()
    const profileDetails = useSelector(state => state.profileDetails)
    const { loading, error, profile  } = profileDetails

    useEffect(() => {

        dispatch(listProfileDetails(match.params.id))
        }, [dispatch,match])

        

    
    const addRequestHandler = () => {
       history.push(`/cart/${match.params.id}`)
    }
    return (
        <div>
          <Link to ='/' className = 'btn btn-light my-3'> Go Back</Link> 
<Row>
    <Col md={6}>
        <Image src = {profile.image} alt={profile.name} fluid />
    </Col>

    <Col md={3}>
        <ListGroup variant="flush">
            <ListGroup.Item>
                <h3>{profile.names}</h3>
            </ListGroup.Item>

            
            <ListGroup.Item>
                Mkoa: {profile.city}
            </ListGroup.Item>
            
            <ListGroup.Item>
                Age: {profile.age}
            </ListGroup.Item>


            <ListGroup.Item>
                Education: {profile.know}
            </ListGroup.Item>

            <ListGroup.Item>
                Description: {profile.work_type}
            </ListGroup.Item>
        
            <ListGroup.Item>
            Transport Charge: {profile.price}
            </ListGroup.Item>
        
           

        </ListGroup>
    </Col>
    <Col md={3}>

    <Card>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>Book:</Col>
                    <Col>
                        <strong>{profile.city}</strong>
                    </Col>
                    
                </Row>
            </ListGroup.Item>

            <ListGroup.Item>
                <Row>        <Col>Status:</Col>
                    <Col>
                       {profile.status} 
                    </Col>
                    </Row>
            </ListGroup.Item>
            <ListGroup.Item>
            <Button
                onClick={addRequestHandler}
                className='btn-block'
                type='button'>
                Request
            </Button>

                
               </ListGroup.Item>

        </ListGroup>
    </Card>
    </Col>
         </Row>

        </div>
    )
}

export default ProfileScreen
