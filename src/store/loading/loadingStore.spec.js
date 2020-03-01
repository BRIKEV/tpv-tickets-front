import { initialState, mutations } from './loadingStore';

describe('Store/wizard/cargoes/mutations', () => {
  const state = { ...initialState };

  it('set ships correctly', () => {
    expect(state.loading).toEqual(initialState.loading);
    mutations.SET_LOADING(state, true);
    expect(state.loading).toEqual(true);
  });
});
