import { Scatter } from '../src/index';

import { render } from '@testing-library/svelte';

const data = {
  labels: ['Scatter'],
  datasets: [
    {
      borderColor: 'rgba(99,0,125, .2)',
      backgroundColor: 'rgba(99,0,125, .5)',
      label: 'V(node2)',
      data: [
        {
          x: 1,
          y: -1.711e-2
        },
        {
          x: 1.26,
          y: -2.708e-2
        },
        {
          x: 1.58,
          y: -4.285e-2
        },
        {
          x: 2.0,
          y: -6.772e-2
        },
        {
          x: 2.51,
          y: -1.068e-1
        },
        {
          x: 3.16,
          y: -1.681e-1
        },
        {
          x: 3.98,
          y: -2.635e-1
        },
        {
          x: 5.01,
          y: -4.106e-1
        },
        {
          x: 6.31,
          y: -6.339e-1
        },
        {
          x: 7.94,
          y: -9.659e-1
        },
        {
          x: 10.0,
          y: -1.445
        },
        {
          x: 12.6,
          y: -2.11
        },
        {
          x: 15.8,
          y: -2.992
        },
        {
          x: 20.0,
          y: -4.102
        },
        {
          x: 25.1,
          y: -5.429
        },
        {
          x: 31.6,
          y: -6.944
        },
        {
          x: 39.8,
          y: -8.607
        },
        {
          x: 50.1,
          y: -1.038e1
        },
        {
          x: 63.1,
          y: -1.223e1
        },
        {
          x: 79.4,
          y: -1.413e1
        },
        {
          x: 100.0,
          y: -1.607e1
        },
        {
          x: 126,
          y: -1.803e1
        },
        {
          x: 158,
          y: -2e1
        },
        {
          x: 200,
          y: -2.199e1
        },
        {
          x: 251,
          y: -2.398e1
        },
        {
          x: 316,
          y: -2.597e1
        },
        {
          x: 398,
          y: -2.797e1
        },
        {
          x: 501,
          y: -2.996e1
        },
        {
          x: 631,
          y: -3.196e1
        },
        {
          x: 794,
          y: -3.396e1
        },
        {
          x: 1000,
          y: -3.596e1
        }
      ]
    }
  ]
};

const options = {
  title: {
    display: true,
    text: 'Scatter Chart - Logarithmic X-Axis'
  }
};


describe('Scatter Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Scatter);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Scatter, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Scatter, { props: { options } });

    expect(() => component).not.toThrow();
  });
});
