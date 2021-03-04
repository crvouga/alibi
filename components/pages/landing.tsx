import { Hidden, Paper, Slide } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useInView } from "react-intersection-observer";
import { routes } from "../../constants/routes";
import { IImageGallery, IRelease } from "../../lib/domain";
import { ISettings } from "../../lib/domain/settings";
import { ButtonLink } from "../@shared/button-link";
import { ClickableLink } from "../@shared/clickable";
import { UniformGrid } from "../@shared/uniform-grid";
import { DocumentTitle } from "../app/meta";
import { NavigationActionBar } from "../app/navigation/navigation-action-bar";
import { NavigationBarLarge } from "../app/navigation/navigation-bar-large";
import { NavigationBarLogo } from "../app/navigation/navigation-bar-logo";
import { PageLayout } from "../app/page-layout";
import { Hero } from "../hero/hero";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ReleaseCard } from "../release/release-card";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";

export type ILandingProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
  releases: IRelease[];
};

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(2),
  },

  section: {
    padding: theme.spacing(4, 0),
  },

  sectionHeader: {
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const Landing = (props: ILandingProps) => {
  const { imageGalleries, releases, settings } = props;

  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <PageLayout title={DocumentTitle(settings.band.name)} settings={settings}>
      <Hero hero={settings.landingPage.heros[0]} />
      <div style={{ position: "absolute", top: "20%" }} ref={ref} />

      <Hidden xsDown>
        <Slide appear={false} direction="down" in={!inView}>
          <NavigationBarLarge />
        </Slide>
      </Hidden>

      <Hidden smUp>
        <Slide appear={false} direction="down" in={!inView}>
          <NavigationBarLogo />
        </Slide>
        <Paper
          style={{
            zIndex: 100,
            position: "fixed",
            top: "auto",
            width: "100vw",
            bottom: 0,
          }}
        >
          <NavigationActionBar />
        </Paper>
      </Hidden>

      <Container component="main" className={classes.main}>
        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Videos</Typography>
            <ButtonLink href={routes.allVideoGalleries()}>See All</ButtonLink>
          </div>

          <VideoCardGridWithPlayer
            videos={settings.landingPage.videos.slice(0, 3)}
          />
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Photos</Typography>
            <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
          </div>

          <UniformGrid>
            {imageGalleries.slice(0, 3).map((imageGallery) => (
              <ClickableLink
                key={imageGallery.slug}
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <ImageGalleryCard imageGallery={imageGallery} />
              </ClickableLink>
            ))}
          </UniformGrid>
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Music</Typography>
            <ButtonLink href={routes.allReleases()}>See All</ButtonLink>
          </div>

          <UniformGrid>
            {releases.slice(0, 3).map((release) => (
              <ClickableLink
                key={release.slug}
                href={routes.singleRelease(release.slug)}
              >
                <ReleaseCard release={release} />
              </ClickableLink>
            ))}
          </UniformGrid>
        </section>
      </Container>
    </PageLayout>
  );
};
