import { Box, css, Grid, styled } from '@kuma-ui/core';
import './App.css';

export const ThisIsStyledComponent = styled.div`
  padding: 8px;
  color: white;
  background: black;
  @media (max-width: 500px) {
    color: blue;
  }
`;
 
// Then use it like so:
const Component = () => (
  <ThisIsStyledComponent>hello world</ThisIsStyledComponent>
);

export const ThisIsTheCSS = () => {
  return (
    <div
      className={css`
        color: white;
        padding: 8px;
        background: blue;
      `}
    >
      hello world
    </div>
  );
};

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Component />
      <ThisIsTheCSS/>
      <Grid gridTemplateColumns="repeat(2, 1fr)" gap={6}>
      <Box bg="teal" height="80px" />
      <Box bg="teal" height="80px" />
      <Box bg="teal" height="80px" />
      <Box bg="teal" height="80px" />
    </Grid>
    </div>
  );
};

export default App;
