export const timeConverter = (count: number): string => {
  const mSec = Math.floor((count % 1000) / 100);
  const sec = (count % 3600) % 60;
  const min = Math.floor((count % 3600) / 60);
  const addZero = (val: number): string => val < 10 ? `0${val}` : `${val}`;
  return `${addZero(min)}:${addZero(sec)}.${mSec}`
};