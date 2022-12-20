 
import * as C from '../FormStep1/styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/');
        }else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
       
    }, []);

    const handleNextStep = () => {
      if(state.email !== '' && state.github !== '') {
        console.log(state);
      }else {
        alert('Preencha os dados!')
      }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }


    

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 - {state.name}</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os dados para conseguirmos entrar em contato!</p>

                <hr/>

                <label>
                    Digite seu Email!
                    <input
                        type="Email"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        autoFocus
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep} >Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}