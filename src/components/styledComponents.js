import styled from "styled-components";

export const Item = styled.div`
  width: 20rem;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${props => (props.isDragging ? "dashed #000" : "solid #ddd")};
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  border: 0px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  
 
`;

export const CategoriesContent = styled.div`
  display: flex;
  
`;

export const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;

export const List = styled.div`
  border: 1px ${props => (props.isDraggingOver ? "dashed #000" : "solid #ddd")};
  background-color: white;
  padding: 1rem 1rem 0;
  border-radius: 15px;
  font-family: sans-serif;
  height: 20rem;
  width: 30rem;
  
`;

export const RewardsContainer = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 5px;
  width: 30rem;
`;
// export const RewardsList = styled(List)`
//   background-color: beige;
// `;

export const CategoriesContainer = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 5px;
`;

export const CategoryList = styled(List)`
  
  width: 25rem;
   height: 7rem;
   margin-bottom: 3rem;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const TitleR = styled.h3`
  text-align: center;
  color: lightgreen;
`;

export const ResetButton = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 1.5rem;
  background-color: lightsalmon;
  cursor: pointer;
`;
