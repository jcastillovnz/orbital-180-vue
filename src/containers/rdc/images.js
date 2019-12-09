
import  config from "./../../config";
const {imgs} = config

const images = [...Array(imgs)].map(
  (_, i) =>
    `./dist/imgs/rdc/renders/${i}.jpg`
);


export default  images;