import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  IGallery,
  IHero,
  IPlatform,
  IRelease,
  IVideo,
} from "../../lib/contracts";
import { ButtonLink } from "../atoms/button-link";
import { Container } from "../atoms/container";
import { Header } from "../atoms/header";
import { MotionTypography } from "../atoms/typography";
import { GalleryCardGrid } from "../organisms/gallery-card-grid";
import { Hero } from "../organisms/hero";
import { PlatformCardGrid } from "../organisms/platform-card-grid";
import { ReleaseCardGrid } from "../organisms/release-card-grid";
import { VideoCardGridWithPlayer } from "../organisms/video-card-grid-with-player";
import { PageLayout } from "./layout.tsx/page-layout";

export type ILandingProps = {
  heros: IHero[];
  videos: IVideo[];
  platforms: IPlatform[];
  galleries: IGallery[];
  releases: IRelease[];
};

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(4),
  },
}));

export const Landing = (props: ILandingProps) => {
  const { heros, videos, platforms, galleries, releases } = props;

  const classes = useStyles();

  return (
    <PageLayout platforms={platforms}>
      <Hero hero={heros[0]} />

      <Container layoutId="platforms" className={classes.section}>
        <Header>
          <Typography variant="h3">Find Us Here</Typography>
        </Header>

        <PlatformCardGrid platforms={platforms} />
      </Container>

      <Container layoutId="video" className={classes.section}>
        <Header>
          <MotionTypography layoutId="video-title" variant="h3">
            Video
          </MotionTypography>
          <ButtonLink href="/video">See All</ButtonLink>
        </Header>

        <VideoCardGridWithPlayer videos={videos.slice(0, 3)} />
      </Container>

      <Container layoutId="music" className={classes.section}>
        <Header>
          <MotionTypography layoutId="music-title" variant="h3">
            Music
          </MotionTypography>
          <ButtonLink href="/music">See All</ButtonLink>
        </Header>

        <ReleaseCardGrid releases={releases.slice(0, 3)} />
      </Container>

      <Container layoutId="gallery" className={classes.section}>
        <Header>
          <MotionTypography layoutId="gallery-title" variant="h3">
            Gallery
          </MotionTypography>
          <ButtonLink href="/gallery">See All</ButtonLink>
        </Header>

        <GalleryCardGrid galleries={galleries.slice(0, 3)} />
      </Container>
    </PageLayout>
  );
};