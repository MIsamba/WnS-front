/* import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addRequest, removeFromRequest } from '../actions/requestActions'

function RequestScreen({match, location, history}) {
    const requestId = match.params.id
    const urgency = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const request = useSelector(state => state.request)
    const { requestItems} = request
   
    useEffect(() => {
        if(requestId){
            dispatch(addRequest(requestId, urgency))

        }
    }, [dispatch,requestId, urgency])
    const removeFromRequestHandler = (id) => {
            dispatch(removeFromRequest(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

   
    return (
        <Row>
        <Col md={8}>
            <h1>Requested Profiles</h1>
            {requestItems.length === 0 ? (
                <Message variant='info'>
                    Your cart is empty <Link to='/'>Go Back</Link>
                </Message>
            )             : (
                    <ListGroup variant='flush'>
                        {requestItems.map(item => (
                            <ListGroup.Item key={item.profile}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/profile/${item.profile}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={2}>
                                        {item.urgency}
                                    </Col>

                                    <Col md={3}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addRequest(item.profile, Number(e.target.value)))}
                                        >
                                            {
                                                
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }

                                        </Form.Control>
                                    </Col>

                                    <Col md={1}>
                                        <Button
                                            type='button'
                                            variant='dark'
                                            onClick={() => removeFromRequestHandler(item.profile)}
                                        >
                                          <i className='fas fa-trash'></i>
                                          </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
        </Col>

        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({requestItems.reduce((acc, item) => acc + item.urgency, 0)}) items</h2>
                        ={requestItems.reduce((acc, item) => acc + item.urgency * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup.Item>
                    <Button
                        type='button'
                        className='btn-block'
                        disabled={requestItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Proceed To Checkout
                    </Button>
                </ListGroup.Item>


            </Card>
        </Col>
    </Row>
    )
}

export default RequestScreen

*/