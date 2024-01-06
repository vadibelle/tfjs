// const tf = require('@tensorflow/tfjs-node');
// const tfvis = require('@tensorflow/tfjs-vis')
 import '@tensorflow/tfjs-vis'
 import '@tensorflow/tfjs-node'
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
console.log("TensorFlow.js version information: ");
console.log(tf.version);
 
console.log(`TensorFlow.js backend: ${tf.getBackend()}`);
house = tf.data.csv('file://kc_house_data.csv');
house.take(20).toArray().then((data) => {
    console.log(data)
})
const points = house.map(record => ({
    x: record.sqft_living,
    y: record.price
}))
points.take(20).toArray().then((data) => {
    console.log(data)

tfvis.render.scatterplot(
    {
    name: 'sqft vs price'
    },
    {values: [points.toArray()],series: ['original']},
    {xLabel: 'sqft',
    yLabel: 'price'
    }
)
})

