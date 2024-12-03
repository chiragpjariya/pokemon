import { Grid2 } from "@mui/material"
import GradientCover from "./GradientCover"
import { useEffect, useState } from "react"
import image_processing20210908 from '../img/image_processing20210908-24531-1kubt6n.gif'
function Layout() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const fetchPokemon = async () => {

        const getData = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=3010')
        const res = await getData.json()

        const detaidOfPokemone = res.results.map(async (cur) => {
            const res = await fetch(cur.url);
            const res2 = await res.json()
            return res2
        })

        const pureData = await Promise.all(detaidOfPokemone)
        setData(pureData)
        setLoading(false)

    }


    useEffect(() => {
        fetchPokemon()
    }, [])



    if (loading) {
        return (<>
            <div className="flex items-center justify-center h-screen w-full">
                {/* <h1 className="flex items-center justify-center h-screen w-full font-mono text-2xl">Loading Data....................</h1> */}
                <img src={image_processing20210908} />
            </div>
        </>)

    }


    return (
        <>
            <Grid2 container variant='outline'
                spacing={10}
                display='flex'
                alignItems='center'
                justifyContent='center'

                sx={{
                    height: '100%',
                    width: '100%',
                    padding: '15px'
                }}>

                {data && data.map((item, index) => (
                    // console.log(item.types[1].type.name ?? 'unknows')

                    <Grid2
                        key={index}
                        size={{ sm: 3, xs: 12}}
                        height='350px'
                        width='400px'

                    >

                        <GradientCover
                            name={item.species.name}
                            img={item.sprites.other.dream_world.front_default}
                        />
                    </Grid2>

                ))


                }
            </Grid2>
        </>
    )
}

export default Layout