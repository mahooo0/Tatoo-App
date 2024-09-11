import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
    return (
        <StyledWrapper>
            <div className="tooltip-container">
                <span className="text">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-send-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                    </svg>
                </span>

                <span className="tooltip2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                </span>

         
                <span className="tooltip5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-send-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                    </svg>
                </span>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    /* This is an example, feel free to delete this code */
    .tooltip-container {
        width: 50px;
        height: 50px;
        display:flex;
        justify-content:center;
        aling-items:center
        background: rgb(3, 169, 244);
        background: linear-gradient(
            138deg,
            rgba(3, 169, 244, 1) 15%,
            rgba(63, 180, 233, 1) 65%
        );
        position: relative;
        cursor: pointer;
        font-size: 17px;
        padding: 0.7em 0.7em;
        border-radius: 50px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
    .tooltip-container:hover {
        background: #fff;
        transition: all 0.6s;
    }
    .tooltip-container .text {
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #fff;
        transition: all 0.2s;
    }
    .tooltip-container:hover .text {
        fill: rgb(3, 169, 244);
        transition: all 0.6s;
    }

    /* Inicio do tooltip twitter */
    .tooltip1 {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #03a9f4;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip1 {
        top: 150%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        border-radius: 50px;
        transform: translate(-50%, -5px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip1:hover {
        background: #03a9f4;
        fill: #fff;
    }
    /* Fim do tooltip twitter */

    /* Inicio do tooltip facebook */
    .tooltip2 {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #1db954;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip2 {
        top: -120%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(-50%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tooltip-container:hover .tooltip2:hover {
        background: #1db954;
        fill: #fff;
    }
    /* Fim do tooltip facebook */

    /* Inicio do tooltip whatsApp */
    .tooltip3 {
        position: absolute;
        top: 100%;
        left: 60%;
        transform: translateX(80%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #1db954;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip3 {
        top: 10%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(85%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip3:hover {
        background: #1db954;
        fill: #fff;
    }
    /* Fim do tooltip whatsApp */

    /* Inicio do tooltip Discord */
    .tooltip4 {
        position: absolute;
        top: 100%;
        left: -190%;
        transform: translateX(70%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #8c9eff;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip4 {
        top: 10%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(70%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip4:hover {
        background: #8c9eff;
        fill: #fff;
    }
    /* Fim do tooltip Discord */

    /* Inicio do tooltip pinterest */
    .tooltip5 {
        position: absolute;
        top: 100%;
        left: -145%;
        transform: translateX(70%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill:  #03a9f4;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip5 {
        top: -78%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(70%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip5:hover {
        background:  #03a9f4;
        fill: #fff;
    }
    /* Fim do tooltip pinterest */

    /* Inicio do tooltip dribbble */
    .tooltip6 {
        position: absolute;
        top: 100%;
        left: 35%;
        transform: translateX(70%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #ea4c89;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip6 {
        top: -79%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(70%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip6:hover {
        background: #ea4c89;
        fill: #fff;
    }
    /* Fim do tooltip dribbble */

    /* Inicio do tooltip github */
    .tooltip7 {
        position: absolute;
        top: 100%;
        left: 39%;
        transform: translateX(70%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #000;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip7 {
        top: 104%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(70%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip7:hover {
        background: #000;
        fill: #fff;
    }
    /* Fim do tooltip github */

    /* Inicio do tooltip reddit */
    .tooltip8 {
        position: absolute;
        top: 100%;
        left: -150%;
        transform: translateX(70%);
        opacity: 0;
        visibility: hidden;
        background: #fff;
        fill: #ff4500;
        padding: 10px;
        border-radius: 50px;
        transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .tooltip-container:hover .tooltip8 {
        top: 101%;
        opacity: 1;
        visibility: visible;
        background: #fff;
        transform: translate(70%, -5px);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip-container:hover .tooltip8:hover {
        background: #ff4500;
        fill: #fff;
    }
    /* Fim do tooltip reddit */

    /* Inicio do tooltip fixo */
    .tooltip9 {
        position: absolute;
        top: 0;
        left: -115%;
        opacity: 0;
        visibility: hidden;
        width: 150px;
        height: 150px;
        z-index: -1;
    }

    .tooltip-container:hover .tooltip9 {
        top: -110%;
        opacity: 1;
        visibility: visible;
        border-radius: 50%;
        z-index: -1;
    }
    /* Fim do tooltip fixo */
    /* Por meio desse ultimo tooltip todos os outros podem
ficar fixos quando houver no principal, para vê-lo dê um
background black acima*/
`;

export default Tooltip;
