import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from
'react-router-dom';
import { AppProvider } from './contexto/contexto';
import { supabase } from "./supabase";
import Menu from './componentes/Menu';
import Aleatorios from './componentes/Aleatorios';
import Lista from './componentes/Listas';
import Capturados from './componentes/Capturados';
import Favoritos from './componentes/Favoritos';
import Usuarios from './componentes/Usuarios';
import Pokemon from './componentes/Pokemon';
import Login from './componentes/login';
import Registro from './componentes/Registro';
import Administrador from './componentes/Administrador';

function App() {
const [usuario, setUsuario] = useState(null);
const [cargando, setCargando] = useState(true);
useEffect(() => {
async function verificarSesion() {
const { data: { session } } = await supabase.auth.getSession();
setUsuario(session?.user || null);
setCargando(false);
}
verificarSesion();
// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {
setUsuario(session?.user || null);
});
}, []);
if (cargando) return <p>Cargando...</p>;
return (
<AppProvider>
<Router>
{usuario && <Menu />}
<Routes>
<Route path="/" element={usuario ? <Lista /> : <Navigate to="/login" />} />
<Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
<Route path="/Aleatorios" element={usuario ? <Aleatorios /> :<Navigate to="/login" />} />
<Route path="/Capturados" element={usuario ? <Capturados /> :<Navigate to="/login" />} />
<Route path="/Favoritos" element={usuario ? <Favoritos /> :<Navigate to="/login" />} />
<Route path="/Pokemon/:name" element={usuario ? <Pokemon /> :<Navigate to="/login" />} />

<Route path="/login" element={<Login/>} />
<Route path='/registro' element={<Registro/>} />
</Routes>
</Router>
</AppProvider>
);
}
export default App;