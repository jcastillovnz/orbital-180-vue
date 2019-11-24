
import  config from "./../../config";
const {imgs} = config

const images = [...Array(imgs)].map(
  (_, i) =>
    `./dist/${i}.jpg`
);


images.forEach(myFunction)

function myFunction(img, i, arr) {
var numero = 2 ; 
    require('./../../assets/imgs/renders/'+i+'.jpg');

}




export default  images;