export const calcRatingWidth = (rating: number) => {
  const maxValue = 5;
  return `${(rating * 100) / maxValue}%`;
};
