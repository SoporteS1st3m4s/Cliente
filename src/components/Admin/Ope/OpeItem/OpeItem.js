import React, {useState} from 'react'
import "./OpeItem.scss";
import { Button, Icon } from 'semantic-ui-react';
import { BasicModal } from '../../../Shared';
import { Mag } from '../../../../api';
import { useAuth } from '../../../../hooks';
import {OpeForm} from "../OpeForm"

const magController = new Mag();

export function OpeItem(props) {
  const {mag, onReload, onClose} = props
  const {accessToken} = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  //const [showConfirm, setShowConfirm] = useState(false)
  const dxp = mag._id.substring(24,18);
  const onOpenCloseModal = ()=>setShowModal((prevState) => !prevState);
 // const onOpenCloseConfirm = ()=> setShowConfirm((prevState) => !prevState);
  const openUpdateMag=()=>{
    setTitleModal(`Revisar cotización: #${dxp}`)
    onOpenCloseModal();
  }


  return (
    <>
    <div className='cotizacion-item'>
      <div className='cotizacion-item'>
        <p className='cotizacion-item__info-ope'>Cotizacion:</p>
        <p className='cotizacion-item__info-dxp'>#{dxp}</p>
      </div>
      <div>
        <Button icon primary onClick={openUpdateMag}>
          <Icon name='edit'/>
        </Button>
      </div>
    </div>
    <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
      <OpeForm onClose={onOpenCloseModal} onReload={onReload} mag={mag}/>
    </BasicModal>
    </>
  )
}
