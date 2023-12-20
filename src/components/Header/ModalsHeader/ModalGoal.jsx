import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonCloseModalGoal,
  ConfirmModalGoal,
  DivButtonCancellGoal,
  DivChooseModalGoal,
  DivModalGoal,
  DivModalGoalTextPart,
  DivModalGoalTextPart1,
  DivModalGoalTextPartP1,
  DivModalGoalTextPartP2,
  SvgCloseModalGoal,
  UlButtonModalGoal,
  UlImgButtonModalGoal,
  UlModalGoal,
  UlPButtonModalGoal,
} from './Modals-styles/ModalGoal.styles';
import GainMuscle from '/src/assets/header/Gain-muscle.png';
import LoseFatGirl from '/src/assets/header/Lose-fat-girl.png';
import LoseFatMan from '/src/assets/header/Lose-fat-man.png';
import MaintainGirl from '/src/assets/header/Maintain-girl.png';
import MaintainMan from '/src/assets/header/Maintain-man.png';
import HeaderSvg from '/src/assets/header/headerSvg.svg';
import axios from 'axios';

const updateGoalAsync = (newGoal, persistedToken) => async (dispatch) => {
  try {
    if (!persistedToken) {
      throw new Error('Token not found');
    }

    const axiosInstance = axios.create({
      baseURL: 'https://food-diary-backend-kr1b.onrender.com/api',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${persistedToken}`,
      },
    });

    const response = await axiosInstance.put('/user/goal', { goal: newGoal });

    dispatch({ type: 'GOAL_UPDATED', payload: response.data.goal });
  } catch (error) {
    console.error('Error updating goal:', error);
  }
};

function ModalGoal({
  setIsGoalModalOpen,
  gender,
  currentGoal,
  newGoal,
  setNewGoal,
  setCurrentGoal,
}) {
  const dispatch = useDispatch();
  const persistedToken = useSelector((state) => state.auth.token);

  const setGoalLosefat = () => setNewGoal('Lose Fat');
  const setGoalMaintain = () => setNewGoal('Maintain');
  const setGoalGailMuscle = () => setNewGoal('Gain Muscle');

  const handleSubmit = () => {
    if (newGoal === currentGoal) return setIsGoalModalOpen(false);
    dispatch(updateGoalAsync(newGoal, persistedToken));
    setCurrentGoal(newGoal);
    setIsGoalModalOpen(false);
    
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setIsGoalModalOpen(false);
    }
  };
  
  const imagesPath = {
    'Lose Fat female': LoseFatGirl,
    'Lose Fat male': LoseFatMan,
    'Maintain female': MaintainGirl,
    'Maintain male': MaintainMan,
  };

  const selectedImageLoseFat =
    gender === 'female'
      ? imagesPath['Lose Fat female']
      : imagesPath['Lose Fat male'];

  const selectedImageMaintain =
    gender === 'female'
      ? imagesPath['Maintain female']
      : imagesPath['Maintain male'];

  return (
    <DivModalGoal>
      <ButtonCloseModalGoal onClick={(event) => { setIsGoalModalOpen(false); handleKeyDown(event); }}>
        <SvgCloseModalGoal>
          <use href={`${HeaderSvg}#close-modal`} />
        </SvgCloseModalGoal>
      </ButtonCloseModalGoal>
      <DivModalGoalTextPart>
        <DivModalGoalTextPart1>
          <DivModalGoalTextPartP1>Target sections</DivModalGoalTextPartP1>
          <DivModalGoalTextPartP2>
            The service will adjust your calorie intake to your goal
          </DivModalGoalTextPartP2>
        </DivModalGoalTextPart1>
        <DivChooseModalGoal>
          <UlModalGoal>
            <li>
              <UlButtonModalGoal onClick={setGoalLosefat}>
                <UlImgButtonModalGoal
                  className={newGoal == 'Lose Fat' ? 'active' : ''}
                  src={selectedImageLoseFat}
                  alt="LoseFat"
                />
                <UlPButtonModalGoal 
                  className={newGoal == 'Lose Fat' ? 'active' : ''}
                >
                  Lose fat
                </UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <UlButtonModalGoal onClick={setGoalMaintain}>
                <UlImgButtonModalGoal
                  className={newGoal == 'Maintain' ? 'active' : ''}
                  src={selectedImageMaintain}
                  alt="Maintain"
                />
                <UlPButtonModalGoal
                  className={newGoal == 'Maintain' ? 'active' : ''}
                >
                  Maintain
                </UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <UlButtonModalGoal onClick={setGoalGailMuscle}>
                <UlImgButtonModalGoal
                  className={newGoal == 'Gain Muscle' ? 'active' : ''}
                  src={GainMuscle}
                  alt="Gain muscle"
                />
                <UlPButtonModalGoal
                  className={newGoal == 'Gain Muscle' ? 'active' : ''}
                >
                  Gain Muscle
                </UlPButtonModalGoal>
              </UlButtonModalGoal>
            </li>
            <li>
              <ConfirmModalGoal onClick={handleSubmit}>
                Confirm
              </ConfirmModalGoal>
            </li>
          </UlModalGoal>
        </DivChooseModalGoal>
      </DivModalGoalTextPart>
      <DivButtonCancellGoal onClick={() => setIsGoalModalOpen(false)}>
        Cancel
      </DivButtonCancellGoal>
    </DivModalGoal>
  );
}

export default ModalGoal;
