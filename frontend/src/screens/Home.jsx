import { Container, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'

const Home = () => {

  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-colum align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>Welcome to MERN Authhentication Home Page. If you're here, it means you have been authenticated and your profile is now on our database. How do you wish to proceed?</p>
          <div className="d-flex">
            <Button onClick={logoutHandler} variant='primary' className='me-3'>Logout</Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Home