// export const symbols = [
//   { icon: '♠️', color: 'black' },
//   { icon: '♦', color: 'red' },
//   { icon: '♥️', color: 'red' },
//   { icon: '♣️️', color: 'black' },
// ];

interface ICard {
  icon: string;
  cardNumber: number;
  color: string;
}

export const deck: ICard[] = [
  { icon: '♠️', cardNumber: 9, color: 'black' },
  { icon: '♦', cardNumber: 8, color: 'red' },
  { icon: '♥️', cardNumber: 7, color: 'red' },
  { icon: '♣️️', cardNumber: 6, color: 'black' },
  { icon: '♠️', cardNumber: 11, color: 'black' },
];
