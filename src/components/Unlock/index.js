import {useState} from 'react'

import {
  MainContainer,
  ImageCard,
  TextContainer,
  ButtonText,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onButtonChange = () => {
    setLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      <ImageCard
        alt={isLocked ? 'lock' : 'unlock'}
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png' 
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png' 
        }
      />

      <TextContainer>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </TextContainer>

      <ButtonText onClick={onButtonChange}>
        {isLocked ? 'Unlock' : 'Lock'}
      </ButtonText>
    </MainContainer>
  )
}

export default Unlock
