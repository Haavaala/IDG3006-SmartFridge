import React, { useRef } from "react";
import "./inventoryCard.css";
import Dessert from "../Icons/Dessert";
import NewSticker from "./NewSticker";
import axios from "axios";
import instance from "../../instance";

export default function InventoryCard({
  volume,
  title,
  num,
  iconSmall,
  iconBig,
  dateBestBefore,
  dateScanned,
  brand,
  allergens,
  barcode
}) {
  const dialogRef = useRef(null);

  const device_id = 1001;

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  //legger bare til slettefunksjonalitet her
  const handleDeleteItem = () => {
    const data = {
      barcode,
      device_id,
    };
    instance
      .post(`/delete_item.php?barcode=${barcode}`, data)
      .then((response) => {
        console.log(`Du sletta den ${barcode}`, response.data);
        window.location.reload();
        // setData((prevData) => prevData.filter((item) => item.barcode !== barcode));
      })
      .catch((error) => {
        console.error("Error ved sletting item", error);
      });
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  const formatDate = (date) => {
    date.split(" ")[0];
    const dateObject = new Date(date);
    
    const dateScannedSplit = dateScanned.split(" ")[0];
    const dateScannedObject = new Date(dateScannedSplit);

    let day = "";
    let month = "";
    let year = "";

    if (isNaN(dateObject)) {
      const twoWeeksLater = new Date(dateScannedObject.getTime() + 14 * 24 * 60 * 60 * 1000);

      day = twoWeeksLater.getDate().toString().padStart(2, '0');
      month = (twoWeeksLater.getMonth() + 1).toString().padStart(2, '0'); 
      year = twoWeeksLater.getFullYear();
    } else {
      day = dateObject.getDate().toString().padStart(2, "0");
      month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      year = dateObject.getFullYear().toString().slice(-2);
    }

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  const setNewSticker = () => {
    const scanningDateString = dateScanned.split(" ")[0];

    const today = new Date();
    const scanningDate = new Date(scanningDateString);

    const timeDifference = today - scanningDate; // Difference in milliseconds

    const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;

    if (timeDifference <= oneDayInMilliseconds) {
      return <NewSticker />;
    }
  };

  const checkBestBeforeDate = () => {
    const dateBestBeforeSplit = dateBestBefore.split(" ")[0];
    const dateBestBeforeObject = new Date(dateBestBeforeSplit);

    const dateScannedSplit = dateScanned.split(" ")[0];
    const dateScannedObject = new Date(dateScannedSplit);

    if (isNaN(dateBestBeforeObject)) {
      const twoWeeksLater = new Date(dateScannedObject.getTime() + 14 * 24 * 60 * 60 * 1000);

      const today = new Date();
      return today <= twoWeeksLater ? "green" : "red";
    } else {
      // Compare with today's date
      const today = new Date();
      if (today > dateBestBeforeObject) {
        // Best before date has passed, set icon color to red
        return "#BD6F4E";
      } else {
        // Best before date is still valid, set icon color to green
        return "#59704B";
      }
    }
  };

  const IconColor = checkBestBeforeDate();


  return (
    <>
      <div className="inventoryCard__container">
        {setNewSticker()}
        <div className="inventoryCard__firstPartContainer">
          <div className="inventoryCard__icon">{iconSmall ? iconSmall : ""}</div>
          <div className="inventoryCard__titleBox">
            <p>{title ? title : "Udefinert vare"}</p>
            <div className="inventoryCard__numberBox smallp">
              <p>{num}</p>
            </div>
          </div>
        </div>
        <div className="inventoryCard__stroke--horizontal" />
        <div>
          <div className="inventoryCard__details">
            <p className="smallp">{volume}</p>
            <div className="inventoryCard__details--icons">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_215_803)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.50008 1.94824C6.76236 1.94824 5.09581 2.63855 3.86706 3.8673C2.6383 5.09606 1.948 6.76261 1.948 8.50033C1.948 10.238 2.6383 11.9046 3.86706 13.1333C5.09581 14.3621 6.76236 15.0524 8.50008 15.0524C10.2378 15.0524 11.9044 14.3621 13.1331 13.1333C14.3619 11.9046 15.0522 10.238 15.0522 8.50033C15.0522 6.76261 14.3619 5.09606 13.1331 3.8673C11.9044 2.63855 10.2378 1.94824 8.50008 1.94824ZM0.885498 8.50033C0.885498 4.29495 4.29471 0.885742 8.50008 0.885742C12.7055 0.885742 16.1147 4.29495 16.1147 8.50033C16.1147 12.7057 12.7055 16.1149 8.50008 16.1149C4.29471 16.1149 0.885498 12.7057 0.885498 8.50033ZM8.50008 5.13574C8.64098 5.13574 8.7761 5.19171 8.87573 5.29134C8.97536 5.39097 9.03133 5.5261 9.03133 5.66699V8.28074L10.6463 9.89574C10.6985 9.94438 10.7404 10.003 10.7694 10.0682C10.7985 10.1334 10.8141 10.2037 10.8153 10.275C10.8166 10.3464 10.8035 10.4172 10.7768 10.4834C10.75 10.5495 10.7103 10.6096 10.6598 10.6601C10.6094 10.7105 10.5493 10.7503 10.4831 10.777C10.417 10.8037 10.3461 10.8168 10.2748 10.8156C10.2035 10.8143 10.1331 10.7987 10.068 10.7697C10.0028 10.7406 9.94413 10.6988 9.8955 10.6466L8.12467 8.87574C8.02501 8.77621 7.96896 8.64117 7.96883 8.50033V5.66699C7.96883 5.5261 8.0248 5.39097 8.12443 5.29134C8.22406 5.19171 8.35919 5.13574 8.50008 5.13574Z"
                    fill={IconColor}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_215_803">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.47795"
                  cy="2.43474"
                  r="1.93474"
                  fill="#1A1A1A"
                  stroke="#1A1A1A"
                />
                <path
                  d="M12.5281 1.21777C12.5281 1.21777 13.2401 3.43553 13.9115 4.75988C14.658 6.23226 16.2171 8.30198 16.2171 8.30198C16.2171 8.30198 15.1705 9.13697 14.3726 9.38001C13.6238 9.60811 12.3744 9.53401 12.3744 9.53401M10.3762 14.0001C10.3762 14.0001 9.23944 13.9933 8.5317 13.8461C7.45113 13.6215 6.85013 13.3611 5.91866 12.7681C4.9507 12.1519 4.50879 11.6421 3.76675 10.7661C3.15262 10.041 2.84984 9.59215 2.38337 8.76399C1.86814 7.84926 1.30742 6.29992 1.30742 6.29992M1.30742 6.29992L1 9.38001M1.30742 6.29992L3.61304 7.53196"
                  stroke="#1A1A1A"
                />
              </svg>
            </div>
            <div className="inventoryCard__details--arrow">
              {/* <button onClick={handleSeeMore}>
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L7 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div> */}
              <button onClick={openDialog}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_255_963)">
                    <path
                      d="M6 10.0003L1.33333 14.667M1.33333 14.667H5.2381M1.33333 14.667V10.7622"
                      stroke="#1A1A1A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 5.99967L14.6667 1.33301M14.6667 1.33301H10.7619M14.6667 1.33301V5.23777"
                      stroke="#1A1A1A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_255_963">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog ref={dialogRef} className="inventoryDialog">
        <div className="inventoryDialog__firstPartContainer">
          <div className="inventoryCard__icon inventoryDialog__icon">{iconBig}</div>
          <div className="inventoryDialog__titleBox">
            <p>{title ? title : "Udefinert vare"}</p>
            <button onClick={closeDialog}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11.5" stroke="black" />
                <path
                  d="M8.03027 8.46973L15.5303 15.9697"
                  stroke="black"
                  stroke-linecap="round"
                />
                <path
                  d="M15.5303 8.46973L8.03027 15.9697"
                  stroke="black"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="inventoryCard__stroke--horizontal" />
        <div className="inventoryDialog__details">
          <div className="grid__twoColumn">
            <p className="smallp">{volume}</p>
            <p className="medium">{brand}</p>
          </div>
          <div className="inventoryDialog__details--bestFør">
            <div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_215_803)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.50008 1.94824C6.76236 1.94824 5.09581 2.63855 3.86706 3.8673C2.6383 5.09606 1.948 6.76261 1.948 8.50033C1.948 10.238 2.6383 11.9046 3.86706 13.1333C5.09581 14.3621 6.76236 15.0524 8.50008 15.0524C10.2378 15.0524 11.9044 14.3621 13.1331 13.1333C14.3619 11.9046 15.0522 10.238 15.0522 8.50033C15.0522 6.76261 14.3619 5.09606 13.1331 3.8673C11.9044 2.63855 10.2378 1.94824 8.50008 1.94824ZM0.885498 8.50033C0.885498 4.29495 4.29471 0.885742 8.50008 0.885742C12.7055 0.885742 16.1147 4.29495 16.1147 8.50033C16.1147 12.7057 12.7055 16.1149 8.50008 16.1149C4.29471 16.1149 0.885498 12.7057 0.885498 8.50033ZM8.50008 5.13574C8.64098 5.13574 8.7761 5.19171 8.87573 5.29134C8.97536 5.39097 9.03133 5.5261 9.03133 5.66699V8.28074L10.6463 9.89574C10.6985 9.94438 10.7404 10.003 10.7694 10.0682C10.7985 10.1334 10.8141 10.2037 10.8153 10.275C10.8166 10.3464 10.8035 10.4172 10.7768 10.4834C10.75 10.5495 10.7103 10.6096 10.6598 10.6601C10.6094 10.7105 10.5493 10.7503 10.4831 10.777C10.417 10.8037 10.3461 10.8168 10.2748 10.8156C10.2035 10.8143 10.1331 10.7987 10.068 10.7697C10.0028 10.7406 9.94413 10.6988 9.8955 10.6466L8.12467 8.87574C8.02501 8.77621 7.96896 8.64117 7.96883 8.50033V5.66699C7.96883 5.5261 8.0248 5.39097 8.12443 5.29134C8.22406 5.19171 8.35919 5.13574 8.50008 5.13574Z"
                    fill={IconColor}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_215_803">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="smallp">
                Best før:{" "}
                {dateBestBefore ? formatDate(dateBestBefore) : "23.11.23"}
              </p>
            </div>
            <div>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.47795"
                  cy="2.43474"
                  r="1.93474"
                  fill="#1A1A1A"
                  stroke="#1A1A1A"
                />
                <path
                  d="M12.5281 1.21777C12.5281 1.21777 13.2401 3.43553 13.9115 4.75988C14.658 6.23226 16.2171 8.30198 16.2171 8.30198C16.2171 8.30198 15.1705 9.13697 14.3726 9.38001C13.6238 9.60811 12.3744 9.53401 12.3744 9.53401M10.3762 14.0001C10.3762 14.0001 9.23944 13.9933 8.5317 13.8461C7.45113 13.6215 6.85013 13.3611 5.91866 12.7681C4.9507 12.1519 4.50879 11.6421 3.76675 10.7661C3.15262 10.041 2.84984 9.59215 2.38337 8.76399C1.86814 7.84926 1.30742 6.29992 1.30742 6.29992M1.30742 6.29992L1 9.38001M1.30742 6.29992L3.61304 7.53196"
                  stroke="#1A1A1A"
                />
              </svg>
              <p className="smallp underline">God etter</p>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_257_2111)">
                  <path
                    d="M11 6.99896C10.9855 8.70596 10.8908 9.647 10.2702 10.2676C9.53776 11 8.35894 11 6.0013 11C3.64367 11 2.46485 11 1.73242 10.2676C1 9.53515 1 8.35633 1 5.9987C1 3.64106 1 2.46224 1.73242 1.72982C2.353 1.10924 3.29403 1.01447 5.00104 1"
                    stroke="#1A1A1A"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 3.5H7C6.21143 3.5 5.69464 3.8358 5.43898 4.05801C5.32073 4.16079 5.26161 4.21218 5.2369 4.2369C5.21218 4.26161 5.16079 4.32073 5.05801 4.43898C4.8358 4.69464 4.5 5.21143 4.5 6V7.5M11 3.5L8.5 1M11 3.5L8.5 6"
                    stroke="#1A1A1A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_257_2111">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <p className="smallp medium">Allergener:</p>
            <p className="smallp">{allergens ? allergens : "Ingen"}</p>
          </div>
        </div>
        <div className="inventoryCard__stroke--horizontal" />
        <div className="inventoryDialog__scannedAndDelete">
          <p className="inventoryDialog__scannedAndDelete--scanned">
            Scannet <span className="smallp">{formatDate(dateScanned)}</span>
          </p>
          <button onClick={handleDeleteItem}>Slett varene</button>
        </div>
      </dialog>
    </>
  );
}
