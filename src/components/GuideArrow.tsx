import {MouseEventHandler} from 'react';
import styled from '@emotion/styled';
import {BsChevronDoubleDown} from '@react-icons/all-files/bs/BsChevronDoubleDown';

type Props = {
  onClick: MouseEventHandler;
};

export const GuideArrow = ({onClick}: Props) => {
  return (
    <Container>
      <BsChevronDoubleDown className="guide-arrow" onClick={onClick} />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;

  .guide-arrow {
    fill: white;
    background-color: orangered;
    border-radius: 50%;
    padding: 6px;
    font-size: 50px;
    animation: pulse-black 2s infinite;

    @keyframes pulse-black {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(222, 100, 56, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  }
`;