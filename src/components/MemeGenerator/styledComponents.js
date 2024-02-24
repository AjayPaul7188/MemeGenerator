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
export const LabelElement = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 12px;
  font-weight: normal;
`

export const InputElement = styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  width: 80%;
  padding: 10px;
  color: #5a7184;
  font-family: 'Open Sans';
  font-size: 12px;
`

export const FontSizeDrop = styled(InputElement)

export const OptionElement = styled.option`
  color: #1e293b;
  font-family: 'Open Sans';
  font-size: 12px;
`

export const GenerateBtn = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 10px 15px;
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
