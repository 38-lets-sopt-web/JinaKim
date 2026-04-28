import styled from "@emotion/styled";
import Colors from "../../../../styles/Colors";

export const Container = styled.div`
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${Colors.Main20};
`;

export const HoleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $size }) => $size}, 1fr);
  grid-template-rows: repeat(${({ $size }) => $size}, 1fr);
  gap: 15px;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding: 15px;
`;
export const Hole = styled.div`
  border-radius: 50%;
  background-color: ${Colors.Main40};
  overflow: hidden;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
`;
