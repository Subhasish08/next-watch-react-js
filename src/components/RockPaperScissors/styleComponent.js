import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  margin-top: 30px;
`

export const Option = styled.h1`
  font-size: 15px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #ffffff;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #223a5f;
  background-color: #ffffff;
  width: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const GameViewContainer = styled.div`
  height: 60vh;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 480px;
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Robobto';
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.div`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const PopUpImage = styled.img`
  align-items: center;
  width: 90%;
`
export const PopUpBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`

export const GameUsersOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const GameParticipantText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`

export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #223a5f;
`

export const ScoreNumber = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #223a5f;
`

export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: space-between;
`
