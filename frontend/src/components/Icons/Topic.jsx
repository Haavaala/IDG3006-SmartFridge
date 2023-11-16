import React from 'react';
import './icons.css';

export default function Topic({size}) {

    const svgSizeStyle = size === 'big' ? 'svg-big' : 'svg-small'
    
    const viewBox = size == 'big' ? '0 0 44 64' : '0 0 62 90'

    return (
        <>
        <svg className={svgSizeStyle} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.1296 50.087L83.4365 44.8591C83.4925 44.6352 83.4919 44.4008 83.4347 44.1772C83.3775 43.9535 83.2656 43.7476 83.109 43.578C82.9524 43.4084 82.7561 43.2804 82.5377 43.2056C82.3193 43.1308 82.0858 43.1115 81.8581 43.1494L75.3553 44.2332C74.4784 42.1102 73.0844 40.2403 71.3002 38.7937C72.8967 35.0875 73.739 30.8424 73.739 26.4348C73.739 19.2144 71.5111 12.6063 67.4659 7.82748C63.1311 2.70661 57.1216 0 50.0868 0H30.6085C16.0323 0 4.17374 11.8586 4.17374 26.4348C4.1731 30.4757 5.09803 34.463 6.87756 38.091C4.24207 39.6351 2.18817 42.0038 1.033 44.8315C-0.12218 47.6591 -0.314389 50.7884 0.486045 53.7362C1.28648 56.684 3.03504 59.2863 5.46175 61.1413C7.88846 62.9964 10.8583 64.001 13.9129 64H63.9998C69.023 64 73.3621 60.6957 75.3553 55.9407L81.8581 57.0245C82.0858 57.0625 82.3193 57.0431 82.5377 56.9683C82.7561 56.8935 82.9524 56.7655 83.109 56.5959C83.2656 56.4263 83.3775 56.2204 83.4347 55.9967C83.4919 55.7731 83.4925 55.5387 83.4365 55.3148L82.1296 50.087ZM65.3421 9.62522C68.9624 13.9023 70.9563 19.872 70.9563 26.4348C70.9563 30.3064 70.2539 34.028 68.916 37.2925C68.1797 36.9416 67.4084 36.6697 66.6148 36.4814C67.6683 33.2374 68.1947 29.8455 68.1737 26.4348C68.1737 19.2144 65.9457 12.6063 61.9007 7.82748C60.8122 6.5368 59.5812 5.3734 58.2311 4.35948C60.9851 5.52666 63.4223 7.33147 65.3421 9.62522ZM54.2116 9.62522C57.832 13.9023 59.8259 19.872 59.8259 26.4348C59.8509 29.7496 59.3053 33.0441 58.213 36.1739H55.1915C56.4231 33.075 57.0517 29.7694 57.0433 26.4348C57.0399 21.6653 55.7473 16.9855 53.3023 12.8904C50.8574 8.79532 47.3509 5.43731 43.1539 3.17165C47.4791 3.96888 51.3902 6.25146 54.2116 9.62522ZM56.3355 7.82748C55.247 6.5368 54.016 5.3734 52.6659 4.35948C55.4199 5.52664 57.8573 7.33145 59.777 9.62522C63.3972 13.9023 65.3911 19.872 65.3911 26.4348C65.4161 29.7496 64.8705 33.0441 63.7783 36.1739H61.1501C62.1357 33.0222 62.6277 29.737 62.6085 26.4348C62.6085 19.2144 60.3805 12.6063 56.3355 7.82748ZM6.95635 26.4348C6.95635 13.3929 17.5668 2.78261 30.6085 2.78261C43.6503 2.78261 54.2607 13.3929 54.2607 26.4348C54.2698 29.7937 53.5559 33.1153 52.1676 36.1739H13.9129C12.3792 36.1737 10.8562 36.4283 9.40608 36.9273C7.7939 33.6646 6.95562 30.0741 6.95635 26.4348ZM2.78243 50.087C2.78243 47.8856 3.43522 45.7336 4.65825 43.9032C5.88128 42.0728 7.61961 40.6462 9.65343 39.8038C11.6873 38.9613 13.9252 38.7409 16.0843 39.1704C18.2434 39.5999 20.2267 40.6599 21.7833 42.2166C23.3399 43.7732 24.4 45.7564 24.8294 47.9155C25.2589 50.0746 25.0385 52.3126 24.196 54.3464C23.3536 56.3802 21.927 58.1185 20.0966 59.3416C18.2662 60.5646 16.1143 61.2174 13.9129 61.2174C10.9619 61.2141 8.13276 60.0403 6.04612 57.9537C3.95948 55.8671 2.78575 53.0379 2.78243 50.087ZM63.9998 61.2174H22.2511C23.9816 59.9232 25.3866 58.2433 26.3543 56.3112C27.322 54.3791 27.8259 52.2479 27.8259 50.087C27.8259 47.926 27.322 45.7949 26.3543 43.8627C25.3866 41.9306 23.9816 40.2507 22.2511 38.9565H27.8259C30.9436 38.9565 36.1737 40.4024 36.1737 50.087C36.1737 50.456 36.3203 50.8098 36.5812 51.0708C36.8422 51.3317 37.196 51.4783 37.565 51.4783C37.934 51.4783 38.2879 51.3317 38.5488 51.0708C38.8098 50.8098 38.9563 50.456 38.9563 50.087C38.9563 45.1423 37.6146 41.3303 35.1809 38.9565H41.739C44.8567 38.9565 50.0868 40.4024 50.0868 50.087C50.0868 50.456 50.2334 50.8098 50.4943 51.0708C50.7552 51.3317 51.1091 51.4783 51.4781 51.4783C51.8471 51.4783 52.201 51.3317 52.4619 51.0708C52.7228 50.8098 52.8694 50.456 52.8694 50.087C52.8694 45.1423 51.5276 41.3303 49.0939 38.9565H54.2607C57.3784 38.9565 62.6085 40.4024 62.6085 50.087C62.6085 50.456 62.7551 50.8098 63.016 51.0708C63.2769 51.3317 63.6308 51.4783 63.9998 51.4783C64.3688 51.4783 64.7227 51.3317 64.9836 51.0708C65.2445 50.8098 65.3911 50.456 65.3911 50.087C65.3911 45.1423 64.0494 41.3303 61.6156 38.9565H63.9998C69.3701 38.9565 73.739 43.9496 73.739 50.087C73.739 56.2243 69.3701 61.2174 63.9998 61.2174ZM79.3457 50.4243L80.2223 53.931L76.1894 53.2588C76.6323 51.1674 76.6323 49.0065 76.1894 46.9151L80.2223 46.243L79.3457 49.7496C79.2903 49.9711 79.2903 50.2028 79.3457 50.4243Z" fill="black"/>
        <path d="M11.1305 48.6953C10.3049 48.6953 9.49795 48.9401 8.81156 49.3987C8.12516 49.8574 7.59018 50.5093 7.27427 51.2719C6.95835 52.0346 6.87569 52.8739 7.03675 53.6835C7.1978 54.4932 7.59532 55.2369 8.17906 55.8206C8.76279 56.4044 9.50651 56.8019 10.3162 56.9629C11.1258 57.124 11.9651 57.0413 12.7277 56.7254C13.4904 56.4095 14.1423 55.8745 14.6009 55.1881C15.0596 54.5017 15.3044 53.6947 15.3044 52.8692C15.3031 51.7626 14.863 50.7017 14.0805 49.9192C13.298 49.1367 12.2371 48.6966 11.1305 48.6953ZM11.1305 54.2605C10.8553 54.2605 10.5863 54.1789 10.3575 54.0261C10.1287 53.8732 9.95036 53.6559 9.84506 53.4017C9.73976 53.1474 9.7122 52.8677 9.76589 52.5978C9.81957 52.3279 9.95208 52.08 10.1467 51.8854C10.3412 51.6908 10.5891 51.5583 10.859 51.5047C11.1289 51.451 11.4087 51.4785 11.6629 51.5838C11.9171 51.6891 12.1344 51.8675 12.2873 52.0963C12.4402 52.3251 12.5218 52.5941 12.5218 52.8692C12.5213 53.2381 12.3746 53.5917 12.1138 53.8526C11.853 54.1134 11.4993 54.2601 11.1305 54.2605Z" fill="black"/>
        <path d="M31.7117 30.2011C31.8409 30.3303 31.9943 30.4328 32.1631 30.5027C32.3319 30.5727 32.5128 30.6087 32.6956 30.6087C32.8783 30.6087 33.0592 30.5727 33.228 30.5027C33.3968 30.4328 33.5502 30.3303 33.6794 30.2011L39.2446 24.6359C39.5055 24.375 39.6521 24.0211 39.6521 23.6521C39.6521 23.2831 39.5055 22.9292 39.2446 22.6683C38.9837 22.4073 38.6298 22.2607 38.2608 22.2607C37.8918 22.2607 37.5379 22.4073 37.2769 22.6683L31.7117 28.2335C31.5825 28.3627 31.48 28.516 31.4101 28.6849C31.3402 28.8537 31.3042 29.0346 31.3042 29.2173C31.3042 29.4 31.3402 29.5809 31.4101 29.7497C31.48 29.9186 31.5825 30.0719 31.7117 30.2011Z" fill="black"/>
        <path d="M19.4783 30.6085C19.661 30.6087 19.842 30.5729 20.0109 30.5029C20.1797 30.433 20.333 30.3304 20.4621 30.201L35.7664 14.8967C36.0274 14.6357 36.174 14.2818 36.174 13.9128C36.174 13.5438 36.0274 13.1899 35.7664 12.929C35.5055 12.6681 35.1516 12.5215 34.7826 12.5215C34.4136 12.5215 34.0597 12.6681 33.7988 12.929L18.4944 28.2333C18.2999 28.4279 18.1673 28.6758 18.1137 28.9457C18.06 29.2156 18.0875 29.4954 18.1928 29.7496C18.2981 30.0038 18.4765 30.2211 18.7053 30.374C18.9341 30.5269 19.2031 30.6085 19.4783 30.6085Z" fill="black"/>
        <path d="M18.0866 47.3041C18.855 47.3041 19.4779 46.6812 19.4779 45.9128C19.4779 45.1444 18.855 44.5215 18.0866 44.5215C17.3182 44.5215 16.6953 45.1444 16.6953 45.9128C16.6953 46.6812 17.3182 47.3041 18.0866 47.3041Z" fill="black"/>
        </svg>
        </>
    )
}