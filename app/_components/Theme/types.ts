export type ThemeConfig = {
    name: string;
    color: Color;
    font: {
      [primary: string]: Font;
    };
    fontWeight: FontWeight;
    fontSize: FontSize;
    space: Space;
  };
  
  export type Color = { [colorName: string]: string };
  export type FontWeight = { [weight: string]: number };
  export type FontSize = { [size: string]: string };
  export type Space = { [size: number]: string };
  
  export type Font = {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
  