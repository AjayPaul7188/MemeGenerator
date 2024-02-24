import {Component} from 'react'

import {
  MainContainer,
  TopText,
  BottomText,
  Heading,
  SpecsContainer,
  OutputContainer,
  OutputContainerSm,
  FormContainer,
  InputContainer,
  LabelElement,
  InputElement,
  FontSizeDrop,
  OptionElement,
  GenerateBtn,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    btnClicked: false,
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, btnClicked} = this.state

    return (
      <MainContainer>
        <SpecsContainer>
          <Heading>Meme Generator</Heading>

          {btnClicked === true ? (
            <OutputContainerSm imageUrl={imageUrl}>
              <TopText fontSize={fontSize}>{topText}</TopText>
              <BottomText fontSize={fontSize}>{bottomText}</BottomText>
            </OutputContainerSm>
          ) : null}

          <FormContainer onSubmit={this.submitForm}>
            <InputContainer>
              <LabelElement htmlFor="imageUrl">Image URl</LabelElement>
              <InputElement
                id="imageUrl"
                type="text"
                value={imageUrl}
                onChange={this.onChangeImageUrl}
                place="Enter the Image URL"
              />
            </InputContainer>

            <InputContainer>
              <LabelElement htmlFor="topText">Top Text</LabelElement>
              <InputElement
                id="topText"
                type="text"
                value={topText}
                onChange={this.onChangeTopText}
                place="Enter the Top Text"
              />
            </InputContainer>

            <InputContainer>
              <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
              <InputElement
                id="bottomText"
                type="text"
                value={bottomText}
                onChange={this.onChangeBottomText}
                place="Enter the Bottom Text"
              />
            </InputContainer>

            <InputContainer>
              <LabelElement htmlFor="fontSize">Font Size</LabelElement>
              <FontSizeDrop
                as="select"
                name="fontSizes"
                id="fontSize"
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(eachItem => (
                  <OptionElement
                    value={eachItem.displayText}
                    id={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </OptionElement>
                ))}
              </FontSizeDrop>
            </InputContainer>

            <GenerateBtn type="submit">Generate</GenerateBtn>
          </FormContainer>
        </SpecsContainer>
        {btnClicked === true ? (
          <OutputContainer imageUrl={imageUrl}>
            <TopText fontSize={fontSize}>{topText}</TopText>
            <BottomText fontSize={fontSize}>{bottomText}</BottomText>
          </OutputContainer>
        ) : null}
      </MainContainer>
    )
  }
}

export default MemeGenerator
