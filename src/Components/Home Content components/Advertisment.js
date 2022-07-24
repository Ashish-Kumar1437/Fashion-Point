import React from 'react'

export default function Advertisment(props) {
    const adsSec={
        padding:'15px 10vw',
        width:'100vw'
    }
    const secImg={
        width:'80vw'
    }
  return (
    <section className="advertisement-sec" style={adsSec}>
            <img src={props.source} alt="ads" style={secImg}/>
    </section>
  )
}
