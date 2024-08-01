"use client"
import React from 'react';
import { Bell, ChartLine, ChevronRight, Settings, User } from 'lucide-react';
import './sidebar.css';
import { activeItem, openSidebar } from './script';
export function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <nav className='sidebar-content'>
                <div className='user-container'>
                    <img className='user-image' src='https://avatars.githubusercontent.com/u/89950944?v=4' />
                    <div id='user-info' className='item-description'>
                        <p className='user-name'>Matheus Mendes</p>
                        <p className='user-bio'>Desenvolvedor ful stack</p>
                    </div>
                </div>
                <ul className='list-links'>
                    <li className='link'>
                        <a id='dashboard' className='active-item' href='#' onClick={()=>activeItem('dashboard')}>
                            <ChartLine/>
                            <span id='link-description' className='item-description' >Dashboard</span>
                        </a>
                    </li>
                    <li className='link'>
                        <a id='user' className='' href='#' onClick={()=>activeItem('user')}>
                            <User/>
                            <span id='link-description' className='item-description' >User</span>
                        </a>
                    </li>
                    <li className='link'>
                        <a id='bell' className='' href='#' onClick={()=>activeItem('bell')}>
                            <Bell/>
                            <span id='link-description' className='item-description' >Notificações</span>
                        </a>
                    </li>
                    <li className='link'>
                        <a id='settings' className='' href='#' onClick={()=>activeItem('settings')}>
                            <Settings/>
                            <span id='link-description' className='item-description' >Configurações</span>
                        </a>
                    </li>
                    
                 
                </ul>
                <button id='btn-open' className='btn-open ' onClick={()=>openSidebar()}><ChevronRight/></button>
            </nav>
        </div>
    )
}

