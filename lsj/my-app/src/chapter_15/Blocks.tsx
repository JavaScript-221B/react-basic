import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  background-color: lightgray;
`;

const Block = styled.div<{ padding: string; backgroundcolor: string }>`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

type blockItem = {
  label: string;
  padding: string;
  backgroundColor: string;
};

const blockItems: blockItem[] = [
  {
    label: "1",
    padding: "1rem",
    backgroundColor: "red",
  },
  {
    label: "2",
    padding: "3rem",
    backgroundColor: "green",
  },
  {
    label: "3",
    padding: "2rem",
    backgroundColor: "blue",
  },
];

type Props = {};

function Blocks({}: Props) {
  return (
    <Wrapper>
      {blockItems.map((item) => (
        <Block padding={item.padding} backgroundColor={item.backgroundColor}>
          {item.label}
        </Block>
      ))}
    </Wrapper>
  );
}

export default Blocks;
