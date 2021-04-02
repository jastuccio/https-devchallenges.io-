import Image from 'next/image';
import styled from 'styled-components';
import Footer from '../components/Footer-devchallenges';

const Wrapper = styled.main`
  --black: #333333;
  --white: #fff;

  /* space-mono-regular - latin */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/space-mono-v6-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('../fonts/space-mono-v6-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('../fonts/space-mono-v6-latin-regular.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('../fonts/space-mono-v6-latin-regular.woff') format('woff'),
      /* Modern Browsers */ url('../fonts/space-mono-v6-latin-regular.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('../fonts/space-mono-v6-latin-regular.svg#SpaceMono') format('svg'); /* Legacy iOS */
  }
  /* space-mono-700 - latin */
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/space-mono-v6-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('../fonts/space-mono-v6-latin-700.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('../fonts/space-mono-v6-latin-700.woff2')
        format('woff2'),
      /* Super Modern Browsers */ url('../fonts/space-mono-v6-latin-700.woff')
        format('woff'),
      /* Modern Browsers */ url('../fonts/space-mono-v6-latin-700.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('../fonts/space-mono-v6-latin-700.svg#SpaceMono') format('svg'); /* Legacy iOS */
  }

  color: var(--black);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  margin: 20px 24px 24px 1px;
`;

const H1 = styled.h1`
  font-size: 24px;
  color: red;
`;

const H2 = styled.h2`
  font-size: 48px;
`;

const ImageWrapper = styled.div`
  margin: 32px auto 30px auto;
  display: flex;
  height: 20%;
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  color: var(--white);

  text-transform: uppercase;
  align-self: flex-end;
`;

export default function Custom404() {
  return (
    <Wrapper>
      <H1>404 - Page Not Found</H1>
      <ImageWrapper>
        <Image
          src="/images/404-original/scarecrow.png"
          alt="A scarecrow"
          width="1079"
          height="895"
        />
      </ImageWrapper>
      <H2>I have bad news for you</H2>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <Button>back to home</Button>
      <Footer />
    </Wrapper>
  );
}
