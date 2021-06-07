import { GetStaticProps } from "next";
import {
  IProductProps,
  Product,
} from "../../../components/shop/pages/store.product";
import { dataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IProductProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      products: await dataStore.product.getAll(),
    },
  };
};

export default Product;
