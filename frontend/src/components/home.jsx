import Api from './ApiCaller.js'


function Home() {
    
    const {data, loading, error} = Api({ endpoint: "test/" });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div>{data.message}</div>
    );
}

export default Home;