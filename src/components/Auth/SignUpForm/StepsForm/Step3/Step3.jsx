import { InputStyle } from '../../../AuthStyled/InputStyle/InputStyle.styled';
import {
  Button,
  Title,
  Text,
} from '../../../AuthStyled/GeneralStyles/GeneralStyles';
import {
  RadioButton,
  RadioCircle,
  RadioLabel,
} from '../../../AuthStyled/RadioButtonStyle/RadioButton.styled';
import {
    AgeGender,
  RadioList,
  GenderSpan,
  FormBlock,
  ButtonList,
  AgeLabel,
} from './Step3.styled';

const Step3 = ({ formik }) => {
  return (
    <AgeGender>
      <Title>Select gender, Age</Title>
      <Text>Choose a goal so that we can <br/>help you effectively</Text>
      <FormBlock>
        <GenderSpan>Gender</GenderSpan>
        <RadioList>
          <li>
            <RadioButton>
              <input
                onChange={formik.handleChange}
                type="radio"
                name="gender"
                defaultChecked
                value="Male"
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>Male</RadioLabel>
            </RadioButton>
          </li>
          <li>
            <RadioButton>
              <input
                onChange={formik.handleChange}
                type="radio"
                name="gender"
                value="Female"
              />
              <RadioCircle></RadioCircle>
              <RadioLabel>Female</RadioLabel>
            </RadioButton>
          </li>
        </RadioList>

        <AgeLabel htmlFor="age">Your age</AgeLabel>
        <InputStyle
          id="age"
          name="age"
          type="age"
          placeholder="Enter your age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
      </FormBlock>
      <ButtonList>
        <li>
          <Button type="button">Next</Button>
        </li>
        <li>
          <Button type="button">Back</Button>
        </li>
      </ButtonList>
    </AgeGender>
  );
};

export default Step3;
