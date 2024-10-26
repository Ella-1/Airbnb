import { Label } from '@radix-ui/react-dropdown-menu'
import countries from 'world-countries'

const constriesFormated = countries.map((item) => ({
    value: item.cca2,
    label: item.name.common,
    flag: item.flag,
    latlang: item.latlng,
    region: item.region
}))


// A hook to get all countries and to get al countries by value
export const useCountries =()=> {
    const getAllCountries =() => constriesFormated
    const getCountryByValue = (value:string) => {
        return constriesFormated.find((item) => item.value === value )
    }

    return {
        getAllCountries,
        getCountryByValue
    }
}