import React, { useState } from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const App = () => {

  const [categories, setCategories] = useState(['Simpson'])
  
  return (
    <div className="App">
      <h2>React Gif Expert</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <div>
        <ol>
          {
            categories.map( category => (
              <GifGrid
                key={ category }
                category={ category }
              />
            ))
          }
        </ol>
      </div>
    </div>
  );
}


