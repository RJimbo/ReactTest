import { Stack, IconButton, initializeIcons } from '@fluentui/react'
import { useNavigate} from 'react-router-dom';

initializeIcons();

const Header = () =>
{
    const navigate = useNavigate();

    return(
    <Stack horizontal> 
        <IconButton iconProps={{iconName:'home'}} onClick={()=>navigate('/', { replace: true })}/>
    </Stack>
    );
}

const Navigation = () =>
{
    return(<Stack/>);
}

const Content = () =>
{
    return (<Stack/>)
}

const MSFluentUITest = () =>
{

    return(
        <Stack style={{width:'100vm', height:'100vm'}}>
            <Header/>
            <Stack grow>
                <Stack.Item>
                    <Navigation/>
                </Stack.Item>
                <Stack.Item grow>
                    <Content/>
                </Stack.Item>
            </Stack>
        </Stack>
    );
}

export default MSFluentUITest