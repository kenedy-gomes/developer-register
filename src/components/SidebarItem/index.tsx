import * as C from './styles';
import { Link } from 'react-router-dom';
import {ReactComponent as BookIcon} from '../../svg/book.svg';
import {ReactComponent as ContatosIcon} from '../../svg/mail.svg';
import {ReactComponent as ProfissionalIcon} from '../../svg/profile.svg';
type Props = {
    title: string;
    description: string;
    icon: string;
    path:string;
    active: boolean;
}

export const SidebarItem = ({title, description, icon, path, active}:Props) => {
    return(
        <C.Container>
         <Link  to={path}>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Descrition>{description}</C.Descrition>
            </C.Info>
            <C.IconArea active={active}>
                {icon === 'profile' && 
                    <ProfissionalIcon fill='white' width={24} height={24}/>
                }
                {icon === 'book' && 
                    <BookIcon fill='white' width={24} height={24}/>
                }
                 {icon === 'mail' && 
                    <ContatosIcon fill='white' width={24} height={24}/>
                }
            </C.IconArea>
            <C.Point  active={active}></C.Point>
         </Link>
        </C.Container>
    )
}