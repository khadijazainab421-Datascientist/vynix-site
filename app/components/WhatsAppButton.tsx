"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(true);

  const message =
    "Hello Vynex Team 👋\n\nI need information about your VPS Hosting services.";

  const whatsappUrl = `https://wa.me/923315676118?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <div className="whatsapp-wrapper">

        {open && (
          <div className="whatsapp-popup">

            <button
              className="popup-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={14} />
            </button>


            <div className="popup-title">
              Need VPS Hosting Help?
            </div>

            <div className="popup-text">
              Chat with our expert team on WhatsApp.
              We reply quickly.
            </div>


            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-button"
            >
              <MessageCircle size={18} />
              Start Chat
            </a>

          </div>
        )}


        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="whatsapp-button"
        >

          <span className="pulse"></span>

          <MessageCircle size={30} />

        </a>


      </div>


      <style jsx>{`

        .whatsapp-wrapper {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 9999;
          font-family: Arial, sans-serif;
        }


        .whatsapp-button {

          width: 64px;
          height: 64px;

          border-radius: 50%;

          background:
          linear-gradient(
            135deg,
            #25d366,
            #128c7e
          );

          color:white;

          display:flex;
          align-items:center;
          justify-content:center;

          position:relative;

          box-shadow:
          0 12px 35px rgba(37,211,102,.45);

          transition:.25s ease;

        }



        .whatsapp-button:hover {

          transform:
          translateY(-5px)
          scale(1.08);

          box-shadow:
          0 18px 45px rgba(37,211,102,.55);

        }



        .pulse {

          position:absolute;

          width:100%;
          height:100%;

          border-radius:50%;

          background:#25d366;

          opacity:.35;

          animation:pulse 2s infinite;

          z-index:-1;

        }



        @keyframes pulse {

          0% {
            transform:scale(1);
            opacity:.5;
          }

          70% {
            transform:scale(1.6);
            opacity:0;
          }

          100% {
            opacity:0;
          }

        }



        .whatsapp-popup {

          position:absolute;

          right:0;

          bottom:78px;

          width:290px;

          background:white;

          border-radius:18px;

          padding:20px;

          box-shadow:
          0 20px 60px rgba(0,0,0,.15);

          border:
          1px solid #edf2f7;

          animation:
          slideUp .35s ease;

        }



        @keyframes slideUp {

          from {

            opacity:0;

            transform:
            translateY(15px);

          }

          to {

            opacity:1;

            transform:
            translateY(0);

          }

        }



        .popup-close {

          position:absolute;

          right:10px;

          top:10px;

          border:none;

          background:#f1f5f9;

          width:24px;

          height:24px;

          border-radius:50%;

          display:flex;

          align-items:center;

          justify-content:center;

          cursor:pointer;

          color:#64748b;

        }



        .popup-title {

          font-size:16px;

          font-weight:800;

          color:#0f172a;

          margin-bottom:8px;

          padding-right:20px;

        }



        .popup-text {

          font-size:13px;

          line-height:1.5;

          color:#64748b;

          margin-bottom:16px;

        }



        .popup-button {

          height:42px;

          border-radius:10px;

          background:#25d366;

          color:white;

          display:flex;

          align-items:center;

          justify-content:center;

          gap:8px;

          font-size:14px;

          font-weight:700;

          text-decoration:none;

          transition:.2s ease;

        }



        .popup-button:hover {

          background:#1ebe5d;

        }



        @media(max-width:640px){

          .whatsapp-wrapper {

            right:18px;

            bottom:18px;

          }


          .whatsapp-button {

            width:56px;

            height:56px;

          }


          .whatsapp-popup {

            width:260px;

            right:-5px;

          }

        }


      `}</style>
    </>
  );
}