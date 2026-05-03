function solution(num_list) {
  const oddNum = Number(
    num_list
      .filter((num, index) => num % 2 === 1)
      .reduce((acc, cur) => acc + cur, ""),
  );
  const evenNum = Number(
    num_list
      .filter((num, index) => num % 2 === 0)
      .reduce((acc, cur) => acc + cur, ""),
  );

  return oddNum + evenNum;
}
