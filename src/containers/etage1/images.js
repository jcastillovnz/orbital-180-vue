
import  config from "./../../config";
const {imgs} = config


const images = [...Array(imgs)].map(
  (_, i) =>
    `/src/assets/imgs/renders/${i}.jpg`
);
export default  images;