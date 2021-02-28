import Typography from "@material-ui/core/Typography";
import React from "react";

import { routes } from "../../constants/routes";
import { ISettings, IVideoGallery } from "../../lib/domain";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ItemGrid } from "../@shared/item-grid";
import { Reveal } from "../@shared/reveal-animation";
import { makeTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { VideoGalleryCard } from "../video/video-gallery-card";

export type IVideoGalleryProps = {
  videoGalleries: IVideoGallery[];
  settings: ISettings;
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, settings } = props;

  return (
    <PageLayout
      title={makeTitle("Video", settings.band.name)}
      settings={settings}
    >
      <Container>
        <Header>
          <Typography variant="h3">Videos</Typography>
        </Header>

        <ItemGrid
          items={videoGalleries}
          getItemKey={(videoGallery) => videoGallery.slug}
          renderItem={(videoGallery) => (
            <ClickableLink href={routes.singleVideoGallery(videoGallery.slug)}>
              <Reveal>
                <VideoGalleryCard videoGallery={videoGallery} />
              </Reveal>
            </ClickableLink>
          )}
        />
      </Container>
    </PageLayout>
  );
};
