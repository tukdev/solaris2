import React from 'react'
import './Partners.css';


import {ReactComponent as ComputeOverData} from '../../assets/PartnerLogos/computeOD.svg';
import {ReactComponent as ConcensusLab} from '../../assets/PartnerLogos/consensuslab.svg';
import {ReactComponent as CryptoEcon} from '../../assets/PartnerLogos/cryptoecon.svg';
import {ReactComponent as FileCoin} from '../../assets/PartnerLogos/filecoin.svg';
import {ReactComponent as FVM} from '../../assets/PartnerLogos/FVM.svg';
import {ReactComponent as Lotus} from '../../assets/PartnerLogos/lotus.svg';
import {ReactComponent as PLlabs} from '../../assets/PartnerLogos/PLlabs.svg';
import {ReactComponent as RetrievalMarkets} from '../../assets/PartnerLogos/RetrievalMarkets.svg';


function Partners() {
  return (
    <div className='Partners-container'>
      <div className='partners-container-wrapper'>
        <div className='partners-module'>
          <ComputeOverData id="cod"/>
        </div>
        <div className='partners-module'>
          <ConcensusLab id="conlabs"/>
        </div>
        <div className='partners-module'>
          <CryptoEcon id="cryptoecon"/>
        </div>
        <div className='partners-module'>
          <FileCoin id="filecoin"/>
        </div>
        <div className='partners-module'>
          <FVM id="FVM"/> 
        </div>
        <div className='partners-module'>
          <Lotus id="lotus"/>
        </div>
        <div className='partners-module'>
          <PLlabs id="PLlabs"/>
        </div>
        <div className='partners-module'>
          <RetrievalMarkets id="Retmarkets"/>
        </div>
      </div>
      {/*
      <div className='partners-content-row'>
        <div className='partners-content-row-module'>
            <ComputeOverData id="cod"/>
        </div>
        <div className='partners-content-row-module'>
          <ConcensusLab id="conlabs"/>
        </div>
        <div className='partners-content-row-module'>
          <CryptoEcon id="cryptoecon"/>
        </div>
        <div className='partners-content-row-module'>
          <FileCoin id="filecoin"/>
        </div>
      </div>

      <div className='partners-content-row'>
        <div className='partners-content-row-module'>
            <FVM id="FVM"/>
        </div>
        <div className='partners-content-row-module'>
          <Lotus id="lotus"/>
        </div>
        <div className='partners-content-row-module'>
          <PLlabs id="PLlabs"/>
        </div>
        <div className='partners-content-row-module'>
          <RetrievalMarkets id="Retmarkets"/>
        </div>
      </div>
  */}
    </div>
  )
}

export default Partners;