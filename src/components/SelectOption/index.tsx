
import * as C from './styles';

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}


export const SelectOption = ({title, description, icon, selected, onClick}: Props) => {
    return(
        <C.Container onClick={onClick} selected={selected}>
             <C.Icon>{icon}</C.Icon>
             <C.Info>
                <C.Title>{title}</C.Title>
                <C.description>{description}</C.description>
             </C.Info>
        </C.Container>
    )
}