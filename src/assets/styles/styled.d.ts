import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    subBgColor: string;
    pointColor: string;
    font: string;
  }
}
