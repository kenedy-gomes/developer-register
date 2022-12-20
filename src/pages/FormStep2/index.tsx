 
import * as C from '../FormStep1/styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import {  useNavigate, Link } from 'react-router-dom';
import  {SelectOption} from '../../components/SelectOption'

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
          navigate('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }
 

    

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3 - {state.name}</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o teu estado atual, profissionalmente.</p>

                <hr/>

                 <SelectOption
                 title="Sou iniciante"
                 description="Comecei a programar há menos de 2 anos"
                 icon="🧑🏻‍💻"
                 selected={state.level === 0}
                 onClick={() => setLevel(0)}
                 />

                <SelectOption
                 title="Sou Programador"
                 description="Já programo há 2 anos ou mais"
                 icon="👨🏻‍💻"
                 selected={state.level === 1}
                 onClick={()=>setLevel(1)}
                 />

                  
            <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}