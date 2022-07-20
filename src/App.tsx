import React from 'react';
import './App.css';
import Properties from './components/Properties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails';
import PropertyAddress from './components/PropertyAddress';
import Slider from './components/SliderArray';
import ImageUploads from './components/ImageUploads';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Properties properties={[
            {
              id: 1,
              image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
              distance: "450 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "NEW",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 2,
              image: "https://resources.stuff.co.nz/content/dam/images/1/7/j/t/3/s/image.related.StuffLandscapeSixteenByNine.710x400.17jpy2.png/1445218485241.jpg",
              distance: "850 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "SERVICED",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 3,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScw8zNhrtoSSnjfjS8-ugE4iUID1PIPR3vo_O_qitcYQmyVqF5iXppfc2awyZgMSJZMo0&usqp=CAU",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "NEW",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 4,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4YgYzxxYyaF9j2IIPmyop39I1nQeNBvQiflE89uceVnnDuVM0Z7fbk4F1hguyi7YmcU&usqp=CAU",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "NEW",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 5,
              image: "https://resources.stuff.co.nz/content/dam/images/1/7/j/t/3/s/image.related.StuffLandscapeSixteenByNine.710x400.17jpy2.png/1445218485241.jpg",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "SERVICED",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 6,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwO26WmOjPbzXzkVlzfcZtJ7JeDIqFlBT5hFxvoYZpopjSZSLSDAri3q5zqqtoRcE_TY&usqp=CAU",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "NEW",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 7,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4YgYzxxYyaF9j2IIPmyop39I1nQeNBvQiflE89uceVnnDuVM0Z7fbk4F1hguyi7YmcU&usqp=CAU",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "SERVICED",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 8,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBdUx_JyLOcQFOiEzH7yrQaFV7AUVDaJgCRdxnEn2aujlrDFyC8gD0v1_EtcruaCMKwI&usqp=CAU",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "NEW",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 9,
              image: "https://resources.stuff.co.nz/content/dam/images/1/7/j/t/3/s/image.related.StuffLandscapeSixteenByNine.710x400.17jpy2.png/1445218485241.jpg",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "NEW",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            },
            {
              id: 10,
              image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
              distance: "570 Kilometer away",
              location: "Lagos, NG",
              price: "500,000,000",
              service: "SERVICED",
              facilities: [
                { facility: require('./images/bed.png'), count: 5 },
                { facility: require('./images/bath.png'), count: 4 },
                { facility: require('./images/toilet.png'), count: 4 },
              ]
            }
          ]} />} />
          <Route path="property" element={<PropertyDetails />} />
          <Route path="propertyAddress" element={<PropertyAddress />} />
          <Route path="propertyType" element={<Slider />} />
          <Route path="image-uploads" element={<ImageUploads />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
