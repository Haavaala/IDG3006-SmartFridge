import React from 'react';
import './icons.css';

export default function Bakery({size}) {


    const svgSizeStyle = size === 'big' ? 'svg-big' : 'svg-small'

    const viewBox = size == 'big' ? '0 0 44 64' : '0 0 62 90'

    return (
        <>
        <svg className={svgSizeStyle} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.2741 28.7246C26.4047 28.7781 26.5446 28.8052 26.6857 28.8042C26.8269 28.8032 26.9664 28.7742 27.0963 28.7189C27.2261 28.6636 27.3437 28.5831 27.4422 28.482C27.5408 28.381 27.6182 28.2613 27.6702 28.1301C27.7221 27.9989 27.7475 27.8586 27.7448 27.7175C27.7422 27.5764 27.7116 27.4372 27.6547 27.308C27.5979 27.1788 27.516 27.0622 27.4137 26.9649C27.3115 26.8676 27.191 26.7915 27.0591 26.7411C24.5889 25.7631 21.4191 25.2246 18.1333 25.2246C14.8474 25.2246 11.6777 25.7631 9.20739 26.7411C9.07555 26.7915 8.95501 26.8676 8.85278 26.9649C8.75054 27.0622 8.66863 27.1788 8.61179 27.308C8.55495 27.4372 8.52432 27.5764 8.52167 27.7175C8.51902 27.8586 8.5444 27.9989 8.59635 28.1301C8.64829 28.2613 8.72577 28.381 8.82428 28.482C8.92279 28.5831 9.04038 28.6636 9.17024 28.7189C9.3001 28.7742 9.43964 28.8032 9.58078 28.8042C9.72192 28.8052 9.86185 28.7781 9.99246 28.7246C12.2191 27.8433 15.1101 27.3579 18.1333 27.3579C21.1565 27.3579 24.0475 27.8433 26.2741 28.7246Z" fill="black"/>
            <path d="M53.3333 0H49.0667C45.9512 0 43.2516 3.39253 41.2597 9.81067C40.3157 12.8527 39.5893 16.4035 39.1047 20.2667H17.0667V20.2824C12.7616 20.3964 8.7352 21.1971 5.63387 22.5689C2.0008 24.1759 0 26.418 0 28.8823C0 31.0011 1.50893 32.9859 4.26667 34.5177V54.1399C2.6465 55.4362 1.53918 57.2656 1.142 59.3021C1.02766 59.8772 1.04251 60.4705 1.18548 61.0391C1.32844 61.6077 1.59595 62.1374 1.96867 62.59C2.3285 63.0304 2.78169 63.3854 3.2955 63.6293C3.8093 63.8731 4.37087 63.9997 4.9396 64H44.1271C44.9916 64.0002 45.8306 63.7074 46.5073 63.1695C47.2571 63.6982 48.1493 63.9877 49.0667 64H53.3333C56.4488 64 59.1484 60.6075 61.1403 54.1893C62.9844 48.2472 64 40.3668 64 32C64 23.6332 62.9844 15.7528 61.1403 9.81067C59.1484 3.39253 56.4488 0 53.3333 0ZM4.9396 61.8667C4.68587 61.8659 4.43549 61.8087 4.20654 61.6994C3.97759 61.59 3.77579 61.4311 3.61573 61.2343C3.44359 61.0245 3.3202 60.7792 3.25446 60.516C3.18872 60.2527 3.18227 59.9782 3.2356 59.7121C3.44038 58.6502 3.90315 57.655 4.58316 56.814C5.26316 55.9731 6.13953 55.3122 7.13507 54.8897C6.84454 55.7163 6.62739 56.5668 6.48613 57.4315C6.22434 58.9707 6.54621 60.5522 7.3888 61.8667H4.9396ZM11.7333 61.8667H11.1148C10.4843 61.8667 9.8748 61.5587 9.40027 61C8.69853 60.174 8.39613 58.9689 8.59133 57.7764C9.12467 54.5161 10.818 51.7871 13.1156 50.2931C12.7156 51.9573 12.6926 53.6899 13.0483 55.3641L14.3283 61.4575C14.3583 61.5963 14.3978 61.7329 14.4464 61.8664L11.7333 61.8667ZM14.2587 47.3937C11.8259 48.1916 9.7424 49.9756 8.3152 52.3617C7.65829 52.4606 7.0154 52.637 6.4 52.8872V33.8748C6.40001 33.6769 6.34495 33.4829 6.24099 33.3145C6.13703 33.1461 5.98826 33.0099 5.81133 32.9212C3.44 31.7324 2.13333 30.298 2.13333 28.8823C2.13333 27.3365 3.72387 25.7467 6.49693 24.52C9.58733 23.1528 13.72 22.4 18.1333 22.4C22.5467 22.4 26.68 23.1528 29.7697 24.52C32.5431 25.7467 34.1333 27.3367 34.1333 28.8824C34.1333 30.2981 32.8267 31.7325 30.4553 32.9213C30.2784 33.01 30.1297 33.1462 30.0257 33.3145C29.9218 33.4829 29.8667 33.6769 29.8667 33.8748V42.7325C29.056 42.3467 28.2014 42.061 27.3216 41.8817C25.4819 41.5041 23.5847 41.5041 21.7451 41.8817C20.3073 42.1745 18.9422 42.7505 17.7295 43.5764C16.5167 44.4022 15.4805 45.4612 14.6813 46.6917C14.5305 46.9213 14.3917 47.1564 14.2587 47.3937ZM33.9305 54.9251L32.6505 61.0193C32.5994 61.2585 32.4679 61.4729 32.278 61.6271C32.0881 61.7812 31.8512 61.8658 31.6067 61.8667H17.46C17.2154 61.8658 16.9785 61.7812 16.7887 61.6271C16.5988 61.4729 16.4673 61.2585 16.4161 61.0193L15.1361 54.9251C14.8776 53.7187 14.8619 52.473 15.09 51.2605C15.318 50.0481 15.7853 48.8932 16.4644 47.8632C17.1097 46.8683 17.9466 46.0118 18.9264 45.3437C19.9062 44.6756 21.0092 44.2093 22.1711 43.972C23.7293 43.6522 25.3363 43.6522 26.8945 43.972C28.0564 44.2093 29.1594 44.6756 30.1392 45.3437C31.119 46.0118 31.9559 46.8683 32.6012 47.8632C33.2805 48.8931 33.7479 50.048 33.9762 51.2604C34.2044 52.4729 34.1889 53.7187 33.9305 54.9251ZM39.6667 61C39.1916 61.5591 38.5827 61.8667 37.9521 61.8667H34.6201C34.6687 61.7332 34.7082 61.5966 34.7383 61.4579L36.0183 55.3637C36.3742 53.6895 36.3514 51.9569 35.9516 50.2927C38.2493 51.786 39.9421 54.5159 40.4759 57.7761C40.6705 58.9687 40.3681 60.1733 39.6667 61ZM34.808 47.3937C34.6747 47.1564 34.5361 46.9213 34.3853 46.6917C33.7334 45.6978 32.9283 44.8132 32 44.0707V34.5177C34.7577 32.9859 36.2667 31.0011 36.2667 28.8823C36.2667 26.418 34.2659 24.1756 30.6328 22.5689C30.5019 22.5109 30.3661 22.4559 30.2328 22.4H38.8655C38.5592 25.4645 38.4 28.694 38.4 32C38.4 39.5407 39.2173 46.6376 40.72 52.3092C39.294 49.9492 37.2229 48.1857 34.808 47.3937ZM45.4509 61.2337C45.2909 61.4307 45.0892 61.5897 44.8602 61.6991C44.6313 61.8086 44.3808 61.8658 44.1271 61.8667H41.6779C42.5205 60.5522 42.8424 58.9706 42.5805 57.4313C42.4392 56.5667 42.2221 55.7163 41.9316 54.8897C42.9272 55.3122 43.8036 55.9731 44.4836 56.814C45.1636 57.655 45.6263 58.6503 45.8311 59.7123C45.8844 59.9783 45.8779 60.2528 45.8122 60.516C45.7465 60.7792 45.6231 61.0246 45.4509 61.2343V61.2337ZM49.0667 61.8667C48.5983 61.8527 48.1439 61.7037 47.7581 61.4376C48.008 60.7544 48.0656 60.0158 47.9247 59.3021C47.6659 57.9706 47.1007 56.7176 46.2739 55.6423C45.4471 54.567 44.3814 53.6989 43.1611 53.1067C42.6212 51.2593 42.1815 49.3842 41.8439 47.4895C43.3168 47.0761 46.5839 46.5197 50.8627 47.9459C50.9968 47.9957 51.1396 48.0179 51.2825 48.0114C51.4255 48.0049 51.5656 47.9696 51.6947 47.9078C51.8237 47.846 51.939 47.7588 52.0337 47.6515C52.1283 47.5442 52.2004 47.419 52.2457 47.2832C52.291 47.1475 52.3084 47.004 52.2971 46.8614C52.2858 46.7188 52.2459 46.5799 52.1798 46.453C52.1136 46.3261 52.0227 46.2138 51.9123 46.1228C51.8018 46.0318 51.6743 45.9639 51.5371 45.9232L51.5252 45.9193L51.5101 45.9147C46.9188 44.3907 43.3501 44.8797 41.4912 45.3701C40.877 41.1822 40.5578 36.9562 40.536 32.7235C41.8399 32.28 45.2129 31.486 49.7957 33.0136C49.9299 33.0634 50.0727 33.0857 50.2156 33.0791C50.3585 33.0726 50.4987 33.0374 50.6277 32.9755C50.7568 32.9137 50.8721 32.8266 50.9667 32.7193C51.0614 32.612 51.1335 32.4867 51.1788 32.351C51.224 32.2152 51.2415 32.0718 51.2302 31.9291C51.2189 31.7865 51.1789 31.6476 51.1128 31.5207C51.0467 31.3938 50.9557 31.2815 50.8453 31.1905C50.7349 31.0995 50.6073 31.0316 50.4701 30.9909L50.4584 30.9872L50.4429 30.9823C45.9532 29.4924 42.4413 29.9784 40.5441 30.4949C40.5914 26.5839 40.8959 22.6803 41.4556 18.8092C42.6715 18.4092 46.1548 17.5789 50.8621 19.148C50.9963 19.1978 51.1391 19.2201 51.282 19.2135C51.425 19.207 51.5651 19.1718 51.6942 19.1099C51.8232 19.0481 51.9385 18.961 52.0331 18.8537C52.1278 18.7464 52.1999 18.6211 52.2452 18.4854C52.2904 18.3496 52.3079 18.2062 52.2966 18.0635C52.2853 17.9209 52.2453 17.782 52.1792 17.6551C52.1131 17.5282 52.0221 17.4159 51.9117 17.3249C51.8013 17.2339 51.6737 17.166 51.5365 17.1253L51.5247 17.1215L51.5096 17.1168C47.1905 15.6832 43.7777 16.0311 41.8407 16.4857C42.2063 14.4458 42.6924 12.4293 43.2964 10.4468C44.912 5.24 47.0688 2.13333 49.0667 2.13333C51.0645 2.13333 53.2213 5.24 54.8361 10.4429C56.6185 16.1867 57.6 23.8416 57.6 32C57.6 40.1584 56.6185 47.814 54.8361 53.5571C53.2213 58.76 51.0645 61.8667 49.0667 61.8667ZM59.1028 53.5571C57.488 58.76 55.3312 61.8667 53.3333 61.8667H53.0855C54.5229 60.2225 55.8011 57.6455 56.8736 54.1893C58.7177 48.2472 59.7333 40.3668 59.7333 32C59.7333 23.6332 58.7177 15.7528 56.8736 9.81067C55.8011 6.35453 54.5229 3.77747 53.0855 2.13333H53.3333C55.3312 2.13333 57.488 5.24 59.1028 10.4429C60.8852 16.1867 61.8667 23.8416 61.8667 32C61.8667 40.1584 60.8852 47.814 59.1028 53.5571Z" fill="black"/>
        </svg>
        </>
    )
}