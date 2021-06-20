import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import { ISettings } from "@data-access";
import { IVideoGallery } from "@data-access";
import { routes } from "../../../../routes";
import { PageWrapper } from "../../../top-level";
import { ResponsiveUniformGrid } from "generic-components";
import { VideoCardGrid } from "../video-card-grid";
import { VideoGalleryCard } from "../video-gallery-card";
import { useVideoState } from "../video-state";
import { PreloadVideos } from "../preload-videos";

export type IVideoGallerySingleProps = {
  settings: ISettings;
  videoGallery: IVideoGallery;
  relatedVideoGalleries: IVideoGallery[];
};

export const VideoGallerySingle = (props: IVideoGallerySingleProps) => {
  const { relatedVideoGalleries, videoGallery, settings } = props;

  const videoState = useVideoState();

  return (
    <PageWrapper pageTitle={["Video", videoGallery.name]} settings={settings}>
      <PreloadVideos
        videoUrls={videoGallery.videos.map((video) => video.url)}
      />

      <Container>
        <Box paddingTop={2}>
          <Typography variant="h1">{videoGallery.name}</Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <VideoCardGrid
          onClick={videoState.openVideo}
          videos={videoGallery.videos}
        />
      </Container>

      <Container>
        <Box paddingY={2}>
          <Typography variant="h2" color="initial">
            More Videos
          </Typography>
        </Box>
      </Container>

      <Container disableGutters>
        <ResponsiveUniformGrid>
          {relatedVideoGalleries.map((videoGallery) => (
            <Link
              key={videoGallery.slug}
              href={routes.singleVideoGallery(videoGallery.slug)}
            >
              <CardActionArea>
                <VideoGalleryCard videoGallery={videoGallery} />
              </CardActionArea>
            </Link>
          ))}
        </ResponsiveUniformGrid>
      </Container>
    </PageWrapper>
  );
};