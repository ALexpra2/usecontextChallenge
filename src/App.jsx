import './App.css'; // Archivo de estilos CSS
import { ThemeProvider } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import { RouterProvider } from 'react-router-dom';


const App = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider        
          router={RoutesApp} />
      </ThemeProvider>
    </>
  );
};

export default App;
