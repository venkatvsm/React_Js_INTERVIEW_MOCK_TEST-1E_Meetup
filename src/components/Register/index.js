import Header from '../Header'
import RegisterContext from '../../cortex/RegisterContext'
import {
  RegisterContainer,
  RegisterCardContainer,
  RegisterImageContainer,
  RegisterImage,
  RegisterFormContainer,
  RegisterFormHeading,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormSelectContainer,
  RegisterFormSelectoption,
  RegisterFormBtn,
  ErrorMsg,
} from './styledcomponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        isRegister,
        name,
        topic,
        showError,
        changeTopic,
        changeName,
        updateError,
        registerName,
        currentTopicId,
      } = value
      const nameChangeTrigger = event => {
        changeName(event.target.value)
      }
      const topicChangeTrigger = event => {
        const topicsListEl = topicsList.filter(
          eachItem => eachItem.id === event.target.value,
        )
        changeTopic(topicsListEl[0])
      }
      const rendersubmitForm = event => {
        event.preventDefault()
        if (name === '') {
          updateError(true)
        } else {
          registerName(false)
          updateError(true)
          const {history} = props
          history.replace('/')
        }
      }

      return (
        <RegisterContainer>
          <Header />
          <RegisterCardContainer>
            <RegisterImageContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </RegisterImageContainer>
            <RegisterFormContainer onSubmit={rendersubmitForm}>
              <RegisterFormHeading>Let us join</RegisterFormHeading>
              <RegisterFormLabel htmlFor="name">NAME</RegisterFormLabel>
              <RegisterFormInput
                id="name"
                type="text"
                placeholder="Your name"
                onChange={nameChangeTrigger}
                value={name}
              />
              <RegisterFormLabel htmlFor="topics">TOPICS</RegisterFormLabel>
              <RegisterFormSelectContainer
                id="topics"
                onChange={topicChangeTrigger}
                value={currentTopicId}
              >
                {topicsList.map(eachItem => (
                  <RegisterFormSelectoption
                    value={eachItem.id}
                    key={eachItem.id}
                  >
                    {eachItem.displayText}
                  </RegisterFormSelectoption>
                ))}
              </RegisterFormSelectContainer>
              <RegisterFormBtn type="submit">Register Now</RegisterFormBtn>
              {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
            </RegisterFormContainer>
          </RegisterCardContainer>
        </RegisterContainer>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
