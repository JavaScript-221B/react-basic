import React from 'react';

const Book = (props: any) => {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져있습니다.`}</h2>
    </div>
  );
};

export default Book;