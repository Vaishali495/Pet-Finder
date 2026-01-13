Api according to breed: 'https://dog.ceo/api/breed/husky/images/random/5'
Random dog images: 'https://dog.ceo/api/breeds/image/random/5'

const [data,setData] = useState([]);

  useEffect(() => {
    getImageData();
  }, []);

  const getImageData = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random/5");
      console.log("response: ", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  {/* {data.map((img,index) => <img src={img} key={index}></img>)} */}

  <div className="bg-red-300">
      <p className='text-3xl font-bold underline"'>.</p>
      
    </div>

{/* <p className='text-lg'>Find your Perfect Pet Match - Based on your preferences & life style</p>
        <p className='text-xs'>Explore adorable pets and discover which one captures your heart. Browse our collection of dogs, cats, rabbits, birds, and more!</p> */}



