import React from 'react';
import {Menu, Icon} from "semantic-ui-react";
import "./AdminMenu.scss";
import {Link, useLocation} from "react-router-dom"
import {useAuth} from "../../../../hooks";

export function AdminMenu() {
    const {pathname} = useLocation();
    const {user: {role}} = useAuth();
    const isAdmin = role === "admin";

    const isCurrentPath = (path) =>{
        if(path === pathname) return true;
        return false;
    }
  return (
    <Menu fluid vertical icon text className='admin-menu'>
        {isAdmin&&(
            <>
        <Menu.Item as={Link} to="/admin/users" active={isCurrentPath("/admin/users")}>
            <Icon name='user outline'/>
            Usuarios
        </Menu.Item>
        <Menu.Item as={Link} to="/admin/menu" active={isCurrentPath("/admin/menu")}>
            <Icon name='plus'/>
            Menu
        </Menu.Item>
        <Menu.Item as={Link} to="/admin/courses" active={isCurrentPath("/admin/courses")}>
            <Icon name='list'/>
            Enlaces
        </Menu.Item>
        <Menu.Item as={Link} to="/admin/newsletter" active={isCurrentPath("/admin/newsletter")} >
            <Icon name='newspaper'/>
            Noticias
        </Menu.Item>
        </>
        )}
        <Menu.Item as={Link} to="/admin/blog" active={isCurrentPath("/admin/blog")}>
            <Icon name='users'/>
            Blog
        </Menu.Item>
    </Menu>
  )
}
