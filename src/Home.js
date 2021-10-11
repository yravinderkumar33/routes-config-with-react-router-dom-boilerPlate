import routesHandler from './routesHandler'

export const Home = ({ routes = [], ...props }) => {
    return (
        <>
            <h2>Home</h2>
            {routesHandler(routes)}
        </>
    )
}