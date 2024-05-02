import React from 'react'

const RegisterContext = React.createContext({
  isRegister: true,
  name: '',
  currentTopicId: 'ARTS_AND_CULTURE',
  topic: 'Arts and Culture',
  showError: false,
  updateError: () => {},
  changeName: () => {},
  changeTopic: () => {},
  isregister: () => {},
})
export default RegisterContext
