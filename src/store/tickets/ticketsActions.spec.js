import ticketsActions from './ticketsActions';
import { getData, register } from '@/api';

jest.mock('@/api');

describe('Tickets actions', () => {
  it('Get tickets', async () => {
    const res = { data: ['ticket1', 'ticket2'] };
    getData.mockResolvedValueOnce(res);
    const commit = jest.fn();
    await ticketsActions.getTickets({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ITEMS', res.data);
  });

  it('Update tickets', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    register.mockResolvedValueOnce(true);
    await ticketsActions.updateTicket({ commit, dispatch });
    expect(dispatch).toHaveBeenCalledWith('getTickets');
    expect(dispatch).toHaveBeenCalledWith('sendSucces', { text: 'Ticket comprobado con éxito', title: 'SUCCESS' });
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false);
  });
});
