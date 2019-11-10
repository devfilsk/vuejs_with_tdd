
import userFixture from '../../../tests/unit/fixture/user'

export default {
  searchUser: jest.fn().mockResolvedValue(userFixture)
}