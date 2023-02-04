import React, { useState } from "react";
import rightpagination from "../Images/right.png";
import leftpagination from "../Images/left.png";
import {
  PaginationContainer,
  PaginationImage,
  PaginationNumber,
  PaginationSelect,
} from "./style";

export const ShowPages = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  return (
    <PaginationContainer>
      <PaginationSelect>
        <option>Show 5</option>
        <option>Show 10</option>
        <option>Show 15</option>
        <option>Show 20</option>
      </PaginationSelect>
      <div>
        <img src={leftpagination} alt="pagination" />
      </div>
      <PaginationNumber
        number={1}
        isSelected={selectedNumber === 1}
        onClick={() => setSelectedNumber(1)}
      >
        1
      </PaginationNumber>
      <PaginationNumber
        number={2}
        isSelected={selectedNumber === 2}
        onClick={() => setSelectedNumber(2)}
      >
        2
      </PaginationNumber>
      <PaginationNumber
        number={3}
        isSelected={selectedNumber === 3}
        onClick={() => setSelectedNumber(3)}
      >
        3
      </PaginationNumber>
      <PaginationNumber
        number={4}
        isSelected={selectedNumber === 4}
        onClick={() => setSelectedNumber(4)}
      >
        4
      </PaginationNumber>
      <div>
        <img src={rightpagination} alt="pagination" />
      </div>
    </PaginationContainer>
  );
};
