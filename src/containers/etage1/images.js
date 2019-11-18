
import config from "./../../config";
const images = [...Array(config.imgs)].map(
  (_, i) =>
    `/src/assets/imgs/renders/${i}.jpg`
);
export default  images;