import React, { useEffect } from 'react';
import {
  Box,
  Container
} from '@material-ui/core';

import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
        <Container>
          <Box marginTop={3}>
            <Component {...pageProps} />
          </Box>
        </Container>
    </React.Fragment>
  );
}
