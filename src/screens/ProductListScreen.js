import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
//import Paginate from '../components/Paginate'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/profileConstants'

function ProductListScreen({ history, match }) {

    const dispatch = useDispatch()

    const profileList = useSelector(state => state.profileList)
    const { loading, error, profiles, pages, page } = profileList

    const profileDelete = useSelector(state => state.profileDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = profileDelete

    const profileCreate = useSelector(state => state.profileCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = history.location.search
    useEffect(() => {
        dispatch({ type: PROFILE_CREATE_RESET })

        if (!userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/proFILE/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts(keyword))
        }

    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, keyword])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProfile(id))
        }
    }

    const createProfileHandler = () => {
        dispatch(createProfile())
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Profiles</h1>
                </Col>

                <Col className='text-right'>
                    <Button className='my-3' onClick={createProfileHandler}>
                        <i className='fas fa-plus'></i> Create Profile
                    </Button>
                </Col>
            </Row>

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}


            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>CATEGORY</th>
                                        <th>BRAND</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {profiles.map(profile => (
                                        <tr key={profile._id}>
                                            <td>{profile._id}</td>
                                            <td>{profile.name}</td>
                                            <td>${profile.price}</td>
                                            <td>{profile.category}</td>
                                            <td>{profile.brand}</td>

                                            <td>
                                                <LinkContainer to={`/admin/product/${profile._id}/edit`}>
                                                    <Button variant='light' className='btn-sm'>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </LinkContainer>

                                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                                              </div>
                    )}
        </div>
    )
}

export default ProductListScreen