import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView';
import VUserSearchForm from '@/components/VUserSearchForm';
import VUserProfile from '@/components/VUserProfile';

describe('UserView', () => {

    // Faz essa função para evitar repetir este código em todos so testes
    const build = () => {
        // arrange - shallowMount renderiza apenas o primeiro nível de dependencia do componente
        //Segundo parametro serve para verificar se uma props está sendo passada ao componente filho
        const wrapper = shallowMount(UserView, {
            data: () => ({
                 user: {}
            })
        });

        return {
            wrapper,
            userSearchForm: () => wrapper.find(VUserSearchForm),
            userProfile: () => wrapper.find(VUserProfile)
        };
    }

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
        const { wrapper, userProfile } = build();

        wrapper.setData({
            user: {
                name: "Filipe Maciel"
            }
        });

        // assert
        expect(userProfile().vm.user).toBe(wrapper.vm.user);
    })
})