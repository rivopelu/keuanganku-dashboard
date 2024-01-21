import { Container } from "@mui/material";
import { StyleVariable } from "../constants/StyleVariable.ts";

export function PageContainerDashboard(props: IProps) {
  return (
    <Container
      sx={{ marginTop: StyleVariable.sizing.topBarHeight + 20 + "px" }}
      className={`     ${props.className ? props.className : ""}`}
    >
      {props.children}
    </Container>
  );
}

interface IProps {
  children: any;
  className?: string;
}
