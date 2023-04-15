import React from 'react'
import PhotoIcon from "@mui/icons-material/Photo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useModalStore from '@/store/modal_store';
const ImageType = ({item}) => {
    const { openModalvariable, setOpenModal, setLink, setType } =
      useModalStore((state) => ({
        openModalvariable: state.openModalvariable,
        setOpenModal: state.setOpenModal,
        setLink:state.setLink,
        setType:state.setType,
      }));
    const seeFullImage  = ()=>{
        // pass type and link to modal function
        // for modal make a global state which contain states to open and close modal, link of image, pdf or vedio will 
        // use iframe
        setOpenModal()
        setLink(item.link)
        setType("image")
    }  

    return (
        <div
        className="card-component cursor-pointer hover:bg-gray-300 "
        onClick={seeFullImage}
        >
        <div className="lower-container flex justify-between">
            <div className='flex justify-start'>
            <PhotoIcon sx={{ margin: "1px" }} />
            <p className="text-sm m-[1px] ">{item.name}</p>
            </div>
            <div className="">
            <MoreVertIcon />
            </div>
        </div>
        <div className="upper-container">
            <div className="image-container">
            <img src={item.link} className="communities-logo" />
            </div>
        </div>
        </div>
  );
}

export default ImageType