import React, { useMemo } from 'react';
import { css, Global } from '@emotion/react';
import AppRouter from './routes';
import AppLayout from './layouts/AppLayout';
import { useThemeContext } from './contexts/ThemeContext';

const makeCssVars = (color, ns = '') =>
  Object.entries(color).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`--${ns ? `${ns}-${key}` : key}`]: value,
    }),
    {}
  );

function App() {
  const { colors } = useThemeContext();
  const variables = useMemo(() => makeCssVars(colors), [colors]);

  return (
    <>
      <Global
        styles={css`
          :root {
            ${variables}
          }

          body {
            color: var(--text-primary);
            background: var(--bg);
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-property: border, background, color;
            font-family: BarlowSemiCondensed-Regular;
          }
        `}
      />

      <AppLayout>
        <AppRouter />
      </AppLayout>
    </>
  );
}

export default App;
