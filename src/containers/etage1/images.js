
import  config from "./../../config";
 const {imgs} = config

export const images = [...Array(imgs)].map(
  (_, i) =>
    `./dist/imgs/r1/renders/${i}.jpg`
);
export const masks = [...Array(imgs)].map(
  (_, i) =>
    `./dist/imgs/r1/masks/${i}.png`
);

