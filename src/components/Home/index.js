import {Link} from 'react-router-dom'
import RegisterContext from '../../cortex/RegisterContext'
import Header from '../Header'
import {
  HomeContainer,
  HomeContainerHeading,
  HomeContainerPara,
  HomeContainerImage,
  RegisterBtn,
} from './styledcomponents'

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegister, name, topic} = value
      const onclickRegisterBtn = () => {
        const {history} = props
        history.replace('/register')
      }

      return (
        <div>
          <Header />
          {isRegister === true ? (
            <HomeContainer>
              <HomeContainerHeading isRegister={isRegister}>
                Hello {name}
              </HomeContainerHeading>
              <HomeContainerPara isRegister={isRegister}>
                Welcome to {topic}
              </HomeContainerPara>
              <HomeContainerImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          ) : (
            <HomeContainer>
              <HomeContainerHeading>Welcome to Meetup</HomeContainerHeading>
              <HomeContainerPara>
                Please register for the topic
              </HomeContainerPara>
              <Link to="/register">
                <RegisterBtn type="button" onClick={onclickRegisterBtn}>
                  Register
                </RegisterBtn>
              </Link>
              <HomeContainerImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )}
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Home
