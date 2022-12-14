import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hook/useAuth';

import styles from './login.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {sign} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const [value, setValue] = useState({
        email: '',
        password: ''
    });

    const login = () => {
        sign(value, () => navigate(fromPage, {replace: true}), 'login');
    };

    const handleValue = (e) => {
        setValue(() => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    };

    const { email, password } = value;
    return (
        <div className={styles.wrapper}>
            <div className={styles.authorization}>
                <h2>Авторизируйся на сайте!</h2>
                <input type="text" name="email" value={email} placeholder="Почта" onChange={handleValue} />
                <input type="password" name="password" value={password} placeholder="Пароль" onChange={handleValue} />
                <div className={styles.link}><Link to="/registration">Регистрация</Link></div>
                <button className={styles.button} onClick={login}>Войти</button>
            </div>
        </div>
    )
}

export default Login;