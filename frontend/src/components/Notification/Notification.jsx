import React from 'react';

export default function Notification({ onClick }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path d="M25.0001 12.947V12.007C25.0001 6.84833 20.9681 2.66699 16.0001 2.66699C11.0321 2.66699 7.00008 6.84833 7.00008 12.007V12.947C7.00169 14.0691 6.68148 15.1681 6.07742 16.1137L4.60008 18.4137C3.25208 20.5137 4.28142 23.3683 6.62675 24.0323C12.7549 25.7696 19.2453 25.7696 25.3734 24.0323C27.7188 23.3683 28.7481 20.5137 27.4001 18.415L25.9228 16.115C25.3182 15.1695 24.9975 14.0705 24.9988 12.9483L25.0001 12.947Z" stroke="black" stroke-width="1.5"/>
            <path d="M10 25.334C10.8733 27.6647 13.2293 29.334 16 29.334C18.7707 29.334 21.1267 27.6647 22 25.334" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    )
}