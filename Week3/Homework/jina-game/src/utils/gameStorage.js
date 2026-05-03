const GAME_RECORDS_KEY = "gameRecords";

export const getGameRecords = () => {
  return JSON.parse(localStorage.getItem(GAME_RECORDS_KEY)) || [];
};

export const saveGameRecord = (newRecord) => {
  const records = getGameRecords();

  localStorage.setItem(
    GAME_RECORDS_KEY,
    JSON.stringify([...records, newRecord]),
  );
};

export const removeGameRecords = () => {
  localStorage.removeItem(GAME_RECORDS_KEY);
};
