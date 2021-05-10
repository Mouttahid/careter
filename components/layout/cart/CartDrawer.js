import {List, ListItem, makeStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

export default function CartDrawer({open, handleClose}) {
    return (

        <Drawer onClick={handleClose}
            className="cart-drawer"
            anchor={'top'}
            open={open}
            onClose={handleClose}>
            <List>
                <ListItem>list Item</ListItem>
                <ListItem>list Item</ListItem>
                <ListItem>list Item</ListItem>
                <ListItem>list Item</ListItem>
            </List>
        </Drawer>
    )
}
