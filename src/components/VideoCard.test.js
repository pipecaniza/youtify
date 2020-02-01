import React from 'react'
import renderer from 'react-test-renderer'
import VideoCard from './VideoCard'

it('renders correctly', () => {
  const video = {
    thumbnail: 'url:image',
    title: 'videoTitle',
    id: 1
  };
  const selectVideo = jest.fn();
  const tree = renderer
    .create(<VideoCard video={video} selectVideo={selectVideo} isSignedIn={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});