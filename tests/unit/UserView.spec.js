jest.mock('@/store/actions');
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import UserView from '@/views/UserView';
import VUserSearchForm from '@/components/VUserSearchForm';
import VUserProfile from '@/components/VUserProfile';
import initialState from '@/store/state';
import actions from '@/store/actions';
import userFixture from './fixture/user';

// Cria instancia local do vue que pode ser manipulada sem interferir a instancia global
const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserView', () => {
    let state;

    // Faz essa função para evitar repetir este código em todos so testes
    const build = () => {
        // arrange - shallowMount renderiza apenas o primeiro nível de dependencia do componente
        //Segundo parametro serve para verificar se uma props está sendo passada ao componente filho
        const wrapper = shallowMount(UserView, {
            localVue,
            store: new Vuex.Store({ 
                state,
                actions,
            })
        });

        return {
            wrapper,
            userSearchForm: () => wrapper.find(VUserSearchForm),
            userProfile: () => wrapper.find(VUserProfile)
        };
    }

    // Inicia o stado antes dos testes serem executados 
    beforeEach(() => {
        jest.resetAllMocks(),
        state = { ...initialState }
    })

    it('render the component', () => {
        
        // arrange - shallowMount renderiza apenas o primeiro nível de dependencia do componente
        const { wrapper } = build();

        expect(wrapper.html()).toMatchSnapshot();
    })

    it('render main child components', () => {
        // arrange 
        const { userSearchForm, userProfile } = build();

        // assert
        // Verifica se os components existem
        expect(userSearchForm().exists()).toBe(true);
        expect(userProfile().exists()).toBe(true);
    })

    it('passed a binded user prop to user profile component', () => {
        // arrange
        state.user = userFixture;
        const { userProfile } = build();

        // wrapper.setData({
        //     user: {
        //         name: "Filipe Maciel"
        //     }
        // });

        // assert
        expect(userProfile().vm.user).toBe(state.user);
    })

    it('searches for a user when recerved "submitted"', () => {
        // usuario a ser enviado
        const expectUser = 'devfilsk';
        const { userSearchForm } = build();

        // act 
        userSearchForm().vm.$emit('submitted', expectUser);

        expect(actions.SEARCH_USER).toHaveBeenCalled();
        expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectUser });
    })
})