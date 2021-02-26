import { GetStaticProps } from "next";
import {
  IImageGalleryProps,
  ImageGallery,
} from "../../components/templates/gallery";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IImageGalleryProps> = async () => {
  return {
    props: {
      platforms: await store.platform.getAll(),
      imageGalleries: await store.imageGallery.getAll(),
    },
  };
};

export default ImageGallery;
