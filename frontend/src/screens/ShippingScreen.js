import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom' 
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [country, setCountry] = useState(shippingAddress.country)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)

  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, country, postalCode }))
    navigate('/payment')
  }

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control required type='text' placeholder='Enter address' value={address ? address : ''} onChange={(e) => setAddress(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <br/>

            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control required type='text' placeholder='Enter city' value={city ? city : ''} onChange={(e) => setCity(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <br/>

            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control required type='text' placeholder='Enter country' value={country ? country : ''} onChange={(e) => setCountry(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <br/>

            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control required type='text' placeholder='Enter postal code' value={postalCode ? postalCode : ''} onChange={(e) => setPostalCode(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <br/>

            <Button type='submit' variant='primary'>
                Continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen