import { useEffect, useState } from 'react';

interface DataType {
  _id: number;
  targetPrice: number;
  name: string;
  price: number;
  category: string;
}

function App() {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/data");
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>Full Stack Application with Backend</h1>
      <div>
        {
          loading ? "Loading Data...." : null
        }
        {
          data && data.length > 0 && data.map((items: DataType, index: number) => (
            <center key={index}>
              <div
            style={{
              fontSize: "18px",
              fontWeight: "lighter !important"
            }}>
              <p>{items.name}</p>
              <p>{items.targetPrice}</p>
              <p>{items.category}</p>

              <p>{items.price}</p>
            </div>
            </center>
          ))
        }
      </div>
    </div>
  )
}

export default App
