import styled from "@emotion/styled";
import Colors from "../../../styles/Colors";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: center;
    vertical-align: middle;
    padding: 5px;
  }
`;

export const TableHead = styled.thead`
  background-color: ${Colors.Main40};
`;
