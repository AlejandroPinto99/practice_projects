import type {NextPage} from 'next'

import LoginForm from '../../components/PokemonCenterPCLogin/Login'

import LoginStyle from'../../components/PokemonCenterPCLogin/Login.module.css'

const Login : NextPage = () => {
    return(
        <div className={LoginStyle.component_body}>
            <LoginForm />
        </div>
    );
};

export default Login;