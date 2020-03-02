import ticketsActions from './ticketsActions';
import { getData, register, uploadPDF } from '@/api';

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
    expect(dispatch).toHaveBeenCalledWith('sendSuccess', { text: 'Ticket comprobado con éxito', title: 'SUCCESS' });
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false);
  });

  it('Send pdf', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    uploadPDF.mockResolvedValueOnce(true);
    await ticketsActions.sendPDF({ commit, dispatch });
    expect(commit).toHaveBeenCalledWith('SET_LOADING', true);
    expect(dispatch).toHaveBeenCalledWith('sendSuccess', { text: 'Se ha subido el PDF correctamente', title: 'SUCCESS' });
    expect(dispatch).toHaveBeenCalledWith('getTickets');
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false);
  });
});
