import { ObjectFit } from "./types";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  onLoad?: () => void;
  objectFit?: ObjectFit;
  objectPosition?: string;
  styleImg?: string;
}

const StyledImage = styled.img<Props>`
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  ${(props) => props.styleImg}
`;

export default StyledImage;
