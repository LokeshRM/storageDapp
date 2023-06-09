import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteDataStore,
  useSharefile,
  useSharedWithStore,
} from "@/store/modal_store";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { SharedWithModal } from './Modal';
const Share_Remove = ({getProviderOrSigner, changeDivider , cid,type}) => {
  const {setType, setCid, setOpenDeleteModal } = useDeleteDataStore((state) => ({
    setCid: state.setCid,
    setType : state.setType,
    setOpenDeleteModal: state.setOpenDeleteModal,
  }));

  const {setTypeShareFile, setCidShareFile, setOpenShareFileModal } = useSharefile((state) => ({
    setTypeShareFile: state.setTypeShareFile,
    setCidShareFile:state.setCidShareFile,
    setOpenShareFileModal: state.setOpenShareFileModal,
  }));

  const {setTypeSharedFile, setCidSharedWith, setOpenSharedWithModal } = useSharedWithStore((state) => ({
    setCidSharedWith:state.setCidSharedWith,
    setTypeSharedFile:state.setTypeSharedFile,
    setOpenSharedWithModal: state.setOpenSharedWithModal,
  }));

  const doFinalCheck = () => {
    setCid(cid)
    setType(type)
    setOpenDeleteModal()
    changeDivider()
  };
  const shareData = ()=>{
    setCidShareFile(cid)
    setTypeShareFile(type)
    setOpenShareFileModal()
    changeDivider()
  }

  const sharedWith = ()=>{
    setCidSharedWith(cid)
    setTypeSharedFile(type)
    setOpenSharedWithModal()
    changeDivider()
  }

  return (
    <div>
      
      <List
        sx={{
          width: "100%",
          maxWidth: 460,
          bgcolor: "#FFFFFF",
          borderRadius: "7px",
        }}
      >
        <ListItem sx={{ margin: "10px" }} onClick={doFinalCheck}>
          <ListItemAvatar>
            <Avatar>
              <DeleteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Remove" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{ margin: "10px" }} onClick={shareData}>
          <ListItemAvatar>
            <Avatar>
              <SendIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Share" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{ margin: "10px" }} onClick={sharedWith}>
          <ListItemAvatar>
            <Avatar>
              <GroupAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Shared" />
        </ListItem>
      </List>
    </div>
  );
};

export default Share_Remove

