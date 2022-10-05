import React from 'react';
import tv from "../../assets/imageTv.jpg";
import tv1 from '../../assets/image2.png';
import tv2 from '../../assets/image3.png';
import infor from '../../assets/image4.png'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';



const Header = () => {

    return (
        <div>
            <header>
                <div className='flex'>
                    <div  className='flex'>
                        
                        <div className='product-miniatures-img'>
                            <img src={tv1} alt="Miniatura 1" />
                            <img src={tv2} alt="Miniatura 2"/>
                            <img src={infor} alt="Miniatura 3"/>
                        </div>
                       
                        <img className='img'src={tv} />
                    </div>
                    <div className='container'>
                        <h2>Smart TV 32” HD LED TCL S615 VA 60Hz - Android Wi-Fi e Bluetooth Google Assistente 2 HDMI</h2>
                        <h4>(230531900)</h4>
                        <p className="subtitulos">
                            Vendido e entregue:
                            <a>
                                Lojas Imperio <span className="material-symbols-outlined">
                                    info
                                </span>
                            </a>
                        </p>
                        <p className='infor'>Informação do produto</p>
                        <hr />

                        <div className='flex'>
                            <span className="subtitulos"><s>R$ 2.199,00</s></span>
                            <span className='desconto'> 36% OFF</span>
                        </div>
                        <div>

                            <h1><strong>1.399,00 </strong></h1>
                            <p className="subtitulos">ou até 10x de R$ 139,90 S/juros  <a> Ver parcelas </a></p>

                        </div>

                        <div className='flex'>
                            <Button className='button'><span className="material-symbols-outlined">
                                bolt
                            </span>
                                Compre Agora</Button>

                            <Button className='button'> <span className="material-symbols-outlined">
                                shopping_cart
                            </span>

                                Adicionar ao Carrinho
                            </Button>


                        </div>
                        <div className='flex'>
                            <a className='text-favorite'><span className="material-symbols-outlined">
                                favorite
                            </span>  Favoritar produto </a>
                        </div>
                        <small className="subtitulos" >calcular frete e prazo</small>
                        <div className='flex' >

                            <input type ="text"placeholder="Digite seu cep"></input>
                            <Tooltip >
                                <Button className="tooltip" type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
                            </Tooltip>
                        </div>

                        <div className='card'>
                            <h3>Entrega Padrão</h3>
                            <div className='flex'>
                            <p > em ate 4 dias uteis</p>
                            <p className='text-card'>Frete R$ 39,90</p>
                            </div>
                        </div>
                    </div>



                </div>
            </header>
        </div>
    );
};
export default Header;