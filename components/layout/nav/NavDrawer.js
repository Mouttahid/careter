import {List, ListItem, makeStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Link from 'next/link';

export default function NavDrawer({open, handleClose}) {
    return (

        <Drawer onClick={handleClose}
            className="nav-drawer"
            anchor={'right'}
            open={open}
            onClose={handleClose}>
            <List>
                <ListItem>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/reservation">
                        <a>Reservation</a>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    )
}
