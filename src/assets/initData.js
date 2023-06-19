import { v4 as uuidv4 } from 'uuid';

export const ITEMS = [
  {
    id: uuidv4(),
    content: "./rows-dnd/row1.png"
  },
  {
    id: uuidv4(),
    content: "./rows-dnd/row2.png"
  },
  {
    id: uuidv4(),
    content: "./rows-dnd/row3.png"
  },
  {
    id: uuidv4(),
    content: "./rows-dnd/row4.png"
  },
  {
    id: uuidv4(),
    content: "./rows-dnd/row5.png"
  }
];

export const initState = {
  [uuidv4()]: [],
  [uuidv4()]: [],
  [uuidv4()]: [],

};
