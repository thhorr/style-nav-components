import styled from "styled-components";

const Wrapper = styled.div`
    width: 800px;
    background-color: teal;
    color: white;
    font-size: 15px;
    margin: auto;
    border: 2px solid black;s
    font-weight:bold;
    display: grid;
    grid-template-columns: 50% 10% 10% 10% 10%;
    grid-gap: 2%;
    padding: 5px;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        background-color: teal;
    }
`;
const Image = styled.img`
  // padding: 5px;
  width: 60px;
  height: 40px;
`;
const Pt = styled.p`
  padding: 5px;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Image
        src={`https://seeklogo.com/images/M/millwall-logo-9EE625F8D4-seeklogo.com.png`}
      />
      <Pt>Try Vadas</Pt>
      <Pt>Login</Pt>
      <Pt>Resource</Pt>
      <Pt>About</Pt>
    </Wrapper>
  );
};
