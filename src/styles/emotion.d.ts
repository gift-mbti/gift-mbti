import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      purple: string;
      red: string;
      pink: string;
      yellow: string;
      blue: string;
      green: string;
      orange: string;
      skyblue: string;
    };
    font: { main: string };
  }
}
