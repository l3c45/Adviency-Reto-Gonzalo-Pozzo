import { useState } from 'react';

const useModal = () => {
  const newGift={title:"Nuevo Regalo",data:{ name: "", quantity: "",url:"",user:"" ,price:"0.00"}}

    const [isVisible, setIsVisible] = useState(false);
    const [defaultData, setDefaultData] = useState(newGift)

    const  toggleModal=()=> {
      setDefaultData(newGift)
      setIsVisible(!isVisible);
    }
    
    const toggleModalEdit=(data)=>{
    
      const obj={data,title:"Editar Regalo"}
      setDefaultData(obj)
      setIsVisible(!isVisible)

    }
    return {
      isVisible,
      toggleModal,
      defaultData,
      toggleModalEdit
    }
  };export default useModal;