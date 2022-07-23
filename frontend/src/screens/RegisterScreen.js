import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { useNavigate } from 'react-router-dom' 

function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
        navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password != confirmPassword) {
        setMessage('Password does not match')
    }
    else{
        dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
        <h1>Register</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control required type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <br/>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control required type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <br/>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control required type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <br/>

            <Form.Group controlId='passwordConfirm'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <br/>
            
            <Button type='submit' variant='primary'>Register</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Have An Account ? <Link to = {'/login'}>Log In</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default RegisterScreen