import Box from "@material-ui/core/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { routes } from "../../lib/routes";
import { AspectRatio } from "../shared/aspect-ratio";

export type ILogoProps = {
  src: string;
  aspectRatio: number;
};

export const Logo = ({ src, aspectRatio }: ILogoProps) => {
  return (
    <Link href={routes.landing()}>
      <Box style={{ cursor: "pointer" }} width="7em">
        <AspectRatio ratio={aspectRatio}>
          <Image priority layout="fill" src={src} />
        </AspectRatio>
      </Box>
    </Link>
  );
};
