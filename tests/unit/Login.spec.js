import Login from '@/views/Login';
import { shallowMount } from '@vue/test-utils';

describe('login', () => {
    let state;

    const build = () => {
        const wrapper = shallowMount(Login);

        return {
            wrapper,
            email: () => wrapper.find('input.email'),
            password: () => wrapper.find('input.password'),
            buttonLogar: () => wrapper.find('.btn-login')            
        }
    }

    it('should render the login component', async () => {
        const { wrapper, email, password } = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render main child components', async () => {
        const { email, password, buttonLogar } = build();

        // asserts
        expect(email().exists()).toBe(true);
        expect(password().exists()).toBe(true);
        expect(buttonLogar().exists()).toBe(true);
    })

    it('should call "submited" event when submitting form',  () => {
        const { wrapper, email, password, buttonLogar } = build();

        const emailUser = 'admin@goscore.com.br';
        const passwordUser = '6f2a3s2t';

        // arrange
        email().element.value = emailUser;
        password().element.value = passwordUser;

        // act 
        email().trigger('input');
        password().trigger('input');
        buttonLogar().trigger('click');
        buttonLogar().trigger('submit');

        expect(wrapper.emitted().submitted[0]).toEqual([{ email: emailUser, password: passwordUser }])

    })
})