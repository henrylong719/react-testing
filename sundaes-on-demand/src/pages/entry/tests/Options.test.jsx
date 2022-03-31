import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  // find images
  // async must use await findBy
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);

  // To Equal (array, object)
  // toBe (number, string)

  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each toppings option from server', async () => {
  // Mock Service Worker will return three toppings from server
  render(<Options optionType="toppings" />);

  const images = await screen.findAllByRole('img', { name: /topping$/i });

  expect(images).toHaveLength(3);

  const altText = images.map((element) => element.alt);

  expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);

});

test("don't update total if scoops input is invalid", async () => {
  render(<Options optionType="scoops" />);

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '-1');

  // make sure scoops subtotal hasn't updated
  const scoopsSubtotal = screen.getByText('Scoops total: $0.00');
  expect(scoopsSubtotal).toBeInTheDocument();
});
