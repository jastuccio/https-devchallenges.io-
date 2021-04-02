import styled from 'styled-components';

const StyledFooter = styled.footer`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #bdbdbd;
  font-size: 14px;
  /* position: absolute;
  bottom: 10px; */
  flex-shrink: 0;
  width: 100vw;
  text-align: center;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      Created by <a href="https://astucc.io">Joe Astuccio</a> - devchallenges.io
    </StyledFooter>
  );
}
