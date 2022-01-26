import React, { useEffect, useState } from "react";
import '../../auth/form.css'

const FormSelect = ({ field, updateValue, preselection }) => {
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
        data.map(singleData => (
          <b key={singleData.id}>
            <input id='radio' type="radio" value={singleData.id} checked={+preselection === +singleData?.id} name={field} onChange={updateValue} />{singleData[field === 'account_type' ? 'type' : field]}
          </b >
        ))
      }
    </div >
  )
}

export default FormSelect
