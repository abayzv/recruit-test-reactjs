import { render, screen } from '@testing-library/react';
import Slider from '.';
import { dataSlider } from '../../utils/sliderData';

test('renders Slider component', () => {
    render(<Slider sliderData={dataSlider} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(dataSlider.length);
});