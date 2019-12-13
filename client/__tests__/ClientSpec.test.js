import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'; // ES6
import 'babel-polyfill';
import fetch from 'node-fetch';
import MovieRankListEntry from '../src/MovieRankListEntry';
import MovieRankList from '../src/MovieRankList';
import CurrentMovie from '../src/CurrentMovie';
import App from '../src/App';
import { movies } from '../fakeData.json';
global.fetch = fetch;

const mockMovie = {
  id: 5512,
  url: 'https://yts.lt/movie/deadpool-2016',
  title: 'Deadpool',
  year: 2016,
  rating: 8,
  runtime: 108,
  genres: ['Action', 'Adventure', 'Comedy', 'Romance', 'Sci-Fi'],
  summary:
    'This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
  description_full:
    'This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
  small_cover_image:
    'https://yts.lt/assets/images/movies/deadpool_2016/small-cover.jpg',
  medium_cover_image:
    'https://yts.lt/assets/images/movies/deadpool_2016/medium-cover.jpg',
  large_cover_image:
    'https://yts.lt/assets/images/movies/deadpool_2016/large-cover.jpg'
};
describe('MovieRankListEntry test', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<MovieRankListEntry movie={mockMovie} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('should render dynamic movie title', () => {
    expect(container.querySelector('.title').innerHTML).toEqual(
      mockMovie.title
    );
  });
  test('should render dynamic movie rating', () => {
    expect(
      container
        .querySelector('.rating')
        .innerHTML.includes(mockMovie.rating.toString())
    ).toEqual(true);
  });
  test('should render dynamic count tags', () => {
    expect(container.querySelectorAll('.tag').length).toEqual(
      mockMovie.genres.length
    );
  });
});

describe('MovieRankList test', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('should not render MovieRankListEntry if movies array are empty', () => {
    act(() => {
      ReactDOM.render(<MovieRankList movies={[]} />, container);
    });
    expect(container.querySelectorAll('.card').length).toEqual(0);
  });
  test('should render two MovieRankListEntry if movies array has two movies ', () => {
    act(() => {
      ReactDOM.render(
        <MovieRankList movies={[mockMovie, mockMovie]} />,
        container
      );
    });
    expect(container.querySelectorAll('.card').length).toEqual(2);
  });
});

describe('CurrentMovie test', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<CurrentMovie movie={mockMovie} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('should redner dynamic movie title', () => {
    expect(container.querySelector('.title').innerHTML).toEqual(
      mockMovie.title
    );
  });
  test('should redner dynamic medium cover img', () => {
    expect(container.querySelector('img').src).toEqual(
      mockMovie.medium_cover_image
    );
  });
  test('should redner dynamic description', () => {
    expect(container.querySelector('.description').innerHTML).toEqual(
      mockMovie.description_full
    );
  });
});

describe('App test', () => {
  test('should be stateful component', () => {
    expect(React.Component.isPrototypeOf(App));
  });
  test('should have `handleCardClick` method for change current movie', () => {
    const mockApp = new App();
    expect(typeof mockApp.handleCardClick).toEqual('function');
  });
  test('should execute setState method in handleCardClick method', () => {
    const mockApp = new App();
    const oldSetState = mockApp.setState.bind(mockApp);
    let isExecuted = false;
    mockApp.setState = function(...args) {
      oldSetState(args);
      isExecuted = true;
    };
    mockApp.handleCardClick.call(mockApp);
    expect(isExecuted).toEqual(true);
  });
  test('should have currentMovie and movies state in App.state', () => {
    const mockApp = new App();
    expect(mockApp.state.currentMovie).not.toEqual(undefined);
    expect(mockApp.state.movies).not.toEqual(undefined);
  });
  test('should change currentMovie when movie card was clicked', async done => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(movies)
      })
    );
    await act(async () => {
      ReactDOM.render(<App />, container);
    });
    const cards = container.querySelectorAll('.card');
    cards[2].dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(container.querySelector('.current-movie .title').innerHTML).toEqual(
      movies[2].title
    );
    expect(
      container.querySelector('.current-movie .title').innerHTML
    ).not.toEqual(movies[0].title);

    done();
  });
});
