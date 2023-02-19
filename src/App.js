import { useMemo } from "react";
import { GoogleMap, useLoadScript , Marker} from "@react-google-maps/api";
import {AutoComplete, Input, Button} from "antd";
import { FaSearch } from "react-icons/fa";

export default function Places() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 3.13, lng: 101.68 }), []);
    const options = [
        { value: 'Johor' },
        { value: 'Kedah' },
        { value: 'Kelantan' },
        { value: 'Kuala Lumpur' },
        { value: 'Labuan' },
        { value: 'Melaka' },
        { value: 'Negeri Sembilan' },
        { value: 'Pahang' },
        { value: 'Perak' },
        { value: 'Perlis' },
        { value: 'Pulau Pinang' },
        { value: 'Sabah' },
        { value: 'Sarawak' },
        { value: 'Selangor' },
        { value: 'Terengganu' },
    ];

    return (
        <>
            <div className="places-container">

                <h1 className="text">Search Location</h1>

                <div className='center'>

                    <AutoComplete
                        style={{
                            width: 450,
                        }}
                        placeholder="Search here"
                        options={options}
                        filterOption={true}>
                        <Input suffix={<Button type="primary"><FaSearch  /></Button>} />
                    </AutoComplete>
                </div>

                <p>Location saved:</p>
            </div>

            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName="map-container"

            >
                <Marker position={center} />
            </GoogleMap>

        </>
    );
}