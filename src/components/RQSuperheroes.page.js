import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchRQdata=()=>{
    return axios.get('http://localhost:4000/superheroes');
}


function RQSuperheroesPage() {
    const {isloading, data}=useQuery('super-heroes', fetchRQdata);
    if(isloading){
        return <h2>Loading .... </h2>
    }
  return (
    <div>
      <h2>RQ super-Heroes </h2>
      {data?.data.map((hero)=>{
        return <div key={hero.name}>{hero.name} </div>
      })}
    </div>
  )
}

export default RQSuperheroesPage;
