import React ,{useEffect,useState, ChangeEvent, FormEvent} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {Map,TileLayer, Marker} from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';
import './style.css'
import logo from '../../assets/logo.svg'
import { LeafletMouseEvent } from 'leaflet';

//array ou objeto: informar manualmente  o tipo da variavel

interface Item {
    id: number;
    title: string;
    image_url:string;
}

interface IBGEResponse{
    sigla: string;
}

interface IBGECityResponse{
    nome: string;
}
const CreatePoint = () => {
   const  [itens, setItens ] = useState<Item[]>([]);
   const [ufs,setUfs] = useState<string[]>([]);
   const [selectedUf,setSelectedUf] = useState('0');
   
   const [citys,setCitys] = useState<string[]>([]);
   const [selectedCity,setSelecteCity] = useState ('0');
   
   const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0]);
   const [selectedPosition,setSelectedPosition] = useState<[number,number]>([0,0]);

   const [selectedItens, setSelectedItens] = useState<Array<number> >([0]);
   const [formData,setFormData] = useState({
       name:'',
       email:'',
       whatsapp:''
   })

   const history = useHistory();


   useEffect(() => {
     
       api.get('itens').then(response =>{
       //    console.log(response);
       setItens(response.data); 
       });
   },[]);

   useEffect(() =>{

    axios.get<IBGEResponse[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then( response => {
            const ufInitials  = response.data.map(uf =>  uf.sigla );  
            setUfs(ufInitials);
        });
    },[]);

useEffect (() => {
    // testa se uf não foi selecionada e sai da funç~ao
    if ( selectedUf === '0'){
        return;
    }
    
    const city_url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`;
    console.log("city_url=" + city_url);
    axios.get<IBGECityResponse[]>(city_url).then(response => {
        const cityNames = response.data.map(city => city.nome )
        setCitys(cityNames);
    })
},[selectedUf]);

useEffect( () => {
    navigator.geolocation.getCurrentPosition ( position => {
        console.log("cuurent coords = ", position.coords);
        const {latitude,longitude} = position.coords;
        setInitialPosition([latitude,longitude])

    })
},[]);

function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = String(event.target.value);
    setSelectedUf(uf);
}

function handleSelectedCity (event:ChangeEvent<HTMLSelectElement>){
    const city = String(event.target.value);
    setSelecteCity(city);
}

function handleMapClick( event:LeafletMouseEvent ){
   setSelectedPosition
(
        [event.latlng.lat, event.latlng.lng]
    )

}

function handleInputChange( event: ChangeEvent<HTMLInputElement>){
    //console.log(event.target.name, event.target.value)
    const {name,value} = event.target;  
    setFormData({...formData,[name]:value}); 
}

function handleSelectedItem (id:number) {
 
  const alreadySelected  = selectedItens.findIndex(item => item === id )
  if ( alreadySelected >= 0 ){    
      const filteredItens = selectedItens.filter(item => item !== id);
      setSelectedItens(filteredItens);
  } else {
      setSelectedItens([ ...selectedItens,id])
  }


}
    
    async function handleSubmit(event:FormEvent){
    
    event.preventDefault();
    const  { name,email, whatsapp} = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude ] = selectedPosition;
    const items = selectedItens;

    const data =  {
        name,

        email,
        whatsapp,
        uf,
        city,
        latitude,
        longitude,
        items 
    }
    console.log(data);
    await api.post('points',data);
    alert('Ponto criado');
    history.push('/');
    

}
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit }>
                <h1>Cadastro do <br/>ponto de coleta</h1>
                 <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleInputChange}
                                />
                            </div>
                        <div className="field">
                            <label htmlFor="name">Whatsapp </label>
                            <input
                                type="text"
                                name="whatsapp'"
                                id="whatsapp"
                                onChange={handleInputChange}
                            /> 
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no mapa</span> 
                    </legend>
                    <Map center={initialPosition} zoom={15} onclick={handleMapClick}> 
                        <TileLayer
                              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPosition}
                        />
                    </Map>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
        
                            <select  name="uf" id="uf" value={selectedUf} onChange={handleSelectedUf}>
                                 
                                <option value="0">Selecione uma UF</option>
                                {
                                    ufs.map(uf=> (
                                        <option key={uf} value={uf}>{uf}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
        
                            <select name="city" id="city" value={selectedCity} onChange={handleSelectedCity}>
                                <option value="0">Selecione uma cidade</option>{
                                citys.map(city => (
                                        <option value={city}>{city}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    
                                       

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de Coleta</h2>
                        <span>Selecione um ou mais itens</span>
                    </legend>
                    <ul className="items-grid">
                        {
                            itens.map(item => (
                                <li 
                                    key={item.id} 
                                    onClick ={ () => handleSelectedItem(item.id)}
                                    className={selectedItens.includes(item.id) ? 'selected': ''}
            
                                >
                                    <img src={item.image_url} alt={item.title}/>
                                    <span>{item.title}</span>
                                </li>
                            ))
                        };
                    </ul>
                </fieldset>
                <button type="submit">Cadastrar Ponto de Coleta</button>                
            </form>
        </div>
    )
}

export default CreatePoint;