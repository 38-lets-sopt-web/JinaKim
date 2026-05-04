import * as S from "./RankingTable.styles";

const RankingTable = ({ gameRecords }) => {
  const sortByScore = (records) => {
    return [...records].sort((a, b) => b.score - a.score);
  };

  return (
    <S.Table>
      <S.TableHead>
        <tr>
          <th>순위</th>
          <th>레벨</th>
          <th>점수</th>
          <th>기록 시각</th>
        </tr>
      </S.TableHead>
      <tbody>
        {sortByScore(gameRecords).map((record, index) => {
          return (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>Level {record.level}</td>
              <td>{record.score}</td>
              <td>{new Date(record.date).toLocaleString("ko-KR")}</td>
            </tr>
          );
        })}
      </tbody>
    </S.Table>
  );
};

export default RankingTable;
