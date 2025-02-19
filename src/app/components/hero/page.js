
const HeroPage = async () => {
    const response = await fetch("http://localhost:5000/shoes");
    const data = await response.json();

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-wrap justify-center gap-6 p-6">
            {data.map((shoe) => (
                <div key={shoe.model} className="w-80 bg-white rounded-xl shadow-lg p-4">
                
                    <div className="mt-4 text-center">
                        <h2 className="text-lg font-bold">{shoe.brand} - {shoe.model}</h2>
                        <p className="text-gray-600">{shoe.color} | {shoe.gender}</p>
                        <p className="text-red-500 font-semibold">${shoe.price}</p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroPage;
