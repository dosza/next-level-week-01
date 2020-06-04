import React ,{useEffect,useState, ChangeEvent} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {Map,TileLayer, Marker} from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';
import './style.css'
import logo from '../../assets/logo.svg'

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
   
   useEffect(() => {
       api.get('itens').then(response =>{
       //    console.log(response);
       setItens(response.data); 
       });
   },[]);

   useEffect(() =>{

    axios.get<IBGEResponse[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(response => {
            const ufInitials  = response.data.map(uf =>  uf.sigla );  
         //   console.log(ufInitials);
            setUfs(ufInitials);
        });
    },[]);

useEffect (() => {
    const city_url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`;
    console.log("city_url=" + city_url);
    axios.get<IBGECityResponse[]>(city_url).then(response => {
        const cityNames = response.data.map(city => city.nome )
        setCitys(cityNames);
    })
},[selectedUf]);

function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = String(event.target.value);
    setSelectedUf(uf);
}

function handleSelectedCity (event:ChangeEvent<HTMLSelectElement>){
    const city = String(event.target.value);
    setSelecteCity(city);
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

            <form>
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
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                        <div className="field">
                            <label htmlFor="name">Whatsapp </label>
                            <input
                                type="text"
                                name="whatsapp'"
                                id="whatsapp"
                            /> 
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no mapa</span> 
                    </legend>
                    <Map center={[-23.4886976,-46.5451525]} zoom={15}>
                        <TileLayer
                              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-23.4886976,-46.5451525]}
                        />
                    </Map>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
        
                            <select  name="uf" id="uf" value={selectedUf} onChange={handleSelectedUf}>
                                 
                                <option value="0">Selecione uma UF</option>
                                {
                                    ufs.map(uf=> (
                                        <option key="uf" value={uf}>{uf}
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
                                <li key={item.id}>	
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