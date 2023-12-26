import { useState } from "react";
import { WrapperComponent, Title, WrapperTitle, TrashSvg, ButtonSvg, ModalLink } from "./DiaryItemMain.styled";
import ListNutritients from "../../Diary/ListNutritients";
import ModalDiary from "../../ModalIntake/ModalDiary";
import trashImg from "../../../assets/diary/trash.svg";

const DiaryItemMain = ({name, img, intake}) => {
    const[showModal, setShowModal] = useState(false);

    const requestType = 'POST';
    const idIntake = null;


    const toggleModal = () => {
        setShowModal(!showModal);
    };

    let selectedIntake;
    switch (name) {
      case "breakfast":
        selectedIntake = intake?.breakfast;
        break;
      case "lunch":
        selectedIntake = intake?.lunch;
        break;
      case "dinner":
        selectedIntake = intake?.dinner;
        break;
      case "snack":
        selectedIntake = intake?.snack;
        break;
      default:
        selectedIntake = null;
        break;
    }

    return ( 
    <WrapperComponent>
    <WrapperTitle>
        <img src={img} width={36} height={36}/>
        <Title>{name}</Title>
    </WrapperTitle>
    {!selectedIntake || selectedIntake.dish.length === 0 ? (
    <ModalLink onClick={toggleModal}>+ Record your meal</ModalLink>
) : (
    <>
        <ListNutritients name={name}/>
        <ButtonSvg>
            <TrashSvg><use href={`${trashImg}#icon-trash`} /></TrashSvg>
        </ButtonSvg>
    </>
)}
{showModal && <ModalDiary name={name}
 img={img}
  onClose={toggleModal}
  requestType={requestType}
  idIntake={idIntake}></ModalDiary>}
  </WrapperComponent> );
}
 
export default DiaryItemMain;