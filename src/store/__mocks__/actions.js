import userFixture from '../../../tests/unit/fixture/user';
export default {
    SEARCH_USER: jest.fn().mockResolvedValue(userFixture)
}