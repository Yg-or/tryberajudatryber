function Home() {
    return (
        <div>
            <div>Home</div>
            <div>{data()}</div>
        </div>
    )
}


function data() {
    const data = new Date();
    const dynamicDateString = data.toTimeString();
    return dynamicDateString;
}

export default Home;
