import { SvgIconProps } from "@mui/material";

export interface ISideBarEntries {
    href: string;
    Icon?: (props: SvgIconProps) => JSX.Element;
    primary: string;
    arrow?: {arrowPosition: boolean};
    childrens?: ISideBarEntries [];
    className?: string;
    style?: React.CSSProperties;
    divider?: boolean;
}