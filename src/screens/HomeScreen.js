/*import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from '../components/Profile'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProfiles } from '../actions/profileActions'

function HomeScreen() {
    const dispatch = useDispatch()
    const profileList = useSelector(state => state. profileList)
    const { error, loading, profiles} =  profileList
    
    
    useEffect(() => {
        dispatch(listProfiles())
        
    }, [dispatch])

    return (
        <div>
            <h1>Profile</h1>
              { loading ? <Loader /> 
                       : error ? <Message variant='danger'>{error}</Message>
                       :
                    
                        <Row>
                            {profiles.map(profile => (
                                <Col key={profile._id} sm={12} md={6} lg={4} xl={3}>
                                    <Profile profile={profile} />
                                </Col>
                                ))}
                            </Row>
                    
              }     
                    </div>  
            
    )
}
export default HomeScreen
*/

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Profile from '../components/Profile'
import Loader from '../components/Loader'
import Message from '../components/Message'
//import Paginate from '../components/Paginate'
//import ProfileCarousel from '../components/ProductCarousel'
import { listProfiles } from '../actions/profileActions'


function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const profileList = useSelector(state => state.profileList)
    const { error, loading, profiles } = profileList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProfiles(keyword))

    }, [dispatch])

    return (
        <div>
         
            <h1>Latest Profiles</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {profiles.map(profile => (
                                <Col key={profile._id} sm={12} md={6} lg={4} xl={3}>
                                    <Profile profile={profile} />
                                </Col>
                            ))}
                        </Row>
                        </div>
            }
        </div>
    )
}
export default HomeScreen
