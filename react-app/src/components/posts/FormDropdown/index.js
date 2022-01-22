import React, { useEffect, useState } from "react";

const FormDropdown = ({ field }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(dropdown) {
      const res = await fetch(`/api/dropdown/${dropdown}`);
      const resData = await res.json();
      setData(resData[dropdown])
    }
    fetchData(field)
  }, [field]);


  return (
    <div>
      {data &&
        < select >
          {data.map(singleData => <option key={singleData.id} value={singleData.id}>{singleData[field]}</option>)}
        </select>
      }
    </div >
  )
}

export default FormDropdown


