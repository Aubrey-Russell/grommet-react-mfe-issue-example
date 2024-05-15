// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Grommet } from 'grommet';
import NxWelcome from './nx-welcome';
import { hpe } from 'grommet-theme-hpe';

export function App() {
  return (
    <Grommet theme={hpe}>

    <Box>
      <NxWelcome title="mfe-ex-1" />
    </Box>
    </Grommet>
  );
}

export default App;
