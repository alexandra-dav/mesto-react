import React from "react";

export function Login({isOpen}) {
    return (
      <div
        className={`popup popup_photo ${isOpen ? "popup_opened" : ""}`}
        id="view_photo"
      >
        <div className="photo">
          <button
            aria-label="close"
            className="popup__close popup__close_window_photo"
            type="button"
          ></button>
        </div>
      </div>
    );
  }
  