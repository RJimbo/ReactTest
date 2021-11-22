import Header from './Components/Parts/Header';
import Contents from './Components/Parts/Contents';
import Navigation from './Components/Parts/Navigation';
import { Stack, StackItem } from '@fluentui/react';
import { Routes, Route } from 'react-router';
import Home from './Components/Pages/home';
import MSFluentUITest from './Components/Pages/MSFluentUITest';
import MaterialUIText from './Components/Pages/MaterialUITest';

const App = () => 
{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="MaterialUITest" element={<MaterialUIText/>}/>
      <Route path="MS-FluentUITest" element={<MSFluentUITest/>}/>
    </Routes>
  )
}

export default App;
