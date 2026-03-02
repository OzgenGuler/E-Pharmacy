import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-display: swap;
  font-family: "Regular";
  font-style: normal;
  font-weight: 400;
  src: url("../assets/fonts/Inter-Regular.ttf") format("truetype");
}

@font-face {
  font-display: swap;
  font-family: "Medium";
  font-style: normal;
  font-weight: 500;
  src: url("../assets/fonts/Inter-Medium.ttf") format("truetype");
}

@font-face {
  font-display: swap;
  font-family: "SemiBold";
  font-style: normal;
  font-weight: 600;
  src: url("../assets/fonts/Inter-SemiBold.ttf") format("truetype");
}

@font-face {
  font-display: swap;
  font-family: "Bold";
  font-style: normal;
  font-weight: 700;
  src: url("../assets/fonts/Inter-Bold.ttf") format("truetype");
}

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select {
  margin: 0;
}

button {
  cursor: pointer;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img,
video {
  display: block;
  height: auto;
  width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export const Container = styled.section`
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 60px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 96px;
  }
`;
