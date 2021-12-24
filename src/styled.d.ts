import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
        accent: string;
    }
    width: {
        large: string;
        medium: string;
    }
    font: {
      body: string,
      text: string
    }
  }
}