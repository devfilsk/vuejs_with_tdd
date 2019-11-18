import mutations from '@/store/mutations';
import * as types from '@/store/mutation-types';
import initialState from '@/store/state';
import user from './fixture/user';

describe('mutations', () => {
    let state;

    beforeEach(() => {
        state = { ...initialState }
    });

    it('sets new user', () => {
        //arrange
        const expectedUser = user;

        // act
        types.SET_USER(state, expectedUser);

        // assert
        expect(state.user).toEqual(expectedUser);
        expect(state.user).not.toBe(expectedUser);
    })
})