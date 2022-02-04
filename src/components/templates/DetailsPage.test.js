import { render, screen } from '@testing-library/react';
import { DetailsPage } from './DetailsPage';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

describe('DetailsPage', () => {
  const localStorageMock = (() => {
    let store = {
      url: "www.google.com/test/tes1/"
    };
  
    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      removeItem(key) {
        delete store[key];
      },
      clear() {
        store = {};
      }
    };
  })();
  
  Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock
  });

  test('renders without error', () => {
    const obj = {
      abilities: {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/"
        }
      },
      height: 10,
      weight: 130,
      name: "ivysaur",
      sprites:{
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      }
    }
    render(
      <Router>
        <DetailsPage {...obj}/>
      </Router>  
    );
  });
  
});


