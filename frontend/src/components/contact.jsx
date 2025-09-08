import Api from './ApiCaller.js'


function Contact() {
    
    const {data, loading, error} = Api({ endpoint: "contact/" });
    console.log(data)
    console.log(loading)
    console.log(error)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data available</div>;
    return (
        <div>
            <h1>{data.message}</h1>
            <p>{data.data}</p>
        </div>
    );
}

export default Contact;