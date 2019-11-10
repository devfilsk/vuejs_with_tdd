import flushPromises from 'flush-promises';
import nock from 'nock';
import api from '@/services/api'
import userFixture from './fixture/user';

describe('api', () => {
    it('searches for user', async () => {
        // arrange
        const expectedUser = 'devfilsk';

        const request = nock('https://api.github.com')
            .get(`/users/${expectedUser}`)
            .reply(200, userFixture);
        
        // act
        const result = await api.searchUser(expectedUser);
        await flushPromises();

        // assert
        expect(result).toEqual(userFixture);
        expect(request.isDone()).toBe(true);

    })
})