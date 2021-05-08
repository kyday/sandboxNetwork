import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdDone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addList,
  removeList,
  toggleList,
  removeVideo,
  dataset,
  showModal,
} from "../../../../store/actions";

function ListItem(props) {
  const { id, text, done } = props;

  const videos = useSelector((state) => state.videoReducer);
  const videosID = useSelector((state) => state.modalReducer.id);

  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleList(id));

    if (!done) {
      dispatch(dataset(videosID, done));
    } else {
      dispatch(removeVideo(id));
    }
  };

  const onRemove = () => {
    dispatch(removeList(id));
  };

  return (
    <ItemContainer>
      <CheckBox done={done} onClick={onToggle}>
        {done && <MdDone size={25} />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <AiOutlineClose />
      </Remove>
    </ItemContainer>
  );
}

export default React.memo(ListItem);

export const Remove = styled.div`
  ${({ theme }) => theme.flexCenter};
  opacity: 0;
  color: #dee2e6;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

export const CheckBox = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  font-size: 24px;
  margin: 3% 5%;
  cursor: pointer;
`;

export const Text = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
`;

export const ItemContainer = styled.div`
  ${({ theme }) => theme.flexCenter};
  justify-content: space-around;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;
