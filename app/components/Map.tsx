"use client"
import {MapContainer,TileLayer,Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCountries } from '@/lib/getCountries';
import { icon } from 'leaflet';
const ICON =icon({
    iconUrl: 'https://www.pngwing.com/en/free-png-vwukw',
    iconSize: [50,50]
})

export default function Maps({LocationValue}: {LocationValue: string}) {
    const {getCountryByValue} = useCountries();
    const latLang = getCountryByValue(LocationValue)?.latlang;
    return (
       <MapContainer scrollWheelZoom={false} zoom={8} className='h-[50vh] rounded-lg relative z-0' center={latLang?? [52.502, -0.09]}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 

            <Marker position={latLang ?? [52.505, -0.09]}  icon={ICON}/>
       </MapContainer>
    )
}