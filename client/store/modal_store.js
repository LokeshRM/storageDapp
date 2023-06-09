import { create } from "zustand";

const useModalStore = create((set) => ({
  openModalvariable: false,
  link: "",
  type:"",
  setOpenModal: () =>
    set((state) => ({
      openModalvariable: true,
    })),
  setCloseModal: () =>
    set((state) => ({
      openModalvariable: false,
    })),
  setLink: (link) =>
    set((state) => ({
      link: (state.link = link),
    })),
    setType:(type)=>set((state)=>({
        type:state.type = type
    }))
}));

const useModalUploadFileStore = create((set)=>({
    openModal:false,
    setUploadModal:()=>set((state)=>({
        openModal:true
    })),
    closeUploadModal:()=>set((state)=>({
        openModal:false
    }))
}))

const useCreateFolderStore = create((set) => ({
  openFolderModal: false,
  setFolderModal: () =>
    set((state) => ({
      openFolderModal: true,
    })),
  closeFolderModal: () =>
    set((state) => ({
      openFolderModal: false,
    })),
}));

const useDeleteDataStore = create((set) => ({
  openDeleteModalValue: false,
  cid: "",
  type: "",
  setCid: (cid) =>
    set((state) => ({
      cid: (state.cid = cid),
    })),
  setType: (type) =>
    set((state) => ({
      type: (state.type = type),
    })),
  setOpenDeleteModal: () =>
    set((state) => ({
      openDeleteModalValue: true,
    })),
  setCloseDeleteModal: () =>
    set((state) => ({
      openDeleteModalValue: false,
    })),
  
}));

const useSharefile = create((set) => ({
  openShareFileValue: false,
  _cid: "",
  type:"",
  setCidShareFile: (cid) =>
    set((state) => ({
      _cid: (state.cid = cid),
    })),
  setTypeShareFile: (type) =>
    set((state) => ({
      type: (state.type = type),
    })),
  setOpenShareFileModal: () =>
    set((state) => ({
      openShareFileValue: true,
    })),
  setCloseShareFileModal: () =>
    set((state) => ({
      openShareFileValue: false,
    })),
}));

const useSharedWithStore = create((set) => ({
  openSharedWithStore: false,
  _cid: "",
  type:"",
  setCidSharedWith: (cid) =>
    set((state) => ({
      _cid: (state.cid = cid),
    })),
  setTypeSharedFile: (type) =>
    set((state) => ({
      cid: (state.type = type),
    })),
  setOpenSharedWithModal: () =>
    set((state) => ({
      openSharedWithStore: true,
    })),
  setCloseSharedWithModal: () =>
    set((state) => ({
      openSharedWithStore: false,
    })),
}));

const useLoaderModal = create((set)=>({
  const1:0,
  const2:1,
  const3:0,
  const4:0,
  setConst1:()=>set((state)=>({
    const1:state.count1 + 1
  })),
  setConst2:()=>set((state)=>({
    const2:state.count2 + 1
  })),
  setConst3:()=>set((state)=>({
    const3:state.count3 + 1
  })),
  setConst4:()=>set((state)=>({
    const4:state.count4 + 1
  }))
}))

export default useModalStore

export {
  useModalUploadFileStore,
  useCreateFolderStore,
  useDeleteDataStore,
  useSharefile,
  useSharedWithStore,
  useLoaderModal,
};