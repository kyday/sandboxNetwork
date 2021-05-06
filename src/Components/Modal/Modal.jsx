import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ListItem from "./Components/ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { addList, dropModal, toggleList } from "../../store/actions/";
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

function Modal(props) {
  const [value, setValue] = useState("");
  const status = useSelector((state) => state.modalReducer.modal);
  const lists = useSelector((state) => state.listReducer);

  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(dropModal());
    dispatch(toggleList());
    setValue("");
  };

  const onInputChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  const onCreate = () => {
    dispatch(addList(value));
    dispatch(dropModal());
    setValue("");
  };

  return (
    <>
      {status && (
        <ModalContainer toggle={status} onClick={onModalClose}>
          <ModalBody
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ModalTitle>
              <h1>Favorite List</h1>
              <AiOutlineClose
                className='close'
                size={20}
                onClick={onModalClose}
              />
            </ModalTitle>
            <ModalContent>
              {lists &&
                lists.map((item) => {
                  return (
                    <ListItem
                      key={item.id}
                      id={item.id}
                      text={item.text}
                      done={item.done}
                    />
                  );
                })}
            </ModalContent>
            <ModalFooter>
              <h2>Name</h2>
              <ModalInput
                type='text'
                placeholder='Input your name, please.'
                value={value}
                onChange={onInputChange}
                maxLength='50'
              />
              <div className='counter'>{`${parseInt(value.length)}/50`}</div>
            </ModalFooter>
            <button onClick={onCreate}>만들기</button>
          </ModalBody>
        </ModalContainer>
      )}
    </>
  );
}

export default React.memo(Modal);

export const ModalContainer = styled.article`
  ${({ theme }) => theme.flexCenter};
  display: ${(props) => (props.toggle ? `flex` : `none`)};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;

  button {
    color: #0074d9;
    padding: 5%;
    position: relative;
    left: 75%;
  }
`;

export const ModalTitle = styled.div`
  ${({ theme }) => theme.flexCenter};
  padding: 2rem 2rem;

  h1 {
    padding-right: 5rem;
    font-size: 1.5rem;
  }

  .close {
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  max-height: 300px;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 0.5rem;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 5% 5%;

  h2 {
    padding-bottom: 1rem;
  }

  .counter {
    width: 100%;
    text-align: right;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 2% 0.5%;
`;
