import { useState } from 'react';
import '../styles/DiscoverAnimals.css'
const DiscoverAnimals = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [animalInfo, setAnimalInfo] = useState(null);
    const [showSearch, setShowSearch] = useState(true);
    const [error, setError] = useState(null);
    const [animalImage, setAnimalImage] = useState(null);


    const fetchAnimalInfo = async (animalName) => {
        const apiKey = 'uwS1mvztGtUKLmJ4U4igtg==gH8ESv5mbRAWXaLh';
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
                headers: { 'X-Api-Key': apiKey }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            if (data && data.length > 0) {
                setAnimalInfo(data[0]);
                setShowSearch(false);
            } else {
                setError('No data found for this animal');
                setAnimalInfo(null);
            }
        } catch (error) {
            console.error('Error fetching animal data:', error);
            setError(error.message);
            setAnimalInfo(null);
        }
        fetchAnimalImage(animalName);

    };

    const fetchAnimalImage = async (animalName) => {
        const clientId = '0miwIpbDAcZiOicIuZ2t5XNIrT9O1CzmzZUoN8LRHz0';
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${animalName}&client_id=${clientId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.results.length > 0) {
                setAnimalImage(data.results[0].urls.regular);
            } else {
                setAnimalImage(null);
                console.error('Keine Bilder gefunden.');
            }
        } catch (error) {
            console.error('Fehler beim Abrufen des Tierbildes:', error);
        }
    };


    const handleResetSearch = () => {
        setShowSearch(true);
        setAnimalInfo(null);
        setSearchTerm('');
        setError(null);
    };

    return (
        <div className="entdecken">
            <div className='discover-animals'>
                <h1>Tiere Entdecken</h1>
                {showSearch ? (
                    <>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder="Geben Sie den Namen eines Tiers ein"
                        />
                        <button onClick={() => fetchAnimalInfo(searchTerm)}>Suchen</button>
                    </>
                ) : (
                    <>
                        {animalInfo ? (
                            <div className="animal-container">
                                <div className="search-again">
                                    <button onClick={handleResetSearch}>Neue Suche</button>
                                </div>
                                <div className="animal-header">
                                    <h2>{animalInfo.name}</h2>
                                </div>
                                <div className="animal-image">
                                    {animalImage && <img src={animalImage} alt={searchTerm} />}
                                </div>
                                <div className="animal-details">
                                    <p><strong>Klassifikation:</strong> {animalInfo.taxonomy.kingdom} - {animalInfo.taxonomy.class}</p>
                                    <p><strong>Standort:</strong> {animalInfo.locations.join(', ')}</p>
                                    <p><strong>Typ:</strong> {animalInfo.characteristics.diet}</p>
                                    <p><strong>Lebensdauer:</strong> {animalInfo.characteristics.lifespan}</p>
                                    <p><strong>name of young:</strong> {animalInfo.characteristics.name_of_young}</p>
                                    <p><strong>prey:</strong> {animalInfo.characteristics.prey} </p>
                                    <p><strong>habitat:</strong> {animalInfo.characteristics.habitat} </p>                            </div>
                                <div className="animal-description">
                                    <p className='description'>Der {animalInfo.name} ist bekannt für seine bemerkenswerten Eigenschaften. Mit einer durchschnittlichen Geschwindigkeit von {animalInfo.characteristics.top_speed} kann dieses Tier beeindruckende Geschwindigkeiten erreichen. Es hat eine typische Lebensspanne von {animalInfo.characteristics.lifespan} und ein Gewichtsbereich von {animalInfo.characteristics.weight}. Die durchschnittliche Größe liegt bei {animalInfo.characteristics.height}. Die Phase der Geschlechtsreife tritt etwa nach {animalInfo.characteristics.age_of_sexual_maturity} ein, und der Zeitpunkt des Abstillens der Jungen ist typischerweise um {animalInfo.characteristics.age_of_weaning}. Der Lebensraum dieses Tieres ist {animalInfo.characteristics.habitat}, was seine Anpassungsfähigkeit und Vielfalt unterstreicht.</p>              </div>
                            </div>
                        ) : error ? (
                            <div>{error}</div>
                        ) : (
                            <div>Loading...</div>
                        )}

                    </>
                )}
            </div>
        </div>
    );
};

export default DiscoverAnimals;
