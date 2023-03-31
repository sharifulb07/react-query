import React from 'react'
import {ReactQueryDevTool} from 'react-query/devtools';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';



function RQSuperheroesPage() {

    const onSuccess=(data)=>{
        console.log("Perform side effect after data fetching ", data)
    }

    const onError=(error)=>{
        console.log("Perform side effect after encountering error ", error)
    }
    const {isloading, data, isError, error,isFetching, refetch}=useSuperHeroesData(onSuccess,onError);
        // refetchOnMount:true,
        // refetchOnWindowFocus:'always',
        // refetchInterval:2000,
        // refetchIntervalInBackground:true,

        // enabled:false,
      
    if(isloading || isFetching){
        return <h2>Loading .... </h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
  return (
    <div>
      <h2>RQ super-Heroes </h2>
      <button onClick={refetch}>Our Super Heroes </button>
      {/* {data?.data.map((hero)=>{
        return <div key={hero.name}>{hero.name} </div>
      })} */}



      {data.map((superHeroName)=>{
       return <h2 key={superHeroName}>{superHeroName}</h2>
      })}
    </div>
  )
}

export default RQSuperheroesPage;
