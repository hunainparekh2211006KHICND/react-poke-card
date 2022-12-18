import { render, screen } from '@testing-library/react';
import App from './App';
import { mockData } from './mockData';


// beforeEach(() => {
//   jest.spyOn(global, 'fetch').mockResolvedValue({
//       json: jest.fn().mockResolvedValue(mockData)
//   })
// });

test('should render <App>',async() => {
  render(<App />);
});