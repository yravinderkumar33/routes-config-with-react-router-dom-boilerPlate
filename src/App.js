import Routes from './routes';
import useRoute from './routesHandler';

const App = () => {
    const routes = useRoute(Routes);
    return (
        <>
            <h1> App Component </h1>
            {routes}
        </>
    )
}

export default App