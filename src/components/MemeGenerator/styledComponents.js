import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const SpecsContainer = styled.div`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 35px;
  font-weight: bold;
  color: #35469c;
`
export const OutputContainerSm = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 30vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TopText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: ${props => props.fontSize};
  text-align: center;
`
export const BottomText = styled(TopText)

export const FormContainer = styled.form`
  width: 100%;
  padding: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
